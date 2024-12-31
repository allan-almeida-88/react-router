import {Route} from 'react-router-dom'
import Produtos from '../pages/entendendoDefer/produtosDefer'
import {getProdutos} from '../pages/entendendoDefer/produtosDefer'


const rotas = <Route path='entendendoDefer' element={<Produtos />} loader={getProdutos}></Route>

export default rotas;