import React, { useEffect, useMemo, useState } from "react";
import { listMyProjects, deleteProject, updateProject } from "../api/projects";
import NavBarAdmin from "../Components/NavBarAdmin";

/**
 * Page Owner: liste de mes projets (Bootstrap)
 * - Recherche par mot-clé
 * - Filtre featured
 * - Filtre par techno (simple contains côté client)
 * - Pagination côté client (si API ne la fournit pas)
 * - Actions: Toggle Featured, Delete
 */
export default function OwnerProjectsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [q, setQ] = useState("");
  const [tech, setTech] = useState("");
  const [onlyFeatured, setOnlyFeatured] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError("");
        // Si votre API supporte q/featured côté serveur, on peut les envoyer :
        const params = {};
        if (q) params.q = q;
        if (onlyFeatured) params.featured = true;
        const data = await listMyProjects(params);
        setItems(Array.isArray(data) ? data : data?.items || []);
      } catch (e) {
        const msg = e?.response?.data?.message || e.message || "Impossible de charger les projets.";
        setError(msg);
      } finally {
        setLoading(false);
      }
    })();
  }, [q, onlyFeatured]);

  const filtered = useMemo(() => {
    let arr = items;
    if (tech.trim()) {
      const needle = tech.toLowerCase();
      arr = arr.filter((p) => (p.techStack || []).some(t => String(t).toLowerCase().includes(needle)));
    }
    return arr;
  }, [items, tech]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);

  function refreshAfter(updateFn) {
    setItems((prev) => prev.map(it => it._id === updateFn._id ? updateFn : it));
  }

  async function onToggleFeatured(p) {
    try {
      const updated = await updateProject(p._id, { featured: !p.featured });
      refreshAfter(updated);
    } catch (e) {
      alert(e?.response?.data?.message || e.message || "Erreur lors de la mise à jour");
    }
  }

  async function onDelete(p) {
    if (!window.confirm(`Supprimer « ${p.title} » ?`)) return;
    try {
      await deleteProject(p._id);
      setItems((prev) => prev.filter(x => x._id !== p._id));
    } catch (e) {
      alert(e?.response?.data?.message || e.message || "Erreur lors de la suppression");
    }
  }

  return (
    <>
    <NavBarAdmin />
    <div className="container my-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="h4 m-0">Mes projets</h1>
      </div>

      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <div className="row g-3 align-items-end">
            <div className="col-md-4">
              <label className="form-label">Recherche</label>
              <input className="form-control" placeholder="mot-clé..." value={q} onChange={(e)=>setQ(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Tech</label>
              <input className="form-control" placeholder="ex: react" value={tech} onChange={(e)=>setTech(e.target.value)} />
            </div>
            <div className="col-md-2 form-check mt-4">
              <input id="onlyFeatured" className="form-check-input" type="checkbox" checked={onlyFeatured} onChange={(e)=>setOnlyFeatured(e.target.checked)} />
              <label className="form-check-label" htmlFor="onlyFeatured">Featured</label>
            </div>
            <div className="col-md-2">
              <label className="form-label">Par page</label>
              <select className="form-select" value={pageSize} onChange={(e)=>{setPageSize(Number(e.target.value)); setPage(1);}}>
                {[5,10,20,50].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="text-center py-5">Chargement...</div>
      ) : (
        <div className="card shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th style={{width: 56}}>#</th>
                  <th>Titre</th>
                  <th>Slug</th>
                  <th>Technos</th>
                  <th>Featured</th>
                  <th style={{width: 180}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paged.length === 0 ? (
                  <tr><td colSpan={6} className="text-center py-4 text-muted">Aucun projet</td></tr>
                ) : (
                  paged.map((p, idx) => (
                    <tr key={p._id}>
                      <td>{start + idx + 1}</td>
                      <td className="fw-medium">
                        <div className="d-flex align-items-center gap-2">
                          {p.imageUrl ? (
                            <img src={p.imageUrl} alt="thumb" style={{width:36,height:36,objectFit:"cover",borderRadius:6}} />
                          ) : null}
                          <div>
                            <div>{p.title}</div>
                            <div className="small text-muted text-truncate" style={{maxWidth:360}}>{p.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-muted small">{p.slug}</td>
                      <td>
                        {(p.techStack || []).slice(0,4).map(t => (
                          <span key={t} className="badge text-bg-secondary me-1">{t}</span>
                        ))}
                        {(p.techStack || []).length > 4 && <span className="badge text-bg-light">+{(p.techStack || []).length-4}</span>}
                      </td>
                      <td>
                        {p.featured ? <span className="badge text-bg-success">Oui</span> : <span className="badge text-bg-light">Non</span>}
                      </td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-outline-secondary" onClick={()=>onToggleFeatured(p)}>
                            {p.featured ? "Retirer" : "Mettre"}
                          </button>
                          <a className="btn btn-sm btn-outline-primary" href={p.repoUrl} target="_blank" rel="noreferrer">Repo</a>
                          <button className="btn btn-sm btn-outline-danger" onClick={()=>onDelete(p)}>Suppr.</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center p-3">
            <div className="text-muted small">{total} projet(s)</div>
            <nav>
              <ul className="pagination mb-0">
                <li className={`page-item ${currentPage===1?"disabled":""}`}>
                  <button className="page-link" onClick={()=>setPage(p=>Math.max(1,p-1))}>Précédent</button>
                </li>
                {Array.from({length: totalPages}).slice(0,5).map((_,i)=>{
                  const n = i+1; return (
                    <li key={n} className={`page-item ${n===currentPage?"active":""}`}>
                      <button className="page-link" onClick={()=>setPage(n)}>{n}</button>
                    </li>
                  );
                })}
                <li className={`page-item ${currentPage===totalPages?"disabled":""}`}>
                  <button className="page-link" onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>Suivant</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  </>
  );
}