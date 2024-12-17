import {Route} from 'react-router'
import Produtos from '../pages/parametrosDeBusca/Produtos'
import Produto from '../components/parametrosDeBusca/Produto'

const rotas = <Route path='parametrosDeBusca' element={<Produtos/>}>
    <Route path='produto' element={<Produto />}/>
</Route>

export default rotas