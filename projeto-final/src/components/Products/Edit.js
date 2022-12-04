import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const EditProduct = ({
  employees: products,
  selectedEmployee: selectedProduct,
  setEmployees: setProducts,
  setIsEditing,
}) => {
  const id = selectedProduct.id;

  const [name, setName] = useState(selectedProduct.name);
  const [price, setPrice] = useState(selectedProduct.price);
  const [stockAmount, setStockAmount] = useState(selectedProduct.stockAmount);
  const [image, setImage] = useState(selectedProduct.image);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !price || !stockAmount || !image) {
      return Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "Todos os campos são necessários.",
        showConfirmButton: true,
      });
    }

    const product = {
      // id,
      name: name,
      price: price,
      stock_amount: stockAmount,
      image: image,
    };

    const url = "http://localhost:8080/produtos/" + id;
    const config = {
      headers: {},
    };
    axios.put(url, product, config).then((response) => {
      console.log(response.data);
    });

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1, product);
        break;
      }
    }

    localStorage.setItem("products_data", JSON.stringify(products));
    setProducts(products);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Atualizado!",
      text: `${product.name} atualizado.`,
      showConfirmButton: false,
      timer: 1200,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Editar Produto</h1>
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
          <input type="submit" value="Atualizar" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancelar"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
