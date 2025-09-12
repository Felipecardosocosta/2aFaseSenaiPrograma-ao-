import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import formState from './hooks/FormState'



function App() {
  const [pessoas,setPessoas]  = useState([
    {id:1, nome:'Dona Bete', idade: 72 ,tamanho: 1.50},
    {id:2, nome:'Dr Auzio', idade: 78 ,tamanho: 1.68},
    {id:3, nome:'Sarumano', idade: 62,tamanho: 1.70},
    {id:4, nome:'Dona Bete', idade: 72 ,tamanho: 1.50},
    {id:5, nome:'Dr Auzio', idade: 78 ,tamanho: 1.68},
    {id:6, nome:'Sarumano', idade: 62,tamanho: 1.70},

  ])

  const [inputs, mudarvalor]= formState({nome:'',idade:'', tamanho:''})
  
  function cadastrar() {

    
  }

  return (
    <>
    <h1>Arrays</h1>
    <div className='cont-cards'>

    {pessoas.map(pessoa=> (<Card key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} tamanho={pessoa.tamanho}/>) )}

    <input type= "text" value={inputs.nome} onChange={mudarvalor} name='nome' />

    <button onClick={cadastrar} >Cadastrar</button>
    </div>
    </>
  )
}

export default App
