import CorpoFormulario from "../../components/template/CorpoFormulario";
import Pagina from "../../components/template/Pagina";
import {useState, useEffect} from 'react'
import { Form, useFetcher } from "react-router-dom";

export default function Formulario() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const fetcher = useFetcher()
    const {data, state} = fetcher
   
    useEffect(() => {
        if(state === 'idle' && data) {
            window.alert(`${data.nome} tem ${data.idade} anos`)
        }

    }, [data, state])
    
    const style = `flex flex-col justify-center text-xl text-center`;

    return (
        <Pagina titulo="Formulário - entendendo useFetcher">
            <fetcher.Form method='post' className={style} action={'exibir'}>
                <CorpoFormulario nome={nome} setNome={setNome} idade={idade} setIdade={setIdade}/>
            </fetcher.Form>
        </Pagina>
    )
}