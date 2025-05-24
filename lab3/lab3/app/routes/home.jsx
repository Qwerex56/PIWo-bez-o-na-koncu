import { useContext, useEffect, useState, useRef } from "react";

import BookListItem from "../components/BookListItem";
import FilterList from "../components/FilterList"
import { BookListContext } from "../contexts/BookListContext";

export function meta() {
  return [
    { title: "Library App" },
    { name: "description", content: "Welcome to library app!" },
  ];
};

export default function Home() {
  const { bookList, setBookList } = useContext(BookListContext);
  const [query, setQuery] = useState({
    author: "",
    priceMin: 0.00,
    priceMax: 110.00,
    hardCover: false,
    pageCountMin: 0,
    pageCountMax: Number.MAX_VALUE,
    descriptionWord: ""
  });

  const prevQueryRef = useRef(query);

  useEffect(() => {
    prevQueryRef.current = query;
    console.log(prevQueryRef.current)
  }, [query]);

  const [prevQuery, setPrevQuery] = useState(null);

  useEffect(() => {
    setPrevQuery(query);
  });

  const filterAuthor = (ev) => {
    setQuery(prev => ({
      ...prev,
      author: ev.target.value
    }));
  };

  const filterPriceMin = (ev) => {
    setQuery(prev => ({
      ...prev,
      priceMin: Number(ev.target.value)
    }));
  };

  const filterPriceMax = (ev) => {
    const newPrice = Number(ev.target.value) === 0 ?
      Number.MAX_SAFE_INTEGER :
      Number(ev.target.value);

    setQuery(prev => ({
      ...prev,
      priceMax: newPrice
    }));
  };

  const filterHardCover = (ev) => {
    setQuery(prev => ({
      ...prev,
      hardCover: ev.target.value
    }));
  };

  const filterPageCountMin = (ev) => {
    setQuery(prev => ({
      ...prev,
      pageCountMin: Number(ev.target.value)
    }));
  };

  const filterPageCountMax = (ev) => {
    const newPage = Number(ev.target.value) === 0 ?
      Number.MAX_SAFE_INTEGER :
      Number(ev.target.value);

    setQuery(prev => ({
      ...prev,
      pageCountMax: newPage
    }));
  };

  const filterDescriptionWord = (ev) => {
    setQuery(prev => ({
      ...prev,
      descriptionWord: ev.target.value
    }));
  };

  console.log("Component Re-Rendered!");

  const filteredBooksRef = []
  filteredBooksRef.current = bookList
    .filter((it) => it.author.toLowerCase().includes(query.author))
    .filter((it) => query.priceMin <= it.price && it.price <= query.priceMax)
    .filter((it) => query.pageCountMin <= it.pages && it.pages <= query.pageCountMax)
    .filter((it) => it.description.toLowerCase().includes(query.descriptionWord))
    .map((it) => <BookListItem key={it.id} book={it} />);
  console.log(filteredBooksRef.current, "books")
  useEffect(() => {
  }, [bookList]);

  return (
    <main
      className="flex flex-col ml-auto mr-auto max-w-[65.5rem]">
      <div
        className="flex flex-col gap-2 p-4 bg-[#183A37] rounded-4xl" >
        <FilterList
          filterAuthor={filterAuthor}
          filterHardCover={filterHardCover}
          filterDescriptionWord={filterDescriptionWord}
          filterPriceMin={filterPriceMin}
          filterPriceMax={filterPriceMax}
          filterPageCountMin={filterPageCountMin}
          filterPageCountMax={filterPageCountMax}
        />
        {filteredBooksRef.current}
      </div>
    </main>
  );
};
