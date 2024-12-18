import {Route} from 'react-router'
import Produtos from '../pages/entendendoLoaders/Produtos'
import {getProdutos} from '../pages/entendendoLoaders/Produtos'
import Produto from '../pages/entendendoLoaders/Produto'
import {getItem} from '../pages/entendendoLoaders/Produto'
const rotas = <Route path='entendendoLoaders' >
    <Route index element={<Produtos />} loader={getProdutos}></Route>
    <Route path='visualizar/:id' element={<Produto />} loader={getItem}></Route>
</Route>

export default rotas