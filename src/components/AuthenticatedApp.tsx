import Discover from './Discover'

function AuthenticatedApp({ user, logout }) {
  return (
    <>
      <div className="absolute top-2.5 right-2.5 flex items-center">
        {user?.picture && (
          <img
            src={user.picture}
            alt={user?.name}
            width="45"
            height="45"
            className="mr-2.5 rounded-full"
          />
        )}
        <h1 className="font-semibold">{user.nickname}</h1>
        <button
          className="ml-2.5 rounded border-0 bg-neutral-100 py-2.5 px-4 leading-none text-gray-600 hover:bg-neutral-200"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <div className="my-0 mx-auto grid w-full max-w-[840px] gap-4 py-16 px-8 sm:w-full sm:grid-cols-sm">
        <Discover />
      </div>
    </>
  )
}

export default AuthenticatedApp
