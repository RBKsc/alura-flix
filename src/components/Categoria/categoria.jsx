import styles from './categoria.module.css'
import { useEffect, useState } from 'react';
import Cards from '../Cards/card';
import videos from "../../data/db.json"


function Categoria(props) {
    
    //Desestructuración
    const { colorPrimario, titulo, id} = props
   

    let obj = {
        borderColor:colorPrimario
    }


    return <> 
      { videos.length > 0 &&
     <section className="equipo" style={{backgroundColor: (colorPrimario, 0.6)}}>
        
         <h3 style={obj}>{titulo}</h3>
       
         {
        videos.map((video, index)=> <Cards
            datos={video} 
            key={index} 
            colorPrimario={colorPrimario}
         
         />)
         }
        
         </section>
        }
        </>
}
   
       

export default Categoria