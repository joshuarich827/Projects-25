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
      ""
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coehlo",
    rating: 5,
    review: "Inspirational story"
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
      
      <div className="flex flex-col items-center gap-2">

        
        
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
