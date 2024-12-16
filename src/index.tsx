import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Inicio from './pages/shared/inicio'
import Contato from './pages/shared/contato'
import Sobre from './pages/shared/sobre'
import reportWebVitals from "./reportWebVitals";
import Layout from './components/template/Layout'
// const routes = createBrowserRouter([
//     {path:'/', element:<Layout/>, children: [
//         {path: 'inicio', element: <Inicio/>},
//         {path: 'sobre', element: <Sobre/>},
//         {path: 'contato', element: <Contato/>}
//     ]},
//     // {path: '/info', element: <Layout />, children: [
//     //     {path: 'sobre', element: <Sobre/>},
//     //     {path: 'contato', element: <Contato/>}
//     // ]}
// ]);

const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>} children={[
        <Route path="" element={<Inicio/>}/>,
        <Route path="sobre" element={<Sobre/>} />,
        <Route path="contato" element={<Contato/>} />
    ]} />
))

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode>
    <RouterProvider router={routes} />
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
