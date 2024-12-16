import { Route } from "react-router-dom";
import Inicio from '../pages/shared/inicio'
import Contato from '../pages/shared/contato'
import Sobre from '../pages/shared/sobre'
import NavegacaoComNavLink from '../components/navegacaoComNavLink/Menu'

const navegacaoNavLink = (
    <Route path="navegacaoComNavLink">
        <Route index element={<Inicio menu={<NavegacaoComNavLink/>} />} />
        <Route path={"sobre"} element={<Sobre menu={<NavegacaoComNavLink/>} />} />
        <Route path="contato" element={<Contato menu={<NavegacaoComNavLink/>} />} />
    </Route>
)

export default navegacaoNavLink