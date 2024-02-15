import Home from './paginas/home/Home'
import './App.css'
import Contador from './paginas/contador/Contador'

function App() {
  return (
    <>
      <Home
        titulo="Componente Home com props"
        texto="Este é um componente Home que recebe props - Componente importado com sucesso!."
      />
      <Home
        titulo="Agora estamos testando"
        texto="Comprova a teoria do props"
      />

      <Contador />
    </>
  )
}

export default App
