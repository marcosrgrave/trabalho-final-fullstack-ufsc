import React, { useState } from "react";
import Swal from "sweetalert2";

const EditCategory = ({
  employees: categories,
  selectedEmployee: selectedCategory,
  setEmployees: setCategories,
  setIsEditing,
}) => {
  const id = selectedCategory.id;

  const [name, setName] = useState(selectedCategory.name);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name) {
      return Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "Todos os campos são necessários.",
        showConfirmButton: true,
      });
    }

    const category = {
      id,
      name: name,
    };

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === id) {
        categories.splice(i, 1, category);
        break;
      }
    }

    localStorage.setItem("categories_data", JSON.stringify(categories));
    setCategories(categories);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Atualizado!",
      text: `${category.name} atualizado.`,
      showConfirmButton: false,
      timer: 1200,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Editar Categoria</h1>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default EditCategory;
