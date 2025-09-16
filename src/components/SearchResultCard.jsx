function SearchResultCard({ verse, lang }) {
  if (!verse) return <div>Loading...</div>;
  return (
    <div className="h-20 w-full absolute my-3 p-2 rounded-xl text-left bg-white">
      <div className="flex flex-col">
        <span>{`${verse.book[lang]} ${verse.chapter} : ${verse.verse}`}</span>
        <span>{verse.quote[lang].split(" ").slice(0, 3).join(" ")}</span>
      </div>
    </div>
  );
}

export default SearchResultCard;
