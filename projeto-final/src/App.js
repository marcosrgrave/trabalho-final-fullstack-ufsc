import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState()
  let produto = 0;
  function selecionaArquivo(event) {
    setFile(event.target.files[0])
  }

  function enviarArquivo(event) {
    event.preventDefault();
    const url = 'http://localhost:8080/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {},
    };

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  function enviarProduto(event) {
    produto++;
    event.preventDefault();
    const url = 'http://localhost:8080/produtos';
    const dados = {
      nome: "Produto 1",
      email: "Produto 1",
      fone: "6666666666",
      senha: "teste"
    }
    const config = {
      headers: {},
    };
    axios.post(url, dados, config).then((response) => {
      console.log(response.data);
    });
  }

  function alterarProduto(event) {
    event.preventDefault();
    const url = 'http://localhost:8080/produtos/'+produto;
    const dados = {
      nome: "Produto 2",
      email: "Produto 2",
      fone: "33333333333",
      senha: "77777"
    }
    const config = {
      headers: {},
    };
    axios.put(url, dados, config).then((response) => {
      console.log(response.data);
    });
  }

  function deleteProduto(event) {
    event.preventDefault();
    const url = 'http://localhost:8080/produtos/'+produto;
    const config = {
      headers: {},
    };
    axios.delete(url, config).then((response) => {
      console.log(response.data);
    });
  }

  function verProduto(event) {
    event.preventDefault();
    const url = 'http://localhost:8080/produtos';
    const config = {
      headers: {},
    };
    axios.get(url, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="App">
      <form onSubmit={enviarArquivo}>
        <h1>File Upload example</h1>
        <input type="file" onChange={selecionaArquivo} />
        <button type="submit">Upload</button><br></br>
        <button type="submit" onClick={enviarProduto}>Cadastrar produto teste</button><br></br>
        <button type="submit" onClick={alterarProduto}>Editar produto teste</button><br></br>
        <button type="submit" onClick={deleteProduto}>Deletar produto cadastrado</button><br></br>
        <button type="submit" onClick={verProduto}>Ver produtos cadastrados (console)</button>
      </form>
    </div>
  );
}

export default App;