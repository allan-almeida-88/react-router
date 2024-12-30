import {Route} from 'react-router-dom'

import Exibir from '../pages/usandoLoaderDeOutraRoute/exibir'
import Editar from '../pages/usandoLoaderDeOutraRoute/editar'

function dadosLoader() {
    return new Response(
        JSON.stringify({nome: "Pessoa", idade: 34}), {status: 200})
}

const rotas = <Route path='usandoLoaderDeOutraRota' id='loaderRoute' loader={dadosLoader}>
    <Route index element={<Exibir />} />
    <Route path='editar' element={<Editar />} />
</Route>

export default rotas