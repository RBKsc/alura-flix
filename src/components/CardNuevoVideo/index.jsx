import { useState } from 'react';
import styles from './NewVideo.module.css'
import { useNavigate } from 'react-router-dom';
import { conectaApi } from '../../data/api';


function NuevoVideo({ setVideos }) {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [video, setVideo] = useState("");
    const navegacion = useNavigate();

    const handleSubmit = async (evento) => {
        evento.preventDefault();

        try {
            const newVideo = await conectaApi.reproduceCard(titulo, imagen, video, categoria);
            setVideos((prevVideos) => [...prevVideos, newVideo]);
            setTitulo('');
            setCategoria('');
            setImagen('');
            setVideo('');
            navegacion('/');
        } catch (error) {
            console.error('Error al realizar la solicitud POST', error);
        }
    };

    const handleClean = () => {
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideo('');
    }

    return (
        <>
            <div className={styles.container}>
                <h2>Reproduce Card</h2>
                <div className={styles.textos}>
                    <form className={styles.formularioContainer}>
                        <div className={styles.formulario}>
                            <h3>Titulo</h3>
                            <input required placeholder='introduce un título' value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                        </div>
                        <div className={styles.formulario}>
                            <h3>Categoria</h3>
                            <select required value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option value="">Selecione una categoria</option>
                                <option value="Front End">Front End</option>
                                <option value="Innovacion y Gestion">Innovación y gestion</option>
                                <option value="BackEnd">BackEnd</option>
                            </select>
                        </div>
                        <div className={styles.formulario}>
                            <h3>Imagen</h3>
                            <input required placeholder='introduzca el link de la imagen' value={imagen} onChange={(e) => setImagen(e.target.value)}></input>
                        </div>
                        <div className={styles.formulario}>
                            <h3>Video</h3>
                            <input required placeholder='introduzca el link del video' value={video} onChange={(e) => setVideo(e.target.value)}></input>
                        </div>
                    </form>
                </div>
                <div className={styles.botoes}>
                    <button onClick={handleSubmit} type='submit'>Enviar</button>
                    <button onClick={handleClean}>Limpiar</button>
                </div>

            </div>

        </>


    )
}

export default NuevoVideo;