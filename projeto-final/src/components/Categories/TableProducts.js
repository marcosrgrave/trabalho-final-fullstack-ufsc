import React from "react";

const TableProducts = ({ employees: categories, handleEdit, handleDelete }) => {
  categories.forEach((category, i) => {
    category.id = i + 1;
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th colSpan={2} className="text-center">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category, i) => (
              <tr key={category.id}>
                <td>{i + 1}</td>
                <td>{category.name}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(category.id)}
                    className="button muted-button"
                  >
                    Editar
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="button muted-button"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>Nenhuma Categoria</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;