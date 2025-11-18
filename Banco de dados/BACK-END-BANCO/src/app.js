import { conection } from "../infra/conection.js";
import express from 'express'


const app = express()



app.use(express.json())


app.get('/estudante', (req,res)=>{

    const consulta = "SELECT * FROM dados_estudantes"

    conection.query(consulta, (erro,result)=>{
        if (erro) {
            console.error(erro);
            
        }else if(result){

            console.log(result);
            
            res.status(200).json(result)

        }
    })

    
})

export default app