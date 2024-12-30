import Pagina from "../../components/template/Pagina";

export default function ErroLoader(props) {
    return (
        <Pagina titulo="Houve um erro" descricao={props.erro} links={props.links}>

        </Pagina>
    )
}