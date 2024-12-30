import {Route} from 'react-router-dom'
import Inicio from '../pages/shared/inicio'
import Sobre from '../pages/shared/sobre'
import ErroLoader from '../pages/lidandoComErrosDoLoader/erroLoader'

const links = [
    {url: '/lidandoComErrosDoLoader', text: 'inicio'},
    {url: '/lidandoComErrosDoLoader/sobre', text: 'sobre'},
]

const route = <Route path='lidandoComErrosDoLoader'>
    <Route index element={<Inicio links={links}/>} loader={()=>{throw new Error}} errorElement={<ErroLoader links={links} erro="Erro na requisição"/>}/>
    <Route path='Sobre' element={<Sobre links={links}/>}  loader={()=>{throw new Error}} errorElement={<ErroLoader links={links} erro="Erro na requisição"/>}/>
</Route>

export default route