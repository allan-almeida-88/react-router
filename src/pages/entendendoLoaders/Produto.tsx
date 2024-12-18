import { Link, useLoaderData, useParams, useSearchParams } from "react-router-dom";
import Pagina from "../../components/template/Pagina";
import {useEffect} from 'react'
import Real from "../../utils/Real";

export default function Produto() {   
    const {title , description, price} = useLoaderData()
    
    return (
        <Pagina titulo={title}>
            <p className="w-full m-2 text-center overflow-auto max-h-48">
                {description}
            </p>
            <p className="text-bolder text-center m-2">{Real.format(price)}</p>
            <button className={`
                bg-zinc-700 text-white w-full
                rounded-md hover:bg-orange-500
            `}>
                <Link to="..">
                    Voltar
                </Link>
            </button>
        </Pagina>
    )
}

export async function getItem({params}) {
    return await fetch(`https://fakestoreapi.com/products/${params.id}`).then(res=>res.json())
}