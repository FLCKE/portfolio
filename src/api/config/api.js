import axios from "axios";
const axiosClient = axios.create({
    baseURL:
        process.env.REACT_APP_API_BASE_URL || "https://backendportfolio-c5x0.onrender.com/" ,
    withCredentials: false, // Passe à true si tu utilises des cookies sécurisés
});

// Intercepteur pour ajouter le token automatiquement
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        if (config.data instanceof FormData) {
            // important: supprimer pour éviter d'écraser le boundary
            delete config.headers["Content-Type"];
        } else {
            config.headers["Content-Type"] = "application/json";
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// (Optionnel) Intercepteur de réponse pour gérer les 401 / refresh token
axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            console.warn("⚠️ Token expiré ou invalide, déconnexion automatique");
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_user");
            // Tu peux rediriger vers /login ici, par ex :
            // window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
