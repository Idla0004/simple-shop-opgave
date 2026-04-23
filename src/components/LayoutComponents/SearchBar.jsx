const SearchBar = async ({useParams}) => {
    return ( <div>
        <Search/>
    </div> );
}
 
const Search = async ({searchParams}) => {
    "use server";
    const {categorySearch} = await searchParams;
    const url = categorySearch ? `https://dummyjson.com/products/search?q=${category}`:
     `https://dummyjson.com/products/category/${cat.slug}´;
    return (
        <form className="flex items-center border text-dark-font rounded-full px-4 p-2 gap-1 bg-blue w-xs justify-start">
              <button type="submit">
                <IoIosSearch size={25} />
              </button>
              <input
                type="search"
                name="tags"
                className="outline-none focus:border-dark-font"
                placeholder="Search products..."
              />
            </form>
    )
}
export default SearchBar;