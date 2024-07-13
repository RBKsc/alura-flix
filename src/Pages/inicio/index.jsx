import Banner from "../../components/Banner/banner"

import Categoria from "../../components/Categoria/categoria"
import EditarCard from "../../components/editarCard/editarCard"





const Inicio =()=> {
    

    return ( 
        <>
        <Banner/>
        <EditarCard/>
        <Categoria Categoria={'BACKEND'} />
        <Categoria Categoria={'FRONTEND'} />
        <Categoria Categoria={'INNOVACIONYGESTION'}/>
        
        </>
    )
    
}

export default Inicio