import { useAuth0 } from '@auth0/auth0-react'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

function App() {
  const { user, loginWithPopup, logout, isAuthenticated } = useAuth0()

  return !isAuthenticated ? (
    <UnauthenticatedApp
      login={() => loginWithPopup()}
      register={() => console.log('register')}
    />
  ) : (
    <AuthenticatedApp user={user} logout={logout} />
  )
}

export default App
