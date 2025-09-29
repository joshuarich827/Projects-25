export default function ReviewCard({ book, onEdit, onDelete }) {
  return (
    <div className="text-2xl font-bold mb-4 gap-20 overflow-hidden w-100 mb-20 grid grid-cols-1 gap-20 p-6  rounded-lg">
      {/*Grid container */}
      <div
        className="h-100 bg-cover bg-center grid grid-cols-3 gap-4 "
        style={{ backgroundImage: `url(${book.cover})` }}
      ></div>
      <div className="p-20 ">
        <h3 className="font-bold mb-2">{book.title}</h3>
        <p className="mb-2">by {book.author}</p>
        <div className="mb-2 text-yellow-500">
          {Array.from({ length: book.rating }).map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
          {Array.from({ length: 5 - book.rating }).map((_, i) => (
            <i key={i} className="far fa-star"></i>
          ))}
        </div>
        <p className="mb-5 font-italic cl-#555">{book.review}</p>
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
