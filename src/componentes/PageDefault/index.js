import React, { Children } from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--cor-primaria-preto);
  color: var(--cor-primaria-branco);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`

export default function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}