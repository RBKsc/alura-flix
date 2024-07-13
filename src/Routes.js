import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Pages/inicio"
import PageBase from "./Pages/PaginaBase"
import NewVideo from "./Pages/NewVIdeo/newVideo"



function AppRoutes (){
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageBase/>}>
            <Route index element={<Inicio/>}></Route>
            <Route path="NuevoVideo" element={<NewVideo/>}></Route>
            </Route>
        </Routes>
       </BrowserRouter>
    )
}

export default AppRoutes