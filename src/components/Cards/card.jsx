import styles from './card.module.css';
import { CiEdit } from "react-icons/ci";
import { TbTrashX } from "react-icons/tb";
import { useState } from 'react';
import EditarCard from '../editarCard/editarCard';

function Cards({ id, imagen, categoria, removerCard, video, setVideos }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const abrirModal = () => {
        setIsModalOpen(true);
    }

    const cerrarModal = () => {
        setIsModalOpen(false);
    }

    const color = (categoria) => {
        switch (categoria) {
            case 'BACKEND':
                return 'var(--color-backend)';
            case 'FRONTEND':
                return 'var(--color-frontend)';
            case 'INOVACCIONYGESION':
                return 'var(--color-innovacionygestion)';
            default:
                return 'var(--color-padron)';
        }
    };

    const handleVideoActualizado = (videoActualizado) => {
        setVideos((prevVideos) =>
            prevVideos.map((v) => (v.id === videoActualizado.id ? videoActualizado : v))
        )
    }

    return (
        <>
            <div className={styles.card} style={{ border: `4px solid ${color(categoria)}` }}>
                <img src={imagen} />
                <div className={styles.descripcion} style={{ borderWidth: '5px 0px 0px 0px', borderStyle: 'solid', borderColor: `${color(categoria)}` }}>
                    <div className={styles.descripcionP} onClick={() => removerCard(id)}>
                        <TbTrashX className={styles.imagen} />
                        <p>ELIMINAR</p>
                    </div>
                    <div className={styles.descripcionP}>
                        <CiEdit className={styles.imagen} />
                        <p onClick={abrirModal}>EDITAR</p>
                    </div>
                </div>
            </div>
            <EditarCard isOpen={isModalOpen} onClose={cerrarModal} video={video} setVideo={handleVideoActualizado} />
        </>

    )
}

export default Cards;