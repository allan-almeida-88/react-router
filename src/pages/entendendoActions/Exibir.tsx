import { useActionData, useLoaderData, useLocation } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Exibir() {
    const data = useActionData()
    return (
        <Pagina titulo="Dados inseridos no formulário">
            <p className="text-xl my-10">{data.nome} tem {data.idade} anos</p>
        </Pagina>
    )
}

export async function actionFormulario({request}) {
    const dadosFormulario = await request.formData()

    const obj = {}
    dadosFormulario.forEach((dado, chave) => {
        obj[chave] = dado
    })

    const retorno = salvar(obj)
    
    return retorno
}

function salvar(dados) {
    const dadosFinais = {nome: !!dados.nome ? dados.nome : 'Desconhecido', idade: dados.idade }
    return {status: 1, ...dadosFinais}
}
