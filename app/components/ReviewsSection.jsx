import ReviewCard from "./ReviewCard";

export default function ReviewsSection({
  books,
  searchTerm,
  setSearchTerm,
  onEditBook,
  onDeleteBook,
}) {
  return (
    <div className=" grid grid-cols flex flex-col items-center justify-center  w-150 br-10 p-20 mb-20 bg-white shadow-md">
      <div className="flex space-between align-center w-150 mb-20">
        <h2 className="text-blue-400 text-align center column flex-start">My Book Reviews</h2>
        <div className="flex items-center br-20 p-10 bg=#f1f1f1">
          <i className="fas fa-search"></i>
          <input
            type="text" className="bg-transparent ml-10 p-8 outline-none w-100 mt-15"
            placeholder="Search books or authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {books.length > 0 ? (
        <div className="grid grid-cols-1 gap-20 w-150">
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
        <div className="text-center cl-#777 p-50">
          <i className="fas fa-book-open"></i>
          <h3>No book reviews yet</h3>
          <p>Add your first book review by clicking the button in the sidebar</p>
        </div>
      )}
    </div>
  );
}
