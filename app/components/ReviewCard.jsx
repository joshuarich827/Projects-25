export default function ReviewCard({ book, onEdit, onDelete }) {
  return (
    <div className="border border-radius-10 overflow-hidden shadow-md w-100 mb-20 grid grid-cols-1 gap-20">
      <div
        className="h-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${book.cover})` }}
      ></div>
      <div className="p-20">
        <h3 className="font-18 font-bold mb-5">{book.title}</h3>
        <p className="mb-5">by {book.author}</p>
        <div className="mb-5">
          {Array.from({ length: book.rating }).map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
          {Array.from({ length: 5 - book.rating }).map((_, i) => (
            <i key={i} className="far fa-star"></i>
          ))}
        </div>
        <p className="mb-15 font-italic cl-#555">{book.review}</p>
        <div className="cursor-pointer flex space-between">
          <button onClick={onEdit}>
            <i className="fas fa-edit"></i> Edit
          </button>
          <button onClick={onDelete}>
            <i className="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
