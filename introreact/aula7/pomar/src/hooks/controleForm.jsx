import { useState } from "react"


function controleForm(valorInicial) {
    const [inputs, setInput] = useState(valorInicial)

    function alterarValor(e) {

        setInput({ ...inputs, [e.target.name]: e.target.value })

    }


    return [inputs, alterarValor]
}

export default controleForm