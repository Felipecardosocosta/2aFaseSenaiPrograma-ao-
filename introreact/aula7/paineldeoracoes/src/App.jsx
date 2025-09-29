import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/Buttons'
import Pagina from './components/Pagina'

function App() {
  const [count, setCount] = useState('')

  const oraçoes = {
    Front: [
      'Ave CSS, cheia de bugs',

      'O framework é convosco',

      'Bendita sois vós entre as telas',

      'E bendito é o fruto do vosso DOM: o pixel perfeito.',

      'Santa Documentação, mãe da UI',

      'Rogai por nós, devs visuais',

      'Agora e na hora do push final.',

      'Hover.'],
    FullStack: [
      'Senhor Git, dai-me forças para subir a branch certa,',

      'Coragem para lidar com o merge,',

      'E sabedoria para entender o código que eu mesmo escrevi ontem.',

      'Concedei-me domínio sobre o front, o back, e o café.',

      'Protegei minha stack das atualizações quebradoras,',

      'E dai-me fé nos testes automatizados.',

      'Pois teu é o commit,',

      'O build e a glória do log,',

      'Agora e para sempre,',

      '"npm run dev"'],
    Programador:
      ['O Senhor é meu debug, nada me faltará.',

        'Em loops tranquilos me faz deitar,',

        'e me guia pelas threads seguras da lógica.',

        'Ainda que eu ande pelo vale dos sistemas legados,',

        'não temerei o código antigo,',

        'pois tu estás comigo:',

        'tua stack e teu terminal me consolam.',

        'Preparas um café diante de mim',

        'na presença dos meus erros.',

        'Unge minha cabeça com boas práticas,',

        'e o meu Git transborda.',

        'Certamente a sintaxe limpa e o deploy estável',

        'me seguirão todos os commits da minha vida,',

        'e habitarei no repositório sagrado para todo o sempre.',

        '**Ctrl + S. Amém.**`,']
  }
  return (
    <>
      <Buttons nomes={Object.keys(oraçoes)} setEstado={setCount} />
      {count === "Front" ? <Pagina conteudo={oraçoes.Front} /> :
        count === "FullStack" ? <Pagina conteudo={oraçoes.FullStack} /> :
          count === 'Programador' ? <Pagina conteudo={oraçoes.Programador} /> :
            <p>Bem Vindo</p>
      }
    </>
  )
}

export default App
