import Pagina from "../../components/template/Pagina";
import {useState, useEffect} from 'react'
import Real from "../../utils/Real";
export default function Produtos() {
    const [produtos, setProdutos] = useState<any>([]) 

    useEffect(() => {
        (async() => {
            const produtos = await getProdutos()
            setProdutos(produtos)
        })()
    }, [])

    const listaProdutos = produtos.map(produto => {
        return <li className={`text-gray-300
            border-gray-300 border-solid border-2 
            text-center rounded-md p-3 m-2
            hover:text-orange-500 hover:border-orange-500
        `}>
            ID {produto.id} - {produto.title} - {Real.format(produto.price)}
        </li>
    })

    return (
        <Pagina titulo="Entendendo Loaders">
            <ul className="p-0 overflow-clip">{listaProdutos}</ul>
        </Pagina>
    )
}

async function getProdutos() {
    const dados = await fetch('https://fakestoreapi.com/products?limit=10')
    const dadosJson = await dados.json()
    return dadosJson
}