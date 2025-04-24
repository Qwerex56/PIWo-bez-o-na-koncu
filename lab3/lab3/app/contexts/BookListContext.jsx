import { createContext, useState } from "react";

export const BookListContext = createContext();

export const BookListProvider = ({ children }) => {
  const [bookList, setBookList] = useState([
    {
      id: 1,
      author: "Malcolm XD",
      title: "Edukacja",
      description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
      price: 100.99,
      cover: true,
      pages: 272,
      image: ""
    },
    {
      id: 2,
      author: "Malcolm XD",
      title: "Edukacja",
      description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
      price: 100.99,
      cover: true,
      pages: 272,
      image: ""
    },
    {
      id: 3,
      author: "Malcolm XD",
      title: "Edukacja",
      description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
      price: 100.99,
      cover: true,
      pages: 272,
      image: ""
    },
    {
      id: 4,
      author: "Malcolm XD",
      title: "Edukacja",
      description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
      price: 100.99,
      cover: true,
      pages: 272,
      image: ""
    },
    {
      id: 5,
      author: "Malcolm XD",
      title: "Edukacja",
      description: "Kontynuacja bestsellerowej Emigracji!\n\n Malcolmowi i Stomilowi udało się wyrwać ze szponów śmierci czającej się na polach kapusty i powrócić do ojczyzny. Tylko co dalej? Studia? Praca? Bezrobocie? Uniwersytet życia? Największy fenomen polskiego rynku literackiego powraca z nową powieścią. Tym razem osadzonej w mieście stołecznym Warszawa i przyległościach. O edukacji, rekinach biznesu, incelach, wariacikach, dzikim wschodzie, pionierach polskiej klasy średniej i arabskich szejkach w zajazdach przy autostradzie.",
      price: 100.99,
      cover: true,
      pages: 272,
      image: ""
    },
  ]);

  return (
    <BookListContext.Provider value={{ bookList, setBookList }}>
      {children}
    </BookListContext.Provider>
  );
};