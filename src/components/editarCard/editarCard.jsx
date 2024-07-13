import { useEffect, useState } from 'react';
import styles from './editarCard.module.css';
import icono from './icono.png'; 
import { conectaApi } from '../../data/api';


function EditarCard({ isOpen, onClose, videos, updateVideo }) {

    const [titulo, setTitulo] = useState(videos?.titulo || '');
    const [categoria, setCategoria] = useState(videos?.categoria || '');
    const [imagen, setImagen] = useState(videos?.imagen || '');
    const [video, setVideo] = useState(videos?.video || '');

    useEffect(() => {
        if (isOpen && videos) {
            setTitulo(videos.titulo);
            setCategoria(videos.categoria);
            setImagen(videos.imagen);
            setVideo(videos.video);
        }
    }, [isOpen, videos]);

    const handleSalvar = async () => {
        try {
            const videoActualizado = await conectaApi.actualizaCard(
                video.id,
                titulo,
                imagen,
                video,
                categoria
            );
            updateVideo(videoActualizado);
            onClose();
            } catch (error) {
            console.error('Error al realizar la solicitud PUT', error);
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
        {isOpen && (
            <div className={styles.container}>
                <img onClick={onClose} src={icono} alt='icono cerrar' />
                <div>
                    <h1>EDITAR CARD:</h1>
                </div>

                <div className={styles.cards}>
                    <div className={styles.compartimento}>
                        <label>Titulo</label>
                        <input value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                    </div>
                    <div className={styles.compartimento}>
                        <label>Categoria</label>
                        <input value={categoria} onChange={(e) => setCategoria(e.target.value)}></input>
                    </div>
                    <div className={styles.compartimento}>
                        <label>Imagem</label>
                        <input value={imagen} onChange={(e) => setImagen(e.target.value)}></input>
                    </div>
                    <div className={styles.compartimento}>
                        <label>Video</label>
                        <input value={video} onChange={(e) => setVideo(e.target.value)}></input>
                    </div>
                    <div className={styles.botones}>
                        <button onClick={handleSalvar}>GUARDAR</button>
                        <button onClick={handleClean}>LIMPIAR</button>
                    </div>
                </div>
            </div>
            )}
        </>

    )
}

export default EditarCard;