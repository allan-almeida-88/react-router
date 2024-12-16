import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Inicio from '../pages/shared/inicio'
import Contato from '../pages/shared/contato'
import Sobre from '../pages/shared/sobre'
import reportWebVitals from "../reportWebVitals";
import Layout from '../components/template/Layout'
import MenuTiposDeLinks from '../components/tiposDeLinks/Menu'
import NavegacaoComNavLink from '../components/navegacaoComNavLink/Menu'
import TipoDeLinks from "./tiposDeLinks";
import navegacaoNavLink from "./navegacaoComNavLink";
import Pagina404 from "../pages/shared/pagina404";
import routasPagina404 from './routa404'
import parametroDeRoutas from './parametroDeRoutas'

const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        {TipoDeLinks}
        {navegacaoNavLink}
        {routasPagina404}
        {parametroDeRoutas}
        {/* <Route path="*" element={<Pagina404 />} /> */}
        
    </Route>
))

export default routes