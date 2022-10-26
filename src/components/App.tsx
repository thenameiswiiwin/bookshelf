import '@reach/dialog/styles.css'
import { Dialog } from '@reach/dialog'
import { useState } from 'react'
import { Logo } from './Logo'

function App() {
  const [openModal, setOpenModal] = useState('none')

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <button onClick={() => setOpenModal('none')} type="button">
          Close
        </button>
        <h2>Login</h2>
      </Dialog>
      <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
        <button onClick={() => setOpenModal('none')} type="button">
          Close
        </button>
        <h2>Register</h2>
      </Dialog>
    </div>
  )
}

export default App
