import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import TableCategories from "./TableCategories";
import Add from "./Add";
import Edit from "./Edit";

import { categoriesData } from "../../data";

const DashboardCategorias = ({ setIsAuthenticated }) => {
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("categories_data"));
    if (data !== null && Object.keys(data).length !== 0) setCategories(data);
  }, []);

  const handleEdit = (id) => {
    const [category] = categories.filter((category) => category.id === id);

    setSelectedCategory(category);
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
        const [Category] = categories.filter((Category) => Category.id === id);

        Swal.fire({
          icon: "success",
          title: "Deletado!",
          text: `${Category.name} deletado.`,
          showConfirmButton: false,
          timer: 1200,
        });

        const categoriesCopy = categories.filter((category) => category.id !== id);
        localStorage.setItem("categories_data", JSON.stringify(categoriesCopy));
        setCategories(categoriesCopy);
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
          <TableCategories
            categories={categories}
            // handleProdutos={handleProdutos}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          categories={categories}
          setCategories={setCategories}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          categories={categories}
          selectedCategory={selectedCategory}
          setCategories={setCategories}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default DashboardCategorias;
