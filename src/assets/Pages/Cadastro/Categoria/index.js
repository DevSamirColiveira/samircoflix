/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { async } from 'jshint/src/prod-params';
import PageDefault from '../../../../componentes/PageDefault';
import FormField from '../../../../componentes/FormField';
import Button from '../../../../componentes/Botao';

export default function CadastroCadegoria() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '#FFBA05',
    seguranca: '',
  };
  const [Categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInicias);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL_TOP = 'http://localhost:3001/categorias';

    fetch('URL_TOP')
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Nova Cadegoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...Categorias,
          values,
        ]);
        setValues(valoresInicias);
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleChange}
          component="textarea"
          cols={20}
          rows={5}
        />

        <FormField
          label="Escolha a Cor"
          type="color"
          name="cor"
          value={values.cor}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleChange}
        />

        <FormField
          label="Código de Segurança"
          type="text"
          name="seguranca"
          value={values.seguranca}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleChange}
        />

        <Button>Salvar</Button>
        <Button>Limpar</Button>

      </form>

      {Categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <ul>
        {Categorias.map((categoria, indece) => (
          // eslint-disable-next-line no-bitwise
          <li key={'&{categoria}' & { indece }}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
