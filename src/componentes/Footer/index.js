/* eslint-disable camelcase */
import React from 'react';
// eslint-disable-next-line camelcase
import minha__logo from '../../assets/imagens/minha__logo.png';
import { FooterBase } from './styles';

export default function Footer() {
  return (
    <FooterBase>
      <img
        className="Logo"
        src={minha__logo}
        alt="SCOFLIX é a logo do site"
      />
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.linkedin.com/in/samir-oliveira-dev/">
          <strong>Samir Oliveira</strong>
          {' '}
        </a>
        durante a
        {' '}
        {' '}
        <strong style={{ color: '#12bcd4' }}>Imersão React</strong>
        {' '}
        e
        {' '}
        <strong style={{ color: '#2A7AE4' }}>Challenge do Aluraflix</strong>
      </p>
    </FooterBase>
  );
}
