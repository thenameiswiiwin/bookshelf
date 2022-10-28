function BookRow({ book }) {
  const { title, author, coverImageUrl } = book
  const id = `book-row-book-${book.id}`

  return (
    <div className="relative flex items-center justify-end">
      <div
        aria-labelledby={id}
        className=":hover:shadow-md :focus:shadow-md grid min-h-[270] grow-2 grid-cols-1 gap-5 rounded border border-solid border-zinc-200 p-5 text-black hover:text-inherit hover:shadow-gray-500 focus:text-inherit focus:shadow-gray-500"
      >
        <div className="w-36 sm:w-full">
          <img
            src={coverImageUrl}
            alt={`${title} book cover`}
            className="max-h-full w-full"
          />
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
              <small>{book.publisher}</small>
            </div>
          </div>
          <small className="block">{book.synopsis.substring(0, 500)}...</small>
        </div>
      </div>
    </div>
  )
}

export default BookRow
