import { IoFilterOutline } from "react-icons/io5";

const Header = ({
  filterOptions,
  setSearchQuery,
  createNewBook,
  setCreateNewBook,
  searchQuery,
  setSelectedFilter,
  selectedFilter,
}) => {
  return (
    <div className="flex items-center justify-between mt-3">
      {/* header */}
      {/* Filter options */}
      <div className="flex py-[4px] rounded-lg h-10 w-fit px-[4px] border border-white/20 bg-[#1C1C1C] items-center gap-1 my-1">
        {filterOptions.map((option) => (
          <div
            key={option}
            onClick={() => setSelectedFilter(option)}
            className={`${
              selectedFilter === option
                ? "bg-white text-black/95"
                : "text-white/70 hover:text-white hover:bg-white/10"
            } p-1 rounded-lg h-full flex items-center justify-center font-medium px-2 text-sm cursor-pointer duration-200`}
          >
            {option}
          </div>
        ))}
      </div>
      {/* <h2 className="text-2xl font-semibold">Zain's Books</h2> */}
      <div className="flex items-center justify-between gap-3">
        <span
          className="font-medium cursor-pointer px-2 py-[5px] border border-white/5 hover:bg-white/95 text-black rounded-lg bg-white hover:opacity-95 duration-200"
          onClick={() => setCreateNewBook(!createNewBook)}
        >
          Add New Book
        </span>
        <div className="flex items-center cursor-pointer hover:bg-[#1C1C1E]/80 duration-200 gap-2 bg-[#1C1C1E] p-2 rounded-md border-[1px] border-[#2C2C2C] w-fit group">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none w-52 h-5 text-[#F0F0F0] placeholder:text-[#F0F0F0]/50"
          />
        </div>
        <span className="bg-white group p-[5px] rounded-md cursor-pointer">
          <IoFilterOutline className="text-2xl group-hover:text-black text-black/80" />
        </span>
      </div>
    </div>
  );
};

export default Header;
