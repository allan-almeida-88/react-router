import CorpoFormulario from "../../components/template/CorpoFormulario";
import Pagina from "../../components/template/Pagina";
import {useState} from 'react'
import { useLocation, useNavigate } from "react-router";
// import 

export default function Formulario() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    // const location = useLocation()

    const navigate = useNavigate()

    function enviar(e) {
        e.preventDefault()
        navigate('/entendendoUseLocation/exibir', {state: {nome: !!nome ?  nome : 'Não informado', idade}});
    }

    return (
        <Pagina titulo="Formulário - useLocation">
            <form className={`flex flex-col justify-center text-xl text-center`} onSubmit={enviar}>
                <CorpoFormulario nome={nome} setNome={setNome} idade={idade} setIdade={setIdade}/>
            </form>
        </Pagina>
    )
}