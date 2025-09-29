"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import ModalForm from "./components/ModalForm";
import { Navbar } from "./components/Navbar";
import ReviewsSection from "./components/ReviewsSection";
import Sidebar from "./components/SideBar";


const initialBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 5,
    review:
      "A classic novel that explores the decadence and excess of the Jazz Age.",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 5,
    review: "A powerful story about racial injustice and the loss of innocence.",
    cover:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Atomic habits",
    author: "James clear",
    rating: 5,
    review: "Great for habit building.",
    cover:
      "https://www.google.com/imgres?q=atomic%20habits&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61M6KzUbf7L._UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.co.uk%2FAtomic-Habits-Proven-Build-Break%2Fdp%2F1847941834&docid=WPmvHCvv34UCjM&tbnid=8JFrYAnLyyBYGM&vet=12ahUKEwjAs-Hoj_-PAxWJW0EAHYTjA18QM3oECBkQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwjAs-Hoj_-PAxWJW0EAHYTjA18QM3oECBkQAA"
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coehlo",
    rating: 5,
    review: "Inspirational story",
    cover:
       "https://www.google.com/imgres?q=the%20alchemist%20paulo%20coelho%20book%20cover&imgurl=https%3A%2F%2Fimg.perlego.com%2Fbook-covers%2F598007%2F9780062416216.jpg&imgrefurl=https%3A%2F%2Fwww.perlego.com%2Fbook%2F598007%2Fthe-alchemist-pdf&docid=cF6LXUmaLPifYM&tbnid=x-oZhx3IMRTzsM&vet=12ahUKEwibstqskP-PAxVMW0EAHWbtKMEQM3oECBsQAA..i&w=1000&h=1500&hcb=2&ved=2ahUKEwibstqskP-PAxVMW0EAHWbtKMEQM3oECBsQAA"
    
  }
];

export default function Page() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("bookReviews");
    setBooks(saved ? JSON.parse(saved) : initialBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem("bookReviews", JSON.stringify(books));
  }, [books]);

  const handleAddBook = () => {
    setEditingBook(null);
    setShowModal(true);
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
    setShowModal(true);
  };

  const handleDeleteBook = (id) => {
    if (confirm("Delete this review?")) {
      setBooks(books.filter((b) => b.id !== id));
    }
  };

  const handleSubmit = (newBook) => {
    if (editingBook) {
      setBooks(books.map((b) => (b.id === editingBook.id ? newBook : b)));
    } else {
      setBooks([...books, { ...newBook, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="grid grid-cols-1 items-center gap-2 p-6 rounded bg-blue-500">
      
      
        <ReviewsSection
          books={filteredBooks}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onEditBook={handleEditBook}
          onDeleteBook={handleDeleteBook}
        />
      </div>
      {showModal && (
        <ModalForm
          editingBook={editingBook}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
      <footer className="text-center p-10 mt-20 border-t">
        <p>
          My Book Reviews &copy; {new Date().getFullYear()} - Track and review
          your reading journey
        </p>
      </footer>
    </>
  );
}
