import React from "react";
import Musicas from "./pages/musicas/Musicas";
import Home from "./pages/home/Home";
import Adicionar from "./pages/adicionar/Adicionar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="*" element={<NotFound/>}/> */}
                    <Route path="/musicas" element={<Musicas />} />
                    <Route path="/adicionar" element={<Adicionar />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Rotas;