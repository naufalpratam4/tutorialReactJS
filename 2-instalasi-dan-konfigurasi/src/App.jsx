import { useState } from 'react'

function Header({ author }) {
  return <h1>Belajar React Bareng {author ? author : 'WPU'}💕</h1>
}

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header/>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  )
}

export default App
