import React, { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = ({
  employees: products,
  setEmployees: setProducts,
  setIsAdding,
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stockAmount, setStockAmount] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!name || !price || !stockAmount || !image) {
      return Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "Todos os campos são obrigatórios.",
        showConfirmButton: true,
      });
    }

    const id = products.length + 1;
    const newProduct = {
      id,
      name: name,
      price: price,
      stockAmount: stockAmount,
      image: image,
    };

    products.push(newProduct);
    localStorage.setItem("products_data", JSON.stringify(products));
    setProducts(products);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Adicionado!",
      text: `${name} adicionado.`,
      showConfirmButton: false,
      timer: 1200,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Cadastrar Produto</h1>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">Preço</label>
        <input
          id="price"
          type="number"
          step="0.10"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="stockAmount">Quantidade em Estoque</label>
        <input
          id="stockAmount"
          type="number"
          name="stockAmount"
          value={stockAmount}
          onChange={(e) => setStockAmount(e.target.value)}
        />
        <label htmlFor="image">Imagem</label>
        <input
          id="image"
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Cadastrar" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancelar"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
