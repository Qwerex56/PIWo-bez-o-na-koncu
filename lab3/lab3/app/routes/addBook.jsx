import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { BookListContext } from "../contexts/BookListContext";
import { addBook } from "../services/BookService";
import { useUser } from "../services/UserService";

export function meta() {
  return [
    { title: "Add Book" },
    { name: "description", content: "Welcome to library app!" },
  ];
};

export default function AddBook() {
  const user = useUser();
  
  const { bookList, setBookList } = useContext(BookListContext);
  const [newBook, setNewBook] = useState({
    author: "",
    title: "",
    description: "",
    price: 0.00,
    cover: true,
    pages: 0,
    image: "",

    uid: user?.uid || "",
  });

  const setAuthor = (ev) => {
    setNewBook(prev => ({
      ...prev,
      author: ev.target.value
    }));
  };

  const setTitle = (ev) => {
    setNewBook(prev => ({
      ...prev,
      author: ev.target.value
    }));
  };

  const setDescription = (ev) => {
    setNewBook(prev => ({
      ...prev,
      author: ev.target.value
    }));
  };

  const setPrice = (ev) => {
    setNewBook(prev => ({
      ...prev,
      author: Number(ev.target.value)
    }));
  };

  const setPages = (ev) => {
    setNewBook(prev => ({
      ...prev,
      author: Number(ev.target.value)
    }));
  };

  const handleNewBook = (e) => {
    e.preventDefault();

    const tempBook = {
      id: bookList.length + 1,
      author: "",
      ...newBook
    };

    console.log("handle: ", user.uid);
    tempBook.uid = user.uid;

    addBook(tempBook, user)
    setBookList(prev => prev.concat([tempBook]));
  };

  return (
    <main>
      <nav>
        <NavLink to="/"></NavLink>
      </nav>

      <input
        type="text" 
        placeholder="Author" 
        onChange={e => setAuthor(e)}
        className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
      />
      <input
        type="number" 
        placeholder="Price" 
        onChange={e => setPrice(e)}
        className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
      />
      <input
        type="number" 
        placeholder="Pages" 
        onChange={e => setPages(e)}
        className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
      />
      <input
        type="text" 
        placeholder="Title" 
        onChange={e => setTitle(e)}
        className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
      />
      <input
        type="text" 
        placeholder="Description" 
        onChange={e => setDescription(e)}
        className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
      />

      <button 
        onClick={e => handleNewBook(e)}
        className="bg-amber-200 p-4 text-black">
        Add Book
      </button>
    </main>
  );
};