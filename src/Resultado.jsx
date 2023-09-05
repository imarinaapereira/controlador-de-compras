import './Resultado.css'
import { Link } from "react-router-dom";

function Resultado({ produtosSelecionados, pessoas, dinheiroTotal, compras }) {
  let elements = []



  compras.forEach((produto, index) => {

    const uniqueValue = `${produto}-${index}`;

    if (produtosSelecionados.includes(uniqueValue)) {
      if (pessoas < 3 && dinheiroTotal < 300) {
        elements.push(<p className="produto-resultado" key={uniqueValue}>{produto} quantidade: 2</p>)
      } else if (pessoas < 3 && dinheiroTotal < 400) {
        elements.push(<p className="produto-resultado" key={uniqueValue}>{produto} quantidade: 2</p>)
      } else if (pessoas < 6 && dinheiroTotal < 400) {
        elements.push(<p className="produto-resultado" key={uniqueValue}>{produto} quantidade: 2</p>)
      } else if (pessoas < 6 && dinheiroTotal < 500) {
        elements.push(<p className="produto-resultado" key={uniqueValue}>{produto} quantidade: 3</p>)
      } else if (pessoas < 9 && dinheiroTotal < 500) {
        elements.push(<p className="produto-resultado" key={uniqueValue}>{produto} quantidade: 3</p>)
      }
      else if (pessoas < 9 && dinheiroTotal < 600) {
        elements.push(<p className="produto-resultado" key={uniqueValue}>{produto} quantidade: 3</p>)
      }
      else if (pessoas > 9 && dinheiroTotal > 600) {
        elements.push(<p className="produto-resultado" key={uniqueValue}>{produto} quantidade: 4</p>)
      }
    } else {
      elements.push(<p className="produto-resultado" key={uniqueValue}>{produto} quantidade: 1</p>)
    }
  });

  return (
    <div className='Resultado'>
      <h2>Resultado :</h2>
      {elements}
      <Link className="aResultado" to='/produtos'>Voltar aos produtos </Link>
    </div>


  )
}

export default Resultado;
