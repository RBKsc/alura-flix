import styles from './categoria.module.css'
import { useEffect, useState } from 'react';
import Cards from '../Cards/card';
import { conectaApi, getVideos } from '../../data/api';

function Categoria({ Categoria }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos()
            .then(datos => { setVideos(datos);             
            })
            .catch(error => {
                console.error("Error al buscar videos:", error);
            })
    }, []);

    const removerCard = async (id) => {
       try {
        await conectaApi.deletaCard(id);
        setVideos(videos.filter(card => card.id !== id));
       } catch (error) {
        console.error('Error al remover card:', error);
       }
    };

    const categoriaVideos = videos.filter(video => video.categoria === Categoria);

    const categoriaColor = (categoria) => {
        switch (categoria) {
            case 'BACKEND': return 'var(--color-backend)';
            case 'FRONTEND': return 'var(--color-frontend)';
            case 'INNOVACIONYGESTION': return 'var(--color-innovacionygestion)';
            default: return 'var(--cor-padron)';
        }
    };

    return (
        <div className={styles.borda}>
            <div className={styles.categoria} style={{ backgroundColor: categoriaColor(Categoria) }}>
                <h1>{Categoria}</h1>
            </div>
            <div className={styles.container}>
                {categoriaVideos.map(video => (
                    <Cards key={video.id} id={video.id} imagen={video.imagen} categoria={video.categoria} removerCard={removerCard} video={video} setVideos={setVideos} />
                ))}
            </div>

        </div>
    )
}

export default Categoria;