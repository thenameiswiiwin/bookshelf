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
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-2">
      {/* Home */}
      <Logo width="80" height="80" />
      <h1 className="text-4xl font-semibold">Bookshelf</h1>
      <div className="grid grid-cols-2 gap-3">
        <button
          className="rounded border-0 bg-blue-600 py-2.5 px-4 leading-none text-white"
          onClick={() => setOpenModal('login')}
        >
          Login
        </button>
        <button
          className="rounded border-0 bg-neutral-100 py-2.5 px-4 leading-none text-gray-600"
          onClick={() => setOpenModal('register')}
        >
          Register
        </button>
        {/* Login Modal */}
        <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
          <button
            className="padding-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-solid border-white border-gray-500 bg-white leading-none"
            onClick={() => setOpenModal('none')}
            type="button"
          >
            <span aria-hidden>×</span>
          </button>
          <LoginForm onSubmit={login} buttonText="Login" />
        </Dialog>
        {/* Register Modal */}
        <Dialog
          aria-label="Registration form"
          isOpen={openModal === 'register'}
        >
          <button
            className="padding-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-solid border-white border-gray-500 bg-white leading-none"
            onClick={() => setOpenModal('none')}
            type="button"
          >
            <span aria-hidden>×</span>
          </button>
          <LoginForm onSubmit={register} buttonText="Register" />
        </Dialog>
      </div>
    </div>
  )
}

export default App
