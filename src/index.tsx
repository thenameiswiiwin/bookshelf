import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
/* import App from 'components/App' */
import DiscoverBooksScreen from './components/Discover'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

/* root.render(<App />) */
root.render(<DiscoverBooksScreen />)
