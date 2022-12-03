import React, { useState } from "react";
import Swal from "sweetalert2";

const AddCategory = ({
  employees: categories,
  setEmployees: setCategories,
  setIsAdding,
}) => {
  const [name, setName] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!name) {
      return Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "Todos os campos são obrigatórios.",
        showConfirmButton: true,
      });
    }

    const id = categories.length + 1;
    const newCategory = {
      id,
      name: name,
    };

    categories.push(newCategory);
    localStorage.setItem("categories_data", JSON.stringify(categories));
    setCategories(categories);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Adicionada!",
      text: `${name} adicionada.`,
      showConfirmButton: false,
      timer: 1200,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Cadastrar Categoria</h1>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default AddCategory;
