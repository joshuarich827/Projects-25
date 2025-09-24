export default function Sidebar({ books, onAddBook }) {
  const totalBooks = books.length;
  const avgRating = books.length
    ? (books.reduce((sum, b) => sum + b.rating, 0) / books.length).toFixed(1)
    : 0;

  return (
    <div className=" grid grid-cols-2 p-20 w-64 h-100 bg-white shadow-md">
      <div className="text-center mb-6">
        <h3 className="mb-15 border-b-1 pb-10">Reading Stats</h3>
        <div className="flex space-between mb-10">
          <span>Books Reviewed</span>
          <strong>{totalBooks}</strong>
        </div>
        <div className="flex space-between mb-10">
          <span>Average Rating</span>
          <strong>
            {avgRating} <i className="fas fa-star" style={{ color: "#ffc107" }}></i>
          </strong>
        </div>
        <div className="flex space-between mb-10">
          <span>5-Star Books</span>
          <strong>{books.filter((b) => b.rating === 5).length}</strong>
        </div>
      </div>
      <button onClick={onAddBook}>
        <i className="fas fa-plus"></i> Add New Review
      </button>
    </div>
  );
}
