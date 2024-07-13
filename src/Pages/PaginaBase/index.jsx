import { Outlet } from "react-router-dom"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"





function PaginaBase() {
 
    return (
        
        <main>
            <Header/>
                <Outlet/>
            <Footer/>
   
        </main>
       
    )
}

export default PaginaBase