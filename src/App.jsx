import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import Produtos from './Produtos'
import Resultado from './Resultado'
import { v4 } from 'uuid'
function App() {

  const [compras, setCompras] = useState([])
  const [produto, setProduto] = useState('')
  const [pessoas, setPessoas] = useState([])
  const [pessoa, setPessoa] = useState('')
  const [dinheiroTotal, setDinheiroTotal] = useState([])
  const [dinheiro, setDinheiro] = useState('')
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [ProdutosPrincipais, setProdutosPrincipais] = useState([])
  const [ProdutoPrincipal, setProdutoPrincipal] = useState('')
  function comprar(e) {
    setProduto(e.target.value);

  }
  function addPessoa(e) {
    setPessoa(e.target.value)

  }

  function addDinheiro(e) {
    setDinheiro(e.target.value)

  }
  function addProdutosPrincipais() {
    setProdutosPrincipais((produtosPrincipaisAnteriores) => [...produtosPrincipaisAnteriores, ProdutoPrincipal]);
  }
  function clicar() {
    // Divide a entrada do usuário em um array quando houver uma vírgula
    const produtosSeparados = produto.split(/,| e | E /).map(item => item.trim());
    if (produto == '') {
      alert(`Digite um produto`)
    } else if (pessoa == '') {
      alert(`Digite um a quantidade de pessoas que usarão as compras`)

    } else if (dinheiro == '') {
      alert('Digite  a quantidade de dinheiro que você tem')
    } else {
      setCompras((comprasAnteriores) => [...comprasAnteriores, ...produtosSeparados]);
      console.log(compras);
      setProduto('');
      setPessoas((pessoasAnteriores) => [...pessoasAnteriores, pessoa]);
      console.log(pessoas);
      setPessoa('');
      setDinheiroTotal((dinheiroAnterior) => [...dinheiroAnterior, dinheiro]);
      console.log(dinheiroTotal);
      setDinheiro('');
    }
  }
  function ClicarProdutos() {
    addProdutosPrincipais(produtosSelecionados);
    console.log(produtosSelecionados);
  }


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home compras={compras} clicar={clicar} pessoa={pessoa} dinheiro={dinheiro} produto={produto} comprar={comprar} addPessoa={addPessoa} addDinheiro={addDinheiro} />}></Route>
        <Route path='/produtos' element={<Produtos compras={compras} produto={produto} comprar={comprar} addPessoa={addPessoa} addDinheiro={addDinheiro} addProdutosPrincipais={addProdutosPrincipais} ClicarProdutos={ClicarProdutos} ProdutoPrincipal={ProdutoPrincipal} produtosSelecionados={produtosSelecionados} setProdutosSelecionados={setProdutosSelecionados} />}></Route>
        <Route path='/resultado' element={<Resultado pessoas={pessoas} dinheiroTotal={dinheiroTotal} compras={compras} produto={produto} comprar={comprar} ProdutosPrincipais={ProdutosPrincipais} ProdutoPrincipal={ProdutoPrincipal} produtosSelecionados={produtosSelecionados} setProdutosSelecionados={setProdutosSelecionados} />}></Route>
      </Routes>
    </Router>
  )
}

export default App
