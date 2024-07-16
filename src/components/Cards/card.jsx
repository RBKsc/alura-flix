

import { CiEdit } from "react-icons/ci";
import { TbTrashX } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Cards = (props)=>{
    const {id, titulo, imagen, vid, Categoria, descripcion}=props.datos
    const {colorPrimario}=props
   
    return <div className="colaborador">
    
        <div className="encabezado" >
            <img src={imagen} alt="imagenUsuario" style={{background:colorPrimario}}/>
        </div>
        <div className="info">
            <Link>{vid}</Link>
            <h4>{titulo}</h4>
            <h5>{Categoria}</h5>
            <h5>{descripcion}</h5>
            <TbTrashX /> 
            <CiEdit />
            
            
        </div>
    </div>
}        
       

export default Cards;