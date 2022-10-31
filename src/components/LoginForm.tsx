import { cloneElement } from 'react'
import Spinner from './Spinner'

function LoginForm({ onSubmit, submitButton }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value
    })
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="mx-auto my-2.5 flex w-full max-w-xs flex-col">
        <label htmlFor="username">Username</label>
        <input
          className="rounded border border-solid border-white bg-neutral-100 py-2 px-3"
          id="username"
          type="text"
        />
      </div>
      <div className="mx-auto my-2.5 flex w-full max-w-xs flex-col">
        <label htmlFor="password">Password</label>
        <input
          className="rounded border border-solid border-white bg-neutral-100 py-2 px-3"
          id="password"
          type="password"
        />
      </div>
      <div className="flex items-center justify-center">
        {cloneElement(submitButton, { type: 'submit' })}
        <Spinner />
      </div>
    </form>
  )
}

export default LoginForm
