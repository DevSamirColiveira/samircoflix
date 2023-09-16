import minha__logo from '../../assets/imagens/minha__logo.png';
import Button from '../Botao';
import './Menu.css';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img
          className="Logo"
          src={minha__logo}
          alt='SCOFLIX é a logo do site'
        />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}