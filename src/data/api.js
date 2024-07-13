import axios from "axios";

const api = axios.create({
    baseURL: "https://6691c02326c2a69f6e9095e0.mockapi.io/vid/videos",
});

export const getVideos = async () => {
    try {
        const response = await api.get("https://6691c02326c2a69f6e9095e0.mockapi.io/vid");
        return response.data;
    } catch (error) {
        console.error("Error al buscar videos", error);
        throw error;
    }
}

async function reproduceCard(titulo, imagen, video, categoria) {
    try {
        const response = await api.post("https://6691c02326c2a69f6e9095e0.mockapi.io/vid/videos", {
            titulo,
            imagen,
            video,
            categoria
        });
        return response.data;
    } catch (error) {
        console.error("Error al crear card", error);
        throw error;
    }
}

async function deletaCard(id) {
    try {
        const response = await api.delete(`https://6691c02326c2a69f6e9095e0.mockapi.io/vid/videos/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al borrar card", error);
        throw error;
    }
};

async function actualizaCard(id, titulo, imagen, video, categoria) {
    try {
        const response = await api.put(`https://6691c02326c2a69f6e9095e0.mockapi.io/vid/videos/${id}`, {
            titulo,
            imagen,
            video,
            categoria
        });
        return response.data;
    } catch (error) {
        console.error("Error al actualizar card", error);
        throw error;
    }
}

export const conectaApi = {
    getVideos,
    reproduceCard,
    deletaCard,
    actualizaCard
}