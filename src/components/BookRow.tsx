function BookRow({ book }) {
  const { title, author, imageLinks, publisher, description } = book.volumeInfo
  const id = `book-row-book-${book.id}`

  return (
    <div className="relative flex items-center justify-end">
      <div
        aria-labelledby={id}
        className="flex min-h-[270] grow-2 gap-7 rounded border border-solid border-zinc-200 p-5 text-black hover:text-inherit hover:shadow-md hover:shadow-gray-500 focus:text-inherit focus:shadow-md focus:shadow-gray-500"
      >
        <div>
          <img src={imageLinks.thumbnail} alt={`${title} book cover`} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex-1">
              <h2 id={id} className="m-0 text-xl text-indigo-500">
                {title}
              </h2>
            </div>
            <div className="ml-2.5">
              <div className="mt-2 text-sm italic">{author}</div>
              <small>{publisher}</small>
            </div>
          </div>
          <small className="block">{description.substring(0, 500)}...</small>
        </div>
      </div>
    </div>
  )
}

export default BookRow
