import React, { useState } from "react";
import { useAuthProvider } from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function LoginPage() {
  const { login, loading } = useAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email || !password) return setError("Email et mot de passe requis.");
    try {
      await login({ email: email.trim(), password });
      navigate(from, { replace: true });
    } catch (err) {
      const msg =
        err?.response?.data?.message || err?.message || "Échec de connexion.";
      setError(msg);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: "100%", maxWidth: 400 }}>
        <div className="card-body">
          <h1 className="h4 text-center mb-2">Connexion</h1>
          <p className="text-muted text-center mb-4">
            Accède à ton tableau de bord.
          </p>

          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="••••••••"
                autoComplete="current-password"
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-dark w-100"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <div className="text-center mt-3">
            <small className="text-muted">
              Pas de compte ?{" "}
              <Link to="#" className="text-decoration-underline">
                Contacte l'admin
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
