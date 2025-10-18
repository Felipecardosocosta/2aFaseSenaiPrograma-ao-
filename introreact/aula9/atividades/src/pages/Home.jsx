import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { GlobalContext, GlobalContextProvider } from '../context/GlobalContext'
import deletarUser from '../server/DeletarUser'
import formHooks from '../hooks/formHooks'
import modificarUser from '../server/modificarUser'
import criarUsers from '../server/criarUsers'


function Home() {
    const { usuarios, setUsuarios } = useContext(GlobalContext)

    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState('')

    const [edicao, setEdicao] = useState(false)

    const [input, setInputs] = formHooks({nome:'', idade:""})
    

    const [nomeEdicao,setNomeEdicao] = useState('')

    const [idadeEdicao,setIdadeEdicao] = useState('')


    async function pesquisaUsuarios() {

        const respose = await fetch('http://localhost:3000/users')

        const dados = await respose.json()

        setUsuarios(dados)
        return
    }


    useEffect(() => {

        pesquisaUsuarios()
    }, [])

    async function deletar(id) {

        setCarregando(true)
        const response = await deletarUser(id)

        if (response) {

            pesquisaUsuarios()
            setCarregando(false)
            setErro('Usuário foi deletado')

            return
        }
        setCarregando(false)
        setErro('Usuário nao foi deletado')
    }

    function editar(usuario) {
        setEdicao(usuario)

        setNomeEdicao(usuario.nome)
        setIdadeEdicao(usuario.idade)

    }

    async function modificar() {
        setCarregando(true)
        const data = await modificarUser({ ...edicao, nome: nomeEdicao, idade:idadeEdicao })
        
        if (!data) {
            setCarregando(false)
            setErro("Erro ao modificar")
            return
        }

        pesquisaUsuarios()
        setEdicao(false)
        setCarregando(false)
        setErro("usuario modificado")


    }

    async function criar() {
        setCarregando(true)
        const response = await criarUsers({nome:nomeEdicao, idade: idadeEdicao})
        setErro(response)
        pesquisaUsuarios()
        setCarregando(false)
        setIdadeEdicao("")
        setNomeEdicao("")

    }


    return (

        <div>
            <NavBar />

            <p>{erro}</p>


            {carregando && <p>Carregando...</p>}

            {usuarios.length > 0 && usuarios.map(usuario => (

                <div key={usuario.id} style={{ border: "1px solid black", display: 'flex', flexDirection: 'column', gap: '4xp', justifyContent: 'center', alignItems: 'center', width: '200px', margin: "1rem", padding: '1rem' }}>
                    <h1>Nome: {usuario.nome}</h1>
                    <h3>Idade: {usuario.idade}</h3>
                    <button onClick={() => editar(usuario)} >Editar</button>
                    <button onClick={() => deletar(usuario.id)} >Deletar</button>
                </div>))}


            <div>
                <label>Nome:
                    <input type="text" name='nome' value={nomeEdicao} onChange={(e)=>setNomeEdicao(e.target.value)} />
                </label>

                <label >Idade:
                    <input type="number" name='idade' value={idadeEdicao} onChange={(e)=>setIdadeEdicao(e.target.value)} />
                </label>

                <button onClick={!!edicao ? modificar: criar }>{!!edicao ?'Modificar': 'Criar'}</button>

            </div>


        </div>
    )
}

export default Home