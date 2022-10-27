interface LoginFormProps {
  onSubmit: any
  buttonText: string
}

function LoginForm({ onSubmit, buttonText }: LoginFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      username: { value: string }
      password: { value: string }
    }

    onSubmit({
      username: target.username.value,
      password: target.password.value
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
      <button
        className="rounded border-0 bg-blue-600 py-2.5 px-4 leading-none text-white"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  )
}

export default LoginForm
