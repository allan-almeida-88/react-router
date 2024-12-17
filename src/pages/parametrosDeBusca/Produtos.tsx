import { Link, Outlet } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Produtos() {
    return (
        <Pagina titulo="Produtos" descricao="Produtos disponíveis" className={'justify-between'}>
            <ul className='m-2 mb-4 list-disc'>
                <li><Link to="produto?nome=cardeno&preco=1,99" className='hover:underline'>Cardeno</Link></li>
                <li><Link to="produto?nome=lapis&preco=0,75" className='hover:underline'>Lápis</Link></li>
                <li><Link to="produto?nome=borracha&preco=0,50" className='hover:underline'>Borracha</Link></li>
            </ul>
            <Outlet />
        </Pagina>
    )
}