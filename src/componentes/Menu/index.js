import minha__logo from '../../assets/imagens/minha__logo.png';
import Button from '../Botao';
import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img
          className="Logo"
          src={minha__logo}
          alt='SCOFLIX é a logo do site'
        />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  )
}