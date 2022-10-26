import { Logo } from './Logo'

function App() {
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <button onClick={() => console.log('clicked')}>Login</button>
      <button onClick={() => console.log('clicked')}>Register</button>
    </div>
  )
}

export default App
