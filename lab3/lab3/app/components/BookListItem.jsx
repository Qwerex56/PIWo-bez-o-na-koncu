import { useContext, useState } from "react";
import cover from "../covers/OIP.jpg";
import { useUser } from "../services/UserService";
import { BookListContext } from "../contexts/BookListContext";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import {firestore} from "../services/init"

export default ({ book }) => {
  const user = useUser();
  const { setBookList, bookList } = useContext(BookListContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEdittedBook] = useState({ ...book });

  const isOwner = user && book.uid === user.uid;

  const handleDelete = async () => {
    // if (!window.confirm("Are you sure to delete this book?")) return;

    try {
      const docRef = doc(firestore, "books", book.id);
      await deleteDoc(docRef);
      setBookList(bookList.filter(b => b.id !== book.id));
    } catch (error) {
      alert("Error while deleting book: ", error);
    };
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEdittedBook(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const docRef = doc(firestore, "books", book.id);
      const { id, uid, ...bookDataToUpdate } = editedBook;

      await updateDoc(docRef, bookDataToUpdate);

      setBookList(bookList.map(b => (b.id === book.id ? { ...b, ...bookDataToUpdate } : b)));
      setIsEditing(false);
    } catch (error) {
      alert("Could not save the changes: ", error);
    }
  };

  return (
    <article
      className="grid grid-cols-4 gap-4 bg-[#EFD6AC] p-2 rounded-2xl text-[#04151F] items-center" >
      <img
        src={cover}
        alt="Book Cover"
        className="border-2 rounded-lg border-[#183A37]"
      />
      <div
        className="flex flex-col text-xl gap-4 font-bold">
        {!isEditing ? (
          <>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <p>Cover: {book.cover}</p>
            <p>Pages: {book.pages}</p>
          </>
        ) : (
          <>
            <input
              name="title"
              value={editedBook.title}
              onChange={handleChange}
              placeholder="Title"
            />
            
            <input
              name="author"
              value={editedBook.author}
              onChange={handleChange}
              placeholder="Autor"
            />

            <input
              name="description"
              value={editedBook.description}
              onChange={handleChange}
              placeholder="Opis"
            />

            <input
              name="price"
              type="number"
              value={editedBook.price}
              onChange={handleChange}
              placeholder="0"
            />

            <input
              name="pages"
              type="number"
              value={editedBook.pages}
              onChange={handleChange}
              placeholder="0"
            />
          </>
        )}

      </div>
      <div
        className="col-span-2"
      >
        {!isEditing && (
          <>
            <h3 className="text-3xl text-bold">{book.title}</h3>
            <p className="text-[.6875rem]">{book.description}</p>
          </>
        )}
      

        {isOwner && !isEditing && (
          <>
            <button
              className="bg-red-200 p-2 m-4"
              onClick={() => setIsEditing(true)}
            >
              Edytuj
            </button>

            <button 
              className="bg-red-200 p-2 m-4"
              onClick={handleDelete}
            >
              Usuń
            </button>
          </>
        )}

        {isEditing && (
          <button
            className="bg-red-200 p-2 m-4"
            onClick={() => handleSave()}
          >
            Zapisz
          </button>
        )}

        <button className="bg-red-200 p-2 m-4">Dodaj</button>

      </div>
    </article>
  );
};