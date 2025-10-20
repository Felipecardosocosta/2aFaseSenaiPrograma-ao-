const mysql = require('mysql2/promise')


const connection = async ()=>{
    
   const conectar = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'test_api',
    user: 'root',
    password: "fd260316"
})

    return  conectar

}



async function testConection(params) {

    try {
        const test = await connection()
        console.log("conectado ao banco de dados")

        test.end()

    } catch (error) {
        console.log(`erro ao conectar ${error}`)
    }
    
}

testConection()

module.exports = connection;