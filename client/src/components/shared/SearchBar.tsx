import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className="rounded-full w-[407px] border-[1px] border-[#D5D5D5] bg-[#F5F6FA]  py-[6px] px-[17px] hidden sm:flex items-center justify-start gap-[14px]">
      <SearchIcon />{" "}
      <input
        type="text"
        className="border-none outline-none w-full bg-transparent"
        placeholder="Buscar"
      />
    </div>
  );
};

export default SearchBar;
