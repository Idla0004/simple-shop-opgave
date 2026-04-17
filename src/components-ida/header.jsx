import Image from "next/image";

const Header = () => {
  return (
    <header className="px-2 mt-10 flex flex-row gap-1 bg-[#2D2D2D]">
      <figure className="px-8">
        <Image
          src="/img/KOEBblue.png"
          width={100}
          height={30}
          alt="Logo"
          loading="eager"
          className=""
        />
      </figure>
      <ul className="flex gap-1">
        <li>Home</li>
        <li>Products</li>
      </ul>
    </header>
  );
};

export default Header;
