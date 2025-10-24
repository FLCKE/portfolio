import { useCallback, useEffect, useMemo, useState } from "react";
import { loginRequest } from "../api/auth";


const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";


export function useAuthProvider() {
    const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || "");
    const [user, setUser] = useState(() => {
        const raw = localStorage.getItem(USER_KEY);
        try { return raw ? JSON.parse(raw) : null; } catch { return null; }
    });
    const [loading, setLoading] = useState(false);
    const isAuthenticated = !!token;


    const login = useCallback(async ({ email, password }) => {
        setLoading(true);
        try {
            const { token, user } = await loginRequest({ email, password });
            setToken(token);
            setUser(user);
            localStorage.setItem(TOKEN_KEY, token);
            localStorage.setItem(USER_KEY, JSON.stringify(user));
            return { token, user };
        } finally {
            setLoading(false);
        }
    }, []);


    const logout = useCallback(() => {
        setToken("");
        setUser(null);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    }, []);




    return useMemo(() => ({ token, user, isAuthenticated, loading, login, logout }), [token, user, isAuthenticated, loading, login, logout]);
}

