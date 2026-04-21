import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <header className="px-6 py-9 mt-8 flex flex-row justify-between gap-1 bg-[rgba(45,45,45,0.9)] items-center border-b-4 border-blue text-light-font z-1 absolute w-screen">
      <figure className="px-16 justify-start">
        <Image
          src="/img/KOEBblue.png"
          width={100}
          height={30}
          alt="Logo"
          loading="eager"
          className="min-w-20 min-h-fit"
        />
      </figure>
      <div className="items-center justify-start">
        <ul className="flex gap-15 px-2 text-xl">
          <li>Home</li>
          <li>Products</li>
        </ul>
      </div>
      <div className="">
        <form className="flex items-center border text-dark-font rounded-full px-4 p-2 gap-1 bg-blue w-xs justify-start">
          <button type="submit">
            <IoIosSearch size={25} />
          </button>
          <input
            type="search"
            name="query"
            className="outline-none focus:border-dark-font"
            placeholder="Search products..."
          />
        </form>
      </div>

      <div className="items-center flex justify-between pr-15 gap-5">
        <button className="text-xl">
          Sign in
        </button>
        <button className="">
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
