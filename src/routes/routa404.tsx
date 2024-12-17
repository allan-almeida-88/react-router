import { Route } from "react-router-dom"
import Inicio from "../pages/shared/inicio"
import Sobre from "../pages/shared/sobre"
import Pagina404 from "../pages/shared/pagina404"

const links = [
    {url: '/pagina404/inicio', text: 'Início'},
    {url: '/pagina404/sobre', text: 'Sobre'},
    {url: '/pagina404/inexistente'},
]

const routes = (
    <Route path="pagina404">
        <Route index element={<Inicio links={links}/>} />
        <Route path="sobre" element={<Sobre links={links}/>} />
        <Route path="*" element={<Pagina404 links={links}/>} />
    </Route>
)

export default routes