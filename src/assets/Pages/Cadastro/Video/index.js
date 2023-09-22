import React from "react";
import PageDefault from "../../../../componentes/PageDefault";
import { Link } from "react-router-dom";

export default function CadastroVideos() {
  return (
    <>
      <PageDefault>
        <h1>Cadastro de Video</h1>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </>
  )
}