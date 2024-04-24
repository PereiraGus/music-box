import api from "./api";
import { useState } from "react";
function App() {
  const [listaMusicas, setMusicas] = useState([]);
  // criando state com valor de um vetor vazio;
  function listar() {
    api.get()
      .then((respostaObtida) => {
        // cairá aqui se a requisição for realizada;
        console.log(respostaObtida);
        // objeto que representa a resposta enviada pela API;
        console.log(respostaObtida.status);
        // vendo status da resposta (OK - 200);
        console.log(respostaObtida.data);
        // vendo os dados da resposta (data: []);
        setMusicas(respostaObtida.data)
        // setando "musicas" com os mesmos dados recebidos pela resposta da
      })
      .catch((erroOcorrido) => { // cairá aqui se houver algum erro durante a
        console.log(erroOcorrido);
      })
  }
  return (
    <>
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>
      {
        listaMusicas.map(musica => (
          <div key={musica.id} style={{width: 150+"px"}}>
            <h4>{musica.nomeMusica}</h4>
            <h5>{musica.artista}</h5>
            <p>{musica.genero}</p>
            <img src={musica.imagem}></img>
          </div>
        ))
      }
    </>
  );
}
export default App;