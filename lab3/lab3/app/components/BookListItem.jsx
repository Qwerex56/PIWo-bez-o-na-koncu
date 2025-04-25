import cover from "../covers/OIP.jpg";

export default ({ book }) => {
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
        <p>Author: {book.author}</p>
        <p>Price: {book.price}</p>
        <p>Cover: {book.cover}</p>
        <p>Pages: {book.pages}</p>
      </div>
      <div
        className="col-span-2">
        <h3 className="text-3xl text-bold">{book.title}</h3>
        <p className="text-[.6875rem]">{book.description}</p>
        <button className="bg-red-200 p-2 m-4">Edytuj</button>
        <button className="bg-red-200 p-2 m-4">Dodaj</button>
        <button className="bg-red-200 p-2 m-4">Usuń</button>
      </div>
    </article>
  );
};