import '@reach/dialog/styles.css'
import { Dialog } from '@reach/dialog'
import { useState } from 'react'
import { Logo } from './Logo'
import LoginForm from './LoginForm'

function App() {
  const [openModal, setOpenModal] = useState('none')

  const login = (formData: string) => console.log('login', formData)
  const register = (formData: string) => console.log('register', formData)
  return (
    <div>
      {/* Home */}
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>
      {/* Login Modal */}
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <button onClick={() => setOpenModal('none')} type="button">
          Close
        </button>
        <h2>Login</h2>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>
      {/* Register Modal */}
      <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
        <button onClick={() => setOpenModal('none')} type="button">
          Close
        </button>
        <h2>Register</h2>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </div>
  )
}

export default App
