import { useState } from 'react'

function Home() {
  const [Login, setLogin] = useState(false)

  return (
    <div>
      {Login ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <button onClick={() => setLogin(true)}>Entrar</button>
      )}
    </div>
  )
}
export default Home
