import { useState } from 'react'

function Contador() {
  const [valorx, setValorx] = useState(0)

  function somaClique() {
    setValorx(valorx + 1)
  }
  return (
    <div>
      <p>O valor é: {valorx}</p>
      <button onClick={somaClique}>Adicionar 1</button>
    </div>
  )
}

export default Contador
