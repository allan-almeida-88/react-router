import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Inicio from '../pages/shared/inicio'
import Contato from '../pages/shared/contato'
import Sobre from '../pages/shared/sobre'
import reportWebVitals from "../reportWebVitals";
import Layout from '../components/template/Layout'
import MenuTiposDeLinks from '../components/tiposDeLinks/Menu'
import NavegacaoComNavLink from '../components/navegacaoComNavLink/Menu'
import routeTipoDeLinks from "./tiposDeLinks";
import routeNavegacaoNavLink from "./navegacaoComNavLink";
import routePagina404 from "../pages/shared/pagina404";
import routasPagina404 from './routa404'
import routeParamentrosDeRota from './parametrosDeRota'
import routeParametrosDeBusca from './parametrosDeBusca'
import routeEntendendoUseLocation from './entendendoUseLocation'
import routeEntendentoActions from './entendendoActions'
import routeEntendentoLoader from './entendendoLoader'
import Pagina404 from "../pages/shared/pagina404";


const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        {routeTipoDeLinks}
        {routeNavegacaoNavLink}
        {routasPagina404}
        {routeParamentrosDeRota}
        {routeParametrosDeBusca}
        {routeEntendendoUseLocation}
        {routeEntendentoActions}
        {routeEntendentoLoader}

        <Route path="*" element={<Pagina404 />} />
        
    </Route>
))

export default routes