import mysql from 'mysql2'


export  const conection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"senai",
    database:"catastro_estudantes"
})

conection.connect()
