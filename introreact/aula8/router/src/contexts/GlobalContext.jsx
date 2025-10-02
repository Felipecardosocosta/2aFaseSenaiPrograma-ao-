
import { createContext,useState } from "react";


export const GlobalContext = createContext()


const GlobalContextProvider = ({children})=>{

    const[usuario,setUsuario] = useState("Felipe")


    return(
        <GlobalContext.Provider value={{usuario,setUsuario}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider