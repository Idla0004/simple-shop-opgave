import Image from "next/image";

const CategoriesIndex = () => {
  return (
    <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
      <Image
        src="https://placecats.com/350/350"
        width={200}
        height={200}
        alt="cat"
        className="rounded-full"
      />
      <p>Mens shirts</p>
    </li>
  );
};

export default CategoriesIndex;
