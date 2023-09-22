/* eslint-disable react/react-in-jsx-scope */
import BannerMain from '../../../componentes/BannerMain';
import Menu from '../../../componentes/Menu';
import dadosIniciais from '../../../data/dados_iniciais.json';
import Carousel from '../../../componentes/Carousel';
import Footer from '../../../componentes/Footer';

export default function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React."
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />
      <Footer />
    </div>
  );
}
