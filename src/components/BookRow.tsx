import NoCover from '../assets/noCover.png'

function BookRow({ book }) {
  const id = `book-row-book-${book.id}`
  const { title, author, imageLinks, publisher, description } = book.volumeInfo

  return (
    <div className="relative flex items-center justify-end">
      <div
        aria-labelledby={id}
        className="flex min-h-[270] grow-2 gap-7 rounded border border-solid border-zinc-200 p-5 text-black hover:text-inherit hover:shadow-md hover:shadow-gray-500 focus:text-inherit focus:shadow-md focus:shadow-gray-500"
      >
        <div>
          <img
            src={!imageLinks ? NoCover : imageLinks.thumbnail}
            alt={`${title} book cover`}
            className="mx-auto w-32"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h2 id={id} className="m-0 text-xl font-bold text-indigo-500">
                {title}
              </h2>
            </div>
            <div className="ml-2.5 text-end">
              <div className="mt-2 text-sm italic">{author}</div>
              <small>{publisher}</small>
            </div>
          </div>
          <small className="block">
            {!description ? 'N/A' : `${description.substring(0, 500)}...`}
          </small>
        </div>
      </div>
    </div>
  )
}

export default BookRow
