import { cloneElement } from 'react'
import { useAsync } from '../utils/useAsync'
import Spinner from './Spinner'

function LoginForm({ onSubmit, submitButton }) {
  const { isLoading, isError, error, run } = useAsync()
  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = e.target.elements

    run(
      onSubmit({
        username: username.value,
        password: password.value
      })
    )
  }

  return (
    <form
      className="flex w-full flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
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
        {cloneElement(
          submitButton,
          { type: 'submit' },
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children]),
          isLoading ? <Spinner /> : null
        )}
      </div>
      {isError ? (
        <div role="alert" className="mt-5 text-red-500">
          <span>There was an error: </span>
          <pre className="whitespace-pre-wrap">{error.message}</pre>
        </div>
      ) : null}
    </form>
  )
}

export default LoginForm
