import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import './Produtos.css';

function Produtos({
  compras,
  addProdutosPrincipais,
  ClicarProdutos,
  produtosSelecionados,
  setProdutosSelecionados,
}) {

  function toggleProdutoSelecionado(produto, index) {
    if (produtosSelecionados.includes(produto)) {
      setProdutosSelecionados(produtosSelecionados.filter((p) => p !== produto));
    } else {
      setProdutosSelecionados([...produtosSelecionados, produto]);
    }
  }


  return (
    <div className="Produtos">
      <h2>Marque os produtos principais :</h2>
      {compras.map((produto, index) => {
        const uniqueValue = `${produto}-${index}`;

        return (
          <div key={uniqueValue}>
            <label className="produto" htmlFor={`produto-${uniqueValue}`}>
              {produto}
            </label>
            <input
              type="checkbox"
              id={`produto-${uniqueValue}`}
              value={uniqueValue}
              onChange={() => toggleProdutoSelecionado(uniqueValue, index)}
              checked={produtosSelecionados.includes(uniqueValue)}
            />
          </div>
        );
      })}

      <Link to="/resultado" onClick={() => ClicarProdutos(produtosSelecionados)}>
        Resultado
      </Link>
    </div>
  );
}

export default Produtos;
