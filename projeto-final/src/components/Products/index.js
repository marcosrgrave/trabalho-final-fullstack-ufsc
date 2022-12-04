import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

// import { productsData } from "../../data";
import { fetchData } from "../../data";

const Dashboard = ({ setIsAuthenticated }) => {
  // const [products, setProducts] = useState(productsData);
  const [products, setProducts] = useState(fetchData());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products_data"));
    if (data !== null && Object.keys(data).length !== 0) setProducts(data);
  }, []);

  const handleEdit = (id) => {
    const [product] = products.filter((product) => product.id === id);

    setSelectedProduct(product);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Você tem certeza disso?",
      text: "Não será possível reverter esta ação!",
      showCancelButton: true,
      confirmButtonText: "Sim, deletar!",
      cancelButtonText: "Não, cancelar!",
    }).then((result) => {
      if (result.value) {
        const [Product] = products.filter((Product) => Product.id === id);

        axios
          .delete("http://localhost:8080/produtos/" + id)
          .then((response) => {
            console.log(response.data);
          });

        Swal.fire({
          icon: "success",
          title: "Deletado!",
          text: `${Product.firstName} deletado.`,
          showConfirmButton: false,
          timer: 1200,
        });

        const productsCopy = products.filter((product) => product.id !== id);
        localStorage.setItem("products_data", JSON.stringify(productsCopy));
        setProducts(productsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            products={products}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          products={products}
          setProducts={setProducts}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          products={products}
          selectedProduct={selectedProduct}
          setProducts={setProducts}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
