import "./Filme.css";

const filmes = [{
  "nome": "Psicopata Americano",
  "foto": "American_Psycho.png",
  "ano": 1999,
  "genero": "Suspense",
  "nota": 5
},
{
  "nome": "Psicopata Americano 2",
  "foto": "c2eddeeb58bf9d8441129d27c622132426648bdaa5e3f1fde961adfe53811d68._RI_V_TTW_.jpg",
  "ano": 2003,
  "genero": "Suspense",
  "nota": 5
},
{
  "nome": "Barbie",
  "foto": "MV5BNzliODE4NDQtYzEwNy00N2QyLTk2ZGQtZGZhNDU0NjVlZDMyXkEyXkFqcGdeQ_whDKhxV.webp",
  "ano": 2023,
  "genero": "Romance",
  "nota": 5
}
]

export default function Filme() {
  return (
    <div className="container text-center">
      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}