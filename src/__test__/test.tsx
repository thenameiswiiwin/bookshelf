import { render, screen } from '@testing-library/react'

import App from 'components/App'

describe('<App />', () => {
  it('should render the App', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /hello world/i,
        level: 1
      })
    ).toBeInTheDocument()
  })
})
