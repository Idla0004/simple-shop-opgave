import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <header className="px-6 py-9 mt-8 grid grid-cols-4 gap-1 bg-[rgba(45,45,45,0.9)] items-center border-b-4 border-[#99D2DF] text-[#E4DFD3] z-1 absolute w-screen">
      <figure className="px-16 justify-start col-start-1">
        <Image
          src="/img/KOEBblue.png"
          width={100}
          height={30}
          alt="Logo"
          loading="eager"
          className=""
        />
      </figure>
      <div className="items-center justify-start col-start-2 col-end-2 ">
        <ul className="flex gap-20 text-xl">
          <li>Home</li>
          <li>Products</li>
        </ul>
      </div>
      <div className="">
        <form className="flex items-center border text-[#2D2D2D] rounded-full px-4 p-2 gap-1 bg-[#99D2DF] col-start-3 col-end-3 w-xs justify-start">
          <button type="submit">
            <IoIosSearch size={25} />
          </button>
          <input
            type="search"
            name="query"
            className="outline-none focus:border-[#2D2D2D]"
            placeholder="Search products..."
          />
        </form>
      </div>

      <div className="items-center flex justify-around px-4">
        <button className="col-start-4 text-xl">
          Sign in
        </button>
        <button className="col-start-4">
          <MdOutlineShoppingBag
            size={35}
            color="#E4DFD3"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
