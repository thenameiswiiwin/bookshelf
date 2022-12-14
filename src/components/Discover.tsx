import { useState, useEffect } from 'react'
import { client } from '../utils/apiCLient'
import { useAsync } from '../utils/useAsync'
import { Tooltip } from '@reach/tooltip'
import { FaSearch, FaTimes } from 'react-icons/fa'
import Spinner from './Spinner'
import BookRow from './BookRow'

function Discover() {
  const { data, error, run, isLoading, isError, isSuccess } = useAsync()
  const [query, setQuery] = useState('')
  const [queried, setQueried] = useState(false)

  useEffect(() => {
    if (!queried) return
    run(client(`volumes?q=${encodeURIComponent(query)}`))
  }, [queried, query, run])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setQuery(e.target.elements.search.value)
    setQueried(true)
  }

  return (
    <div className="m-auto w-[90vw] max-w-[800px] py-10 px-0">
      <form onSubmit={handleSearchSubmit}>
        <input
          placeholder="Search books..."
          id="search"
          className="w-full rounded border border-solid border-white bg-neutral-100 py-2 px-3"
        />
        <Tooltip label="Search Books">
          <label htmlFor="search">
            <button
              type="submit"
              className="relative -ml-9 border-0 bg-transparent"
            >
              {isLoading ? (
                <Spinner />
              ) : isError ? (
                <FaTimes aria-label="error" className="text-red-500" />
              ) : (
                <FaSearch aria-label="search" />
              )}
            </button>
          </label>
        </Tooltip>
      </form>

      {isError ? (
        <div className="text-red-500">
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}

      {isSuccess ? (
        data?.items?.length ? (
          <ul className="mt-5 grid list-none grid-rows-1 gap-4 p-0">
            {data.items.map((book) => (
              <li key={book.id} aria-label={book.volumeInfo.title}>
                <BookRow key={book.id} book={book} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No books found. Try another search.</p>
        )
      ) : null}
    </div>
  )
}

export default Discover
