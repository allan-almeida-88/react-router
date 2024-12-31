import {  useLoaderData, Await } from "react-router-dom";
import Pagina from "../../components/template/Pagina";
import { Suspense, useEffect, useState } from "react";

export default function Produtos() {
    const dadosLoader: any = useLoaderData();
    const [produtos, setProdutos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProdutos = async () => {
            const dados = await fetch("https://fakestoreapi.com/products?limit=10");
            const dadosJSON = await dados.json();
            setProdutos(dadosJSON);
            setLoading(false); // Marca como carregado
        };
    
        fetchProdutos();
    }, []);

    const produtosEmItens = (produtos: any[]) => {
        const produtosFormatados = produtos.map((produto) => {
            return (
                <li
                    className={`text-gray-300 text-center
                        border-gray-300 border-solid border-2
                        rounded-md p-3 m-2
                        hover:text-orange-500 hover:border-orange-500`}
                    key={produto.id}
                >
                    O produto {produto.id} de nome {produto.title} custa R$
                    {produto.price}
                </li>
            );
        });
        return produtosFormatados;
    };

    return (
        <Pagina titulo="Produtos Disponíveis">
            <ul className="p-0 overflow-clip">
                <Suspense fallback={<p>carregando</p>}>
                    <Await
                        resolve={produtos}
                        children={(produtos) => {
                            return produtosEmItens(produtos);
                        }}
                    />
                </Suspense>
            </ul>
        </Pagina>
    );
}




// async function prepararProdutos() {
//     const dados = await fetch("https://fakestoreapi.com/products?limit=10");
//     const dadosJSON = await dados.json();
//     return dadosJSON;
// }

// export async function getProdutos() {
//     return defer({ produtos: prepararProdutos() });
// }
