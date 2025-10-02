import { createContext, useState } from "react";


export const GlobalContext = createContext()


const GlobalContextProvider = ({ children }) => {

    const [usuario, setUsuario] = useState("felipe")

    return (
        <GlobalContextProvider value={{ usuario, setUsuario }}>
            {children}
        </GlobalContextProvider>
    )
}

export default GlobalContextProvider