import { useLocation } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Exibir() {
    const {state: dados} = useLocation()
   
    return (
        <Pagina titulo="Dados inseridos no formulário">
            <p className="text-xl my-10">{dados.nome} tem {dados.idade} anos</p>
        </Pagina>
    )
}