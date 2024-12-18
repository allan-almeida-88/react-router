import CorpoFormulario from "../../components/template/CorpoFormulario";
import Pagina from "../../components/template/Pagina";
import {useState} from 'react'
import { Form } from "react-router-dom";

export default function Formulario() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    // const location = useLocation()
    const style = `flex flex-col justify-center text-xl text-center`;

    return (
        <Pagina titulo="Formulário - Actions">
            <Form method='post' className={style} action={'exibir'}>
                <CorpoFormulario nome={nome} setNome={setNome} idade={idade} setIdade={setIdade}/>
            </Form>
        </Pagina>
    )
}