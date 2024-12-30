import { useLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function consulta() {
    const info:any = useLoaderData()
    return (
        <Pagina titulo="Resultado da consulta">
            <strong>{info}</strong>
        </Pagina>
    )
}

export async function loaderConsulta() {
    const dados = await fetch(`https://fakestoreapi.com/products/1`).then(res=>res.json())
    // const resp = new Response("", {})
        
    return dados
}