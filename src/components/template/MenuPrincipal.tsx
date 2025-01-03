import { IconActivity, 
    IconClock, 
    IconDirectionSign, IconExchange, IconFileAlert, IconForms, IconLayoutNavbar, 
    IconLayoutNavbarCollapse, IconLoader, IconLock, IconMenu, IconRefreshAlert, IconRoute, 
    IconRouteOff, IconRouterOff, IconSearch, IconShare, IconX } from "@tabler/icons-react";
import { MenuItem } from "../../data/models/MenuItem";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import Flex from "./Flex";
import { useState } from "react";

const itens: MenuItem[] = [
    {titulo: 'Tipos de Links', url:"/tiposDeLinks", icone: <IconLayoutNavbarCollapse/>},
    {titulo: 'Navegação com NavLink', url: '/navegacaoComNavLink', icone: <IconDirectionSign />},
    {titulo: 'Página 404', url: '/pagina404', icone:<IconFileAlert />},
    {titulo: 'Parâmentro de routas', url: '/parametrosDeRota', icone:<IconRoute />},
    {titulo: 'Parâmentros de busca', url: '/parametrosDeBusca', icone: <IconSearch />},
    {titulo: 'Formulário useLocation', url: '/entendendoUseLocation', icone: <IconForms />},
    {titulo: 'Ententedendo Actions', url: '/entendendoActions', icone: <IconActivity />},
    {titulo: 'Ententedendo Loader', url: '/entendendoLoaders', icone: <IconLoader />},
    {titulo: 'Lidando com erros do Loader', url: '/lidandoComErrosDoLoader', icone: <IconRefreshAlert />},
    {titulo: 'Entendendo Loader com Response', url: '/entendendoLoaderComResponse', icone: <IconRefreshAlert />},
    {titulo: 'Entendendo useRouteError', url: '/entendendoUseRouteError', icone: <IconRouterOff />},
    {titulo: 'Usando Loader de outra routa', url: '/usandoLoaderDeOutraRota', icone: <IconShare />},
    {titulo: 'Entendendo Defer', url: '/entendendoDefer', icone: <IconClock />},
    {titulo: 'Entendendo UseFetcher', url: '/entendendoUseFetcher', icone: <IconExchange />},
];

export default function MenuPrincipal() {
    const [mini, setMini] = useState(false);

    function renderizarItens() {
        return itens.map((item: MenuItem) => (
            <MenuPrincipalItem key={item.titulo} icone={item.icone} titulo={item.titulo} url={item.url} mini={mini} />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
                <div className="cursor-pointer" onClick={() => setMini(!mini)}>
                    {mini ? <IconMenu /> : <IconX />}
                </div>
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarItens()}</nav>
        </aside>
    );
}
