import { collection, query, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useUser } from "../services/UserService";
import { listBookByUser } from "../services/BookService";
import { firestore } from "../services/init"

export const BookListContext = createContext();

export const BookListProvider = ({ children }) => {
  // const [bookList, setBookList] = useState([
  //   {
  //     id: 1,
  //     author: "Malcolm XD",
  //     title: "Edukacja",
  //     description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
  //     price: 100.99,
  //     cover: true,
  //     pages: 272,
  //     image: ""
  //   },
  //   {
  //     id: 2,
  //     author: "Malcolm XD",
  //     title: "Edukacja",
  //     description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
  //     price: 100.99,
  //     cover: true,
  //     pages: 272,
  //     image: ""
  //   },
  //   {
  //     id: 3,
  //     author: "Malcolm XD",
  //     title: "Edukacja",
  //     description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
  //     price: 100.99,
  //     cover: true,
  //     pages: 272,
  //     image: ""
  //   },
  //   {
  //     id: 4,
  //     author: "Malcolm XD",
  //     title: "Edukacja",
  //     description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
  //     price: 100.99,
  //     cover: true,
  //     pages: 272,
  //     image: ""
  //   },
  //   {
  //     id: 5,
  //     author: "Malcolm XD",
  //     title: "Edukacja",
  //     description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
  //     price: 100.99,
  //     cover: true,
  //     pages: 272,
  //     image: ""
  //   },
  // ]);

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
        };
      } catch (err) {
        console.error("Error while downloading books: ", err);
        setBookList([]);
      };
    };

    fetchBooks();
  }, [user, showUserBooks]);

  return (
    <BookListContext.Provider
      value={{ bookList, setBookList, toggleUserBooks }} >
      {children}
    </BookListContext.Provider>
  );
};