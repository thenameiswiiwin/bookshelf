import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
)
