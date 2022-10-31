import { Tooltip } from '@reach/tooltip'
import { FaSearch } from 'react-icons/fa'
import Spinner from './Spinner'
import BookRow from './BookRow'
import { useState, useEffect } from 'react'
import { client } from '../utils/api-client'

function DiscoverBooksScreen() {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState(null)
  const [query, setQuery] = useState('')
  const [queried, setQueried] = useState(false)

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'

  useEffect(() => {
    if (!queried) return
    setStatus('loading')
    client(`volumes?q=${encodeURIComponent(query)}`).then((data) => {
      setData(data)
      setStatus('success')
    })
  }, [queried, query])

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
              {isLoading ? <Spinner /> : <FaSearch aria-label="search" />}
            </button>
          </label>
        </Tooltip>
      </form>

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

export default DiscoverBooksScreen