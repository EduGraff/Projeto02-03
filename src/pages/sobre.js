import React from 'react';
import Footer from './../components/Footer/index';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

function Sobre() {
    const { name } = useParams();
    
    return (
        <div> 
            <Header />           
            <img src="public/assets/images/pngtree-movie-board-icon-image_1455346.jpg"/>   
            <p>O site de filmes é uma plataforma online que oferece uma ampla seleção de filmes em vários gêneros, incluindo ação, drama, comédia, terror e ficção científica. Os usuários podem criar uma conta gratuita para salvar seus filmes favoritos, avaliar os filmes que já assistiram e receber recomendações personalizadas. Alguns dos filmes mais populares no site incluem "O Poderoso Chefão", "A Origem", "Os Vingadores" e "A Forma da Água". Além de filmes, o site também oferece uma seleção de documentários, séries de TV e animações para os usuários assistirem!</p>    
            <Footer /> 
        </div>
    )
}
export default Sobre;