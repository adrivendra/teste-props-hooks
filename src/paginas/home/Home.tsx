import './Home.css'

interface homeProps {
  titulo: string
  texto: string
}

function Home(props: homeProps) {
  return (
    <>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </>
  )
}

export default Home
