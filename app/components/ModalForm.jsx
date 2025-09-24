import { useState } from "react";

export default function ModalForm({ editingBook, onClose, onSubmit }) {
  const [title, setTitle] = useState(editingBook?.title || "");
  const [author, setAuthor] = useState(editingBook?.author || "");
  const [rating, setRating] = useState(editingBook?.rating || 5);
  const [review, setReview] = useState(editingBook?.review || "");
  const [cover, setCover] = useState(editingBook?.cover || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: editingBook ? editingBook.id : Date.now(),
      title,
      author,
      rating: parseInt(rating),
      review,
      cover:
        cover ||
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=60",
    });
  };

  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-100 h-100 bg-black bg-opacity-50">
      <div className="bg-white p-30 br-10 w-100 max-w-500 border box-shadow-md">
        <div className="flex justify-between items-center mb-20">
          <h2>{editingBook ? "Edit Book Review" : "Add New Book Review"}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-15">
            <label className="block mb-5 font-500">Book Title</label>
            <input className="w-100 p-10 br-5 font-16"
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-15">
            <label>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-15">
            <label>Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          <div className="mb-15">
            <label>Your Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <div className="mb-15">
            <label>Cover Image URL (optional)</label>
            <input
              type="url"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
            />
          </div>
          <button type="submit" className="w-100 p-12 br-5 cursor-pointer bold white mt-10">
            {editingBook ? "Update Review" : "Add Review"}
          </button>
        </form>
      </div>
    </div>
  );
}
