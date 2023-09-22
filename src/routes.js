import React from 'react';
import './index.css';
import Home from './assets/Pages/Home/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroVideos from './assets/Pages/Cadastro/Video';
import CadastroCadegoria from './assets/Pages/Cadastro/Categoria';

// const Pagina404 = () => (<div>Página 404</div>)

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro/video" element={<CadastroVideos />} />
        <Route path="/cadastro/categoria" element={<CadastroCadegoria />} />
        {/* <Route path="*" element={Pagina404} /> */}
      </Routes>
    </BrowserRouter>
  )
}
