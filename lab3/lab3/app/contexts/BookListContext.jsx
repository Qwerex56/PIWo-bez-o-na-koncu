import { collection, query, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useUser } from "../services/UserService";
import { listBookByUser } from "../services/BookService";
import { firestore } from "../services/init"

export const BookListContext = createContext();

export const BookListProvider = ({ children }) => {
  const col = collection(firestore, "books");

  const listBooks = async () => {
    const q = query(col);
    console.log(q);
    const snap = await getDocs(q);

    return snap.docs.map(doc => doc.data());
  };

  const [bookList, setBookList] = useState([]);

  const [showUserBooks, setShowUserBooks] = useState(false);
  const user = useUser();

  const toggleUserBooks = showBooks => {
    console.log("Book context: ", showBooks);
    setShowUserBooks(showBooks);
    console.log("After: ", showBooks);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (showUserBooks && user) {
          const list = await listBookByUser(user.uid)
            .then(d => setBookList(d));
        } else {
          const list = await listBooks()
            .then(d => setBookList(d));
          console.log(list, "Eloelo")
        };
      } catch (err) {
        console.error("Error while downloading books: ", err);
        setBookList([]);
      };
    };

    fetchBooks();
  }, [user, showUserBooks]);

  return (
    <div id="book-list">
      <BookListContext.Provider
        value={{ bookList, setBookList, toggleUserBooks }} >
        {children}
      </BookListContext.Provider>
    </div>
  );
};