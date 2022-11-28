import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState();
  let produto = 0;

  function selecionaArquivo(event) {
    setFile(event.target.files[0]);
  }

  function enviarArquivo(event) {
    event.preventDefault();
    const url = "http://localhost:8080/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {},
    };

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  const [idProduto, setIdProduto] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [quantidadeEstoqueProduto, setQuantidadeEstoqueProduto] = useState("");
  const [menssagem, setMenssagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMenssagem(
      `Produto ${nomeProduto} com preço de R$${precoProduto} e ${quantidadeEstoqueProduto} unidades cadastrado!`
    );
    console.log(
      `Produto ${nomeProduto} com preço de R$${precoProduto} e ${quantidadeEstoqueProduto} unidades cadastrado!`
    );
  };

  const restaurarValoresInicias = (event) => {
    event.preventDefault();

    setIdProduto("");
    setNomeProduto("");
    setPrecoProduto(0.0);
    setQuantidadeEstoqueProduto(0);
  };

  function cadastrarProduto(event) {
    event.preventDefault();
    produto++;
    event.preventDefault();
    const url = "http://localhost:8080/produtos";
    const dados = {
      name: nomeProduto,
      price: precoProduto,
      stock_amount: quantidadeEstoqueProduto,
      image: "emptyImage",
    };
    const config = {
      headers: {},
    };
    axios.post(url, dados, config).then((response) => {
      console.log(response.data);
      setMenssagem(response.data);
    });

    setIdProduto("");
    setNomeProduto("");
    setPrecoProduto(0.0);
    setQuantidadeEstoqueProduto(0);
  }

  function atualizarProduto(event) {
    event.preventDefault();
    const url = "http://localhost:8080/produtos/" + idProduto;
    const dados = {
      name: nomeProduto,
      price: precoProduto,
      stock_amount: quantidadeEstoqueProduto,
      image: "emptyImage",
    };
    const config = {
      headers: {},
    };
    axios.put(url, dados, config).then((response) => {
      console.log(response.data);
    });
  }

  function deletarProduto(event) {
    event.preventDefault();
    const url = "http://localhost:8080/produtos/" + idProduto;
    const config = {
      headers: {},
    };
    axios.delete(url, config).then((response) => {
      console.log(response.data);
    });
  }

  function verProduto(event) {
    event.preventDefault();
    const url = "http://localhost:8080/produtos";
    const config = {
      headers: {},
    };
    axios.get(url, config).then((response) => {
      setMenssagem(response.data);
      console.log(response.data);
    });
  }

  return (
    <div className="App">
      <form onSubmit={cadastrarProduto}>
        <h1>Cadastrar Produto</h1>
        Nome:{" "}
        <input
          type="text"
          id="nomeProduto"
          name="nomeProduto"
          value={nomeProduto}
          placeholder="Nome do Produto"
          onChange={(event) => setNomeProduto(event.target.value)}
        />
        <br></br>
        Preço:{" "}
        <input
          type="number"
          step="0.01"
          id="precoProduto"
          name="precoProduto"
          value={precoProduto}
          placeholder="Preço do Produto"
          onChange={(event) => setPrecoProduto(event.target.value)}
        />
        <br></br>
        Estoque:{" "}
        <input
          type="number"
          id="quantiadeEstoqueProduto"
          name="quantidadeEstoqueProduto"
          value={quantidadeEstoqueProduto}
          placeholder="Quantidade em Estoque"
          onChange={(event) => setQuantidadeEstoqueProduto(event.target.value)}
        />
        {/* <p>Imagem</p>
          <input type="file" onChange={selecionaArquivo} />
          <button type="submit">Upload da Imagem</button> */}
        <br></br> <br></br>
        <button type="submit" onClick={cadastrarProduto}>
          Cadastrar
        </button>
      </form>

      <br></br>

      <form onSubmit={atualizarProduto}>
        <h1>Atualizar Produto</h1>
        Id:{" "}
        <input
          type="text"
          id="idProduto"
          name="idProduto"
          value={idProduto}
          placeholder="Id do Produto"
          onChange={(event) => setIdProduto(event.target.value)}
        />
        <br></br>
        Nome:{" "}
        <input
          type="text"
          id="nomeProduto"
          name="nomeProduto"
          value={nomeProduto}
          placeholder="Nome do Produto"
          onChange={(event) => setNomeProduto(event.target.value)}
        />
        <br></br>
        Preço:{" "}
        <input
          type="number"
          step="0.01"
          id="precoProduto"
          name="precoProduto"
          value={precoProduto}
          placeholder="Preço do Produto"
          onChange={(event) => setPrecoProduto(event.target.value)}
        />
        <br></br>
        Estoque:{" "}
        <input
          type="number"
          id="quantiadeEstoqueProduto"
          name="quantidadeEstoqueProduto"
          value={quantidadeEstoqueProduto}
          placeholder="Quantidade em Estoque"
          onChange={(event) => setQuantidadeEstoqueProduto(event.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit" onClick={atualizarProduto}>
          Atualizar
        </button>
      </form>

      <br></br>

      <form onSubmit={deletarProduto}>
        <h1>Deletar Produto</h1>
        Id:{" "}
        <input
          type="text"
          id="idProduto"
          name="idProduto"
          value={idProduto}
          placeholder="Id do Produto"
          onChange={(event) => setIdProduto(event.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit" onClick={deletarProduto}>
          Deletar
        </button>
      </form>

      <br></br>
      <button type="submit" onClick={verProduto}>
        Ver produtos cadastrados (console)
      </button>
      {/* <p>{menssagem}</p> */}
    </div>
  );
}

export default App;
