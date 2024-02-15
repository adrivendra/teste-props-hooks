import { useState, useEffect } from 'react'

function Home() {
  const [completa, setCompleta] = useState(false)
  const [tarefa, setTarefa] = useState('')

  useEffect(() => {
    if (completa) {
      setTarefa('Parabéns! Você concluiu a tarefa!')
    }
  }, [completa])

  return (
    <div>
      <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleta(true)}>Concluir Tarefa</button>
    </div>
  )
}

export default Home
