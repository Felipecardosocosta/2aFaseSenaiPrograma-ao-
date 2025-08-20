function Titulo2({texto}) {


    return (
      <h2 className="titulo2-container">


        {texto && texto.map((nome,ind)=> { return <p key={ind} >{nome}</p>})}
        
      </h2>
    )
  }
  
  export default Titulo2