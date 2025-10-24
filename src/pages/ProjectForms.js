import React, { useMemo, useState } from "react";
import { createProjectWithUpload } from "../api/projects";
import NavBarAdmin from "../Components/NavBarAdmin";
const GITHUB_REPO_REGEX =
    /^https?:*\/\/(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+(\/)?$/;

/**
 * Formulaire d'ajout avec téléversement d'image
 * - multipart/form-data
 * - champ fichier: "image" (multer.single("image"))
 * - techStack envoyé en techStack[] (plusieurs valeurs)
 */
export default function ProjectForm({ onCreated }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        techStack: "",
        repoUrl: "",
        liveUrl: "",
        featured: false,
    });
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const techArray = useMemo(
        () => form.techStack.split(/[\n,]/).map(s => s.trim()).filter(Boolean),
        [form.techStack]
    );

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    }

    function handleFile(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        const maxMB = 5;
        if (f.size > maxMB * 1024 * 1024) return setError(`L'image dépasse ${maxMB}MB.`);
        if (!/^image\//.test(f.type)) return setError("Le fichier doit être une image.");
        setError("");
        setFile(f);
        setPreview(URL.createObjectURL(f));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);
        setError("");
        setSuccess("");

        if (!form.title || form.title.trim().length < 2) {
            setSubmitting(false);
            return setError("Le titre doit contenir au moins 2 caractères.");
        }
        if (!GITHUB_REPO_REGEX.test(form.repoUrl)) {
            setSubmitting(false);
            return setError("repoUrl doit être une URL GitHub valide (https://github.com/user/repo).");
        }
        if (!file) {
            setSubmitting(false);
            return setError("Merci de sélectionner une image.");
        }

        const fd = new FormData();
        fd.append("title", form.title.trim());
        fd.append("description", form.description.trim());
        fd.append("techStack", techArray.join(",")); // 👈 string, pas [] ici
        fd.append("repoUrl", form.repoUrl.trim());
        if (form.liveUrl.trim()) fd.append("liveUrl", form.liveUrl.trim());
        fd.append("image", file); // 👈 doit s’appeler 'image'
        try {
            for (const [key, val] of fd.entries()) {
                console.log(key, val);
            }
            const created = await createProjectWithUpload(fd);
            setSuccess(`Projet "${created.title}" créé avec succès !`);
            setForm({ title: "", description: "", techStack: "", repoUrl: "", liveUrl: "", featured: false });
            setFile(null);
            setPreview("");
            onCreated?.(created);
        } catch (err) {
            const apiMsg = err?.response?.data?.message || err?.response?.data?.error || err?.message;
            setError(apiMsg || "Une erreur est survenue.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
        <NavBarAdmin />
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="h4 mb-4">Ajouter un projet</h1>

                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Titre *</label>
                                    <input
                                        className="form-control"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        required
                                        minLength={2}
                                        maxLength={120}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        rows={3}
                                        value={form.description}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Technos (séparées par virgule ou retour à la ligne)</label>
                                    <textarea
                                        className="form-control"
                                        name="techStack"
                                        rows={2}
                                        value={form.techStack}
                                        onChange={handleChange}
                                        placeholder="Next.js, Node.js, MongoDB"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Repo GitHub *</label>
                                    <input
                                        className="form-control"
                                        name="repoUrl"
                                        value={form.repoUrl}
                                        onChange={handleChange}
                                        placeholder="https://github.com/user/repo"
                                        required
                                        pattern={GITHUB_REPO_REGEX.source}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Image *</label>
                                    <input type="file" className="form-control" accept="image/*" onChange={handleFile} />
                                    {preview && (
                                        <div className="mt-2">
                                            <img src={preview} alt="preview" style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }} />
                                            <div className="form-text">Prévisualisation (non envoyée)</div>
                                        </div>
                                    )}
                                </div>

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Live URL</label>
                                        <input
                                            className="form-control"
                                            name="liveUrl"
                                            value={form.liveUrl}
                                            onChange={handleChange}
                                            placeholder="https://mon-app.vercel.app"
                                        />
                                    </div>
                                    <div className="col-md-6 d-flex align-items-end">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="featuredChk"
                                                name="featured"
                                                checked={form.featured}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="featuredChk">
                                                Mettre en avant
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid d-md-inline mt-3">
                                    <button className="btn btn-dark" type="submit" disabled={submitting}>
                                        {submitting ? "Envoi..." : "Créer le projet"}
                                    </button>
                                </div>
                            </form>

                            <div className="mt-4">
                                <h2 className="h6 mb-2">Aperçu des champs (sans image)</h2>
                                <pre className="bg-light p-3 rounded overflow-auto">
                                    <code className="small">
                                        {JSON.stringify(
                                            {
                                                title: form.title.trim(),
                                                description: form.description.trim(),
                                                techStack: techArray,
                                                repoUrl: form.repoUrl.trim(),
                                                liveUrl: form.liveUrl.trim() || undefined,
                                                featured: !!form.featured,
                                            },
                                            null,
                                            2
                                        )}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
