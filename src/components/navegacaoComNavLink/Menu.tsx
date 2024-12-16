import {Link, NavLink} from 'react-router-dom'

export default function Menu() {
    const formatacao = `text-lg font-bold text-zinc-300
                        py-2 px-4 mx-4 rounded-md
                        hover:bg-zinc-800 hover:text-orange-500`

        function formatacaoLink (isActive) {
            return isActive 
                ? `text-lg font-bold py-2 px-4 mx-4 rounded-md bg-zinc-800 text-orange-500` 
                : `text-lg font-bold text-zinc-300 py-2 px-4 mx-4 rounded-md
                        hover:bg-zinc-800 hover:text-orange-500`
        }

    return (
        <nav className="mb-6 flex">
            {/* <NavLink className={formatacao} to={"/navegacaoComNavLink"}> Início - NavLink</NavLink> */}
            <NavLink className={({isActive}) => formatacaoLink(isActive)} to={"/navegacaoComNavLink"} end> Início - NavLink</NavLink>
            <NavLink className={({isActive}) => formatacaoLink(isActive)} to={"/navegacaoComNavLink/sobre"}> Sobre - NavLink</NavLink>
            <NavLink className={({isActive}) => formatacaoLink(isActive)} to={"/navegacaoComNavLink/contato"}> Contato - NavLink</NavLink>
        </nav>
    )
}