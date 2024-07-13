import styles from "./newVideo.module.css"
import { useEffect, useState } from "react";
import NuevoVideo from "../../components/CardNuevoVideo";
import TituloNuevo from "../../components/TituloNuevoVideo";


function VideoNuevo() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://6691c02326c2a69f6e9095e0.mockapi.io/vid/videos')
            .then(respuesta => respuesta.json())
            .then(datos => { setVideos(datos) })
    }, []);
    return (
        <div className={styles.container}>
            
            <TituloNuevo />
            <NuevoVideo setVideos={setVideos} />
            
        </div>

    )
}

export default VideoNuevo