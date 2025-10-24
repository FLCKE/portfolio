import axiosClient from "./config/api";
/**
* Créer un projet
* @param {Object} payload
* @returns {Promise<Object>} projet créé
*/
export async function createProjectWithUpload(formData) {
    console.log("Uploading project with data:");
    for (const [key, val] of formData.entries()) {
        console.log(key, val);
    }
  const { data } = await axiosClient.post("/api/projects/upload", formData);
  return data; // { _id, title, ... }
}


export async function listProjects(query = "") {
const { data } = await axiosClient.get(`/api/projects${query ? `?q=${encodeURIComponent(query)}` : ""}`);
return data; // [ ...projects ]
}
export async function listMyProjects(params = {}) {
  const qs = new URLSearchParams(params).toString();
  try {
    const { data } = await axiosClient.get(`/api/projects/mine${qs ? `?${qs}` : ""}`);
    return data;
  } catch (e) {
    const { data } = await axiosClient.get(`/api/projects?owner=me${qs ? `&${qs}` : ""}`);
    return data;
  }
}

/** Supprimer un projet */
export async function deleteProject(id) {
  const { data } = await axiosClient.delete(`/api/projects/${id}`);
  return data;
}

/** Mettre à jour un projet (partiel) */
export async function updateProject(id, patch) {
  const { data } = await axiosClient.put(`/api/projects/${id}`, patch);
  return data;
}