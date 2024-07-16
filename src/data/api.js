import axios from "axios";


export const api= axios.create ({
    baseURL:"https://6691c02326c2a69f6e9095e0.mockapi.io/vid/videos"
})

export const buscar= async (url, setData)=> {
    const respuesta = await api.get(url)
    console.log (respuesta)
    setData(respuesta.data)
}

async function reproduceCard(titulo, imagen, video, categoria) {
    try {
        const response = await api.post("./db.json", {
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
        const response = await api.delete(`./db.json/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al borrar card", error);
        throw error;
    }
};

async function actualizaCard(id, titulo, imagen, video, categoria) {
    try {
        const response = await api.put(`./db.json/${id}`, {
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
    buscar,
    reproduceCard,
    deletaCard,
    actualizaCard
}