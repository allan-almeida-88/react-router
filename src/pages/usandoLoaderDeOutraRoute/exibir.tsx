import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Exibir() {
    const data = useRouteLoaderData('loaderRoute')
    const dados = JSON.parse(data)
    const descricao = `O ${dados.nome} tem ${dados.idade}`
    return (
        <Pagina titulo="Exibir" descricao={descricao}>
            <Link to="/usandoLoaderDeOutraRota/editar"
            className="hover:underline hover:text-oragen-500">Editar</Link>
        </Pagina>
    )
}