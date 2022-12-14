import '@reach/dialog/styles.css'
import LoginForm from './LoginForm'
import { Modal, ModalContents, ModalOpenButton } from './Modal'
import { Logo } from './Logo'

function UnauthenticatedApp({ login, register }) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-3">
      <Logo width="80" height="80" />
      <h1 className="text-4xl font-semibold">Bookshelf</h1>
      <div className="grid grid-cols-2 gap-3">
        <Modal>
          <ModalOpenButton>
            <button className="rounded border-0 bg-blue-600 py-2.5 px-4 leading-none text-white hover:bg-blue-700">
              Login
            </button>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <LoginForm
              onSubmit={login}
              submitButton={
                <button className="rounded border-0 bg-blue-600 py-2.5 px-4 leading-none text-white hover:bg-blue-700">
                  Login
                </button>
              }
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <button className="rounded border-0 bg-neutral-100 py-2.5 px-4 leading-none text-gray-600 hover:bg-neutral-200">
              Register
            </button>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            <LoginForm
              onSubmit={register}
              submitButton={
                <button className="rounded border-0 bg-neutral-100 py-2.5 px-4 leading-none text-gray-600 hover:bg-neutral-200">
                  Register
                </button>
              }
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  )
}

export default UnauthenticatedApp
