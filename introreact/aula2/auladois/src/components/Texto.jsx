import './Texto.css'

function Texto({texto}) {
  return (
    <div className='texto-container'>
      <p>{texto}</p>
    </div>
  )
}

export default Texto