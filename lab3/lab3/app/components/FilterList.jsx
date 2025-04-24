export default ({
  filterAuthor,
  filterPriceMin,
  filterPriceMax,
  filterHardCover,
  filterPageCountMin,
  filterPageCountMax,
  filterDescriptionWord
}) => {
  return (
    <article>
      <input 
        type="text" 
        placeholder="Author" 
        onChange={(e) => {filterAuthor(e)}}  
      />
      <input 
        type="number" 
        placeholder="Price min" 
        onChange={(e) => {filterPriceMin(e)}}
      />
      <input 
        type="number" 
        placeholder="Price max"
        max={10000}
        onChange={(e) => {filterPriceMax(e)}}
      />
      <input 
        type="checkbox" 
        placeholder="Hard cover"
        onChange={(e) => {filterHardCover(e)}}
      />
      <input 
        type="number" 
        placeholder="Pages min"
        onChange={(e) => {filterPageCountMin(e)}}
      />
      <input 
        type="number" 
        placeholder="Pages max"
        max={10000}
        onChange={(e) => {filterPageCountMax(e)}}
      />
      <input 
        type="text" 
        placeholder="Description" 
        onChange={(e) => {
          filterDescriptionWord(e);
        }}
      />
    </article>
  );
};