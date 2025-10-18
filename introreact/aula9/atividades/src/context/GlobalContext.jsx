import { createContext, useState } from "react";


export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [servicosBorracharia, setservicosBorracharia] = useState([
        { id: 1, nome: 'Calibragem de pneus', valor: 5.00 },
        { id: 2, nome: 'Conserto de pneu furado', valor: 25.00 },
        { id: 3, nome: 'Troca de pneu', valor: 15.00 },
        { id: 4, nome: 'Balanceamento de roda', valor: 40.00 },
        { id: 5, nome: 'Alinhamento de direção', valor: 80.00 },
        { id: 6, nome: 'Remendo a quente', valor: 30.00 },
        { id: 7, nome: 'Troca de válvula', valor: 10.00 },
        { id: 8, nome: 'Montagem de pneu novo', valor: 20.00 },
        { id: 9, nome: 'Revisão de estepe', valor: 10.00 },
        { id: 10, nome: 'Limpeza de aro e vedação', valor: 15.00 }
    ])

    const [produtosSorveteria, setprodutosSorveteria] = useState([
        { id: 1, nome: 'Cascão simples', valor: 5.00 },
        { id: 2, nome: 'Cascão duplo', valor: 8.00 },
        { id: 3, nome: 'Copo pequeno', valor: 6.00 },
        { id: 4, nome: 'Copo médio', valor: 9.00 },
        { id: 5, nome: 'Copo grande', valor: 12.00 },
        { id: 6, nome: 'Milk-shake tradicional', valor: 15.00 },
        { id: 7, nome: 'Açaí no copo 300ml', valor: 10.00 },
        { id: 8, nome: 'Banana Split', valor: 18.00 },
        { id: 9, nome: 'Sundae com calda', valor: 12.00 },
        { id: 10, nome: 'Pote 1 litro para viagem', valor: 25.00 }
    ]
    )
    const [produtosBar, setprodutosBar] = useState([
        { id: 1, nome: 'Cerveja lata', valor: 8.00 },
        { id: 2, nome: 'Cerveja long neck', valor: 10.00 },
        { id: 3, nome: 'Refrigerante lata', valor: 6.00 },
        { id: 4, nome: 'Água mineral', valor: 4.00 },
        { id: 5, nome: 'Caipirinha', valor: 15.00 },
        { id: 6, nome: 'Dose de cachaça', valor: 7.00 },
        { id: 7, nome: 'Porção de batata frita', valor: 20.00 },
        { id: 8, nome: 'Porção de calabresa', valor: 25.00 },
        { id: 9, nome: 'Amendoim torrado', valor: 5.00 },
        { id: 10, nome: 'Energético', valor: 12.00 }
    ])

    const [usuarios, setUsuarios]= useState([])

    return (
        <GlobalContext.Provider
            value={
                {
                    produtosBar,
                    produtosSorveteria,
                    servicosBorracharia,
                    usuarios,
                    setUsuarios
                }}>
            {children}
        </GlobalContext.Provider>
    )
}

