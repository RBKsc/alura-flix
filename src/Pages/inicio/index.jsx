import { useState } from "react"
import Banner from "../../components/Banner/banner"
import videos from "../../data/db.json"
import Categoria from "../../components/Categoria/categoria"
import Cards from "../../components/Cards/card"







const Inicio =()=> {
    
    const [categorias, setCategorias]=useState([
        {
          id:"1",
          titulo:"Front End",
          colorPrimario: "#57C278",
          
        },
    
       {
         id:"2",
         titulo: "Innovación y Gestión",
         colorPrimario: "#82CFFA",
         
       },
      
        {
          id:"3",
          titulo: "Back End",
          colorPrimario: "#FF8A29",
          }    
      ])

    return ( 
        <>
        <Banner/>
       
        {
        categorias.map((categorias)=><Categoria
        datos={categorias} 
        key={categorias.titulo}
        videos={videos.filter(video => video.categoria ===categorias.titulo)}
        
        />)
      }
       
        
        </>
    )
    
}

export default Inicio