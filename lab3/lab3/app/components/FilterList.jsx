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
    <article
      className="flex flex-row justify-around bg-[#EFD6AC] p-2 gap-2 rounded-2xl" >
      <input
        type="text"
        placeholder="Author"
        onChange={(e) => { filterAuthor(e) }}
        className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
      />
      <div>
        <input
          type="number"
          placeholder="Price min"
          onChange={(e) => { filterPriceMin(e) }}
          className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
        />
        <input
          type="number"
          placeholder="Price max"
          max={10000}
          onChange={(e) => { filterPriceMax(e) }}
          className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
        />
      </div>
      {/* <div>
        <label htmlFor="hardCover">Hard cover</label>
        <input
          id="hardCover"
          type="checkbox"
          placeholder="Hard cover"
          onChange={(e) => { filterHardCover(e) }}
          className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
        />
      </div> */}
      
      <div>
        <input
          type="number"
          placeholder="Pages min"
          onChange={(e) => { filterPageCountMin(e) }}
          className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
        />
        <input
          type="number"
          placeholder="Pages max"
          max={10000}
          onChange={(e) => { filterPageCountMax(e) }}
          className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
        />
      </div>
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => { filterDescriptionWord(e) }}
        className="bg-[#7A7666] text-black rounded-lg border-[#183A37] border-2"
      />
    </article>
  );
};