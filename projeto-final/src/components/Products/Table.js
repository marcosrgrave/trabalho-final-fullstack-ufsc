import React from "react";

const Table = ({ employees: products, handleEdit, handleDelete }) => {
  products.forEach((product, i) => {
    product.id = i + 1;
  });

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Qtd. Estoque</th>
            <th>Imagem</th>
            <th colSpan={2} className="text-center">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, i) => (
              <tr key={product.id}>
                <td>{i + 1}</td>
                <td>{product.name}</td>
                <td>{formatter.format(product.price)}</td>
                <td>{product.stockAmount}</td>
                <td>{product.image}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="button muted-button"
                  >
                    Editar
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="button muted-button"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>Nenhum Produto</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
