import ReviewCard from "./ReviewCard";

export default function ReviewsSection({
  books,
  searchTerm,
  setSearchTerm,
  onEditBook,
  onDeleteBook,
}) {
  return (
    <div className="flex flex-col items-center br-10 gap-4 mb-20 bg-white p-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center space-between align-center w-150 mb-20">
        <h2 className="text-blue-400 text-align center column flex-start text-4xl mb-6 font-bold">My Book Reviews</h2>
        <div className="flex items-center br-20 p-10 bg=#f1f1f1">
          <i className="fas fa-search"></i>
          <input
            type="text" className="flex-1 border border-gray-300  p-2  rounded bg-transparent ml-10 p-8 outline-none w-100 mt-3 px-3 py-2"
            placeholder="Search books or authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {books.length > 0 ? (
        <div className="grid gap-6 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <ReviewCard
              key={book.id}
              book={book}
              onEdit={() => onEditBook(book)}
              onDelete={() => onDeleteBook(book.id)}
            />
          ))}
        </div>
      ) : (
        <div className="cl-#777 p-50">
          <i className="fas fa-book-open"></i>
          <h3>No book reviews yet</h3>
          <p>Add your first book review by clicking the button in the sidebar</p>
        </div>
      )}
    </div>
  );
}
