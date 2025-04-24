export default ({ book }) => {
  return (
    <article>
      <img src="" alt="Book Cover" />
      <div>
        <p>Author: {book.author}</p>
        <p>Price: {book.price}</p>
        <p>Cover: {book.cover}</p>
        <p>Pages: {book.pages}</p>
      </div>
      <div>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
      </div>
    </article>
  );
};