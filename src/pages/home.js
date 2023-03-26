import React from 'react';
import Filme from './../components/Filme/index';
import Header from '../components/Header';
import Footer from './../components/Footer/index';

function Home() {
    return (
        <div>
        <Header />
        <br></br>
        <center><h1>LISTA DE FILMES</h1></center>
        <br></br>
        <Filme />
        <Footer />
    </div>
    )
}
export default Home;