import React from 'react';
import Footer from './../components/Footer/index';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

const filmes = [{
    "nome": "Vingadores",
    "genero": "Suspense",
    "duracao": "2H30",
    "descricao": "Em Nova York, em 1987, o belo jovem profissional Patrick Bateman tem uma segunda vida como um horrível assassino em série durante a noite. O elenco é formado pelo detetive, a noiva, a amante, o colega de trabalho e a secretária. Esta é uma comédia de humor seco que examina os elementos que transformam um homem em um monstro.",
    "nota": 5
},
{
    "nome": "Psicopata Americano 2",
    "genero": "Suspense",
    "duracao": "2H30",
    "descricao": "Estudante universitária (Mila Kunis), com grande interesse por assassinos em séries, está determinada a eliminar qualquer pessoa que se interponha entre ela e seu objetivo de se tornar professora assistente.",
    "nota": 5
},
{
    "nome": "Barbie",
    "genero": "Romance",
    "duracao": "2H30",
    "descricao": "No mundo mágico das Barbies, Barbieland, uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no mundo real, onde descobre que a beleza está no interior de cada um.",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    return (
        <div>
            <Header />
            <p>Filme: {filme}</p>
            {(() => {
                if (filme == 'Psicopata Americano') {
                    return (
                            <div class="card mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                    {filmes.map((filme, i) => (
                                        <div class="col-md-4" key={i}>
                                            <div className="card">
                                                <img src={'/assets/images/' + filme[0].foto} className="img-fluid rounded-start" Alt={filme[0].nome} />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">{filme[0].nome}</h5>
                                                    <p class="card-text">{filme[0].descricao}</p>
                                                    <p>{filme[0].duracao}</p>
                                                    <p>{filme[0].genero}</p>
                                                    <p>{filme[0].nota}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    )
                } else if (filme == 'Psicopata Americano 2') {
                    return (
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                {filmes.map((filme, i) => (
                                    <div class="col-md-4" key={i}>
                                        <div className="card">
                                            <img src={'/assets/images/' + filme[1].foto} className="img-fluid rounded-start" Alt={filme[1].nome} />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{filme[1].nome}</h5>
                                                <p class="card-text">{filme[1].descricao}</p>
                                                <p>{filme[1].duracao}</p>
                                                <p>{filme[1].genero}</p>
                                                <p>{filme[1].nota}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                {filmes.map((filme, i) => (
                                    <div class="col-md-4" key={i}>
                                        <div className="card">
                                            <img src={'/assets/images/' + filme[2].foto} className="img-fluid rounded-start" Alt={filme[2].nome} />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{filme[2].nome}</h5>
                                                <p class="card-text">{filme[2].descricao}</p>
                                                <p>{filme[2].duracao}</p>
                                                <p>{filme[2].genero}</p>
                                                <p>{filme[2].nota}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
            })()}
            <Footer />
        </div>
    )
}

export default Detalhes;