import {Route} from 'react-router-dom'
import Inicio from '../pages/shared/inicio'
import Sobre from '../pages/shared/sobre'
import Erro from '../pages/entendendoUseRouteError/erroDeRota'

const links = [
    {url: '/entendendoUseRouteError', text: 'inicio'},
    {url: '/entendendoUseRouteError/sobre', text: 'sobre'},
]

const route = <Route 
        path='entendendoUseRouteError'
        errorElement={<Erro texto="houve um erro genérico" links={links}/>}
    >
        <Route index 
            element={<Inicio links={links}/>} 
                loader={()=>{
                    throw new Error('Houve um erro no início')
                }} 
            />
        <Route path='Sobre' 
        element={<Sobre links={links}/>}  
            loader={()=>{
                throw new Response('Houve um erro sobre')
            }} 
        />
</Route>

export default route