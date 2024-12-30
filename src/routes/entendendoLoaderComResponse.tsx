import {Route} from 'react-router-dom'
import Consulta from '../pages/entendendoLoaderComResponse/Consulta'
import {loaderConsulta} from '../pages/entendendoLoaderComResponse/Consulta'

const routes = <Route path='entendendoLoaderComResponse'>
    <Route index element={<Consulta />} loader={loaderConsulta}></Route>
</Route>

export default routes;

// console.log(loaderConsulta())