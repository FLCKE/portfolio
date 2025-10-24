import axiosClient from "./config/api";


/**
* POST /api/auth/login
* Attendu côté API: { email, password }
* Réponse attendue: { token, user }
*/
export async function loginRequest({ email, password }) {
const { data } = await axiosClient.post("/api/auth/login", { email, password });
return data; // { token, user }
}