import { useRouteError } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function ErroDeRouta(props) {
    const erro = useRouteError()
    return (
        <Pagina titulo="Houve um erro" descricao={props.texto} links={props.links}>
            
        </Pagina>
    )
}