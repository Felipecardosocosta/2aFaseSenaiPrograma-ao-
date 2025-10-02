import { Children } from "react";
import { createContext,useState } from "react";


export const GlobalContext = createContext()


const GlobalContextProvider = ({children})=>{

    const[usuario,setUsuario] = useState("Felipe")


    return(
        <GlobalContextProvider value={{usuario,setUsuario}}>
            {children}
        </GlobalContextProvider>
    )
}

export default GlobalContextProvider