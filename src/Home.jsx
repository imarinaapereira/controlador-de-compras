import { Link } from 'react-router-dom';
import './index.css'
import './Home.css'
function Home({ clicar, comprar, produto, addPessoa, pessoa, addDinheiro, dinheiro }) {
  return (
    <div className='Home'>
      <label htmlFor="compras" className='labelHome'>Digite os produtos que você deseja comprar:</label>
      <input className="inputHome" type="text" id='compras' value={produto} onChange={comprar} placeholder='Digite os produtos aqui' />
      <label htmlFor="pessoas" className='labelHome'>Digite aqui o tanto de pessoas que usarão as compras:</label>
      <input type="number" id='pessoas' className="inputHome" value={pessoa} onChange={addPessoa} placeholder='Digite somente numeros' />
      <label htmlFor="dinheiro" className='labelHome'>Digite aqui o tanto de dinheiro que você tem:</label>
      <input type="number" id='dinheiro' className="inputHome" value={dinheiro} onChange={addDinheiro} placeholder='exemplo: 200,00' />
      {
        produto == '' || pessoa == '' || dinheiro == '' ? <Link onClick={clicar}>continuar</Link> : <Link to='/produtos' onClick={clicar}>continuar</Link>
      }
    </div>
  )
}

export default Home;