import Image from "next/image";

const CategoriesIndex = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen">
      <h2 className="uppercase text-2xl text-dark-font">
        Shop by categories
      </h2>
      <ul className="px-0 w-fit flex gap-1 overflow-auto snap-x">
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <Image
            src="https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp"
            width={200}
            height={200}
            alt="Mens watch"
            className="rounded-full bg-[#E2E2E2]"
          />
          <p>Mens watches</p>
        </li>
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <Image
            src="https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/1.webp"
            width={200}
            height={200}
            alt="Mens shirt"
            className="rounded-full bg-[#E2E2E2]"
          />
          <p>Womens watches</p>
        </li>
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <Image
            src="https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp"
            width={200}
            height={200}
            alt="Mens shirt"
            className="rounded-full bg-[#E2E2E2]"
          />
          <p>Womens bags</p>
        </li>
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <Image
            src="https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp"
            width={200}
            height={200}
            alt="Mens shirt"
            className="rounded-full bg-[#E2E2E2]"
          />
          <p>Sunglasses</p>
        </li>
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <Image
            src="https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/1.webp"
            width={200}
            height={200}
            alt="Mens shirt"
            className="rounded-full bg-[#E2E2E2]"
          />
          <p>Womens dresses</p>
        </li>
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <Image
            src="https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp"
            width={200}
            height={200}
            alt="Mens shirt"
            className="rounded-full bg-[#E2E2E2]"
          />
          <p>Mens shirts</p>
        </li>
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <Image
            src="https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp"
            width={200}
            height={200}
            alt="Mens shirt"
            className="rounded-full bg-[#E2E2E2]"
          />
          <p>Womens shoes</p>
        </li>
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <Image
            src="https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp"
            width={200}
            height={200}
            alt="Mens shirt"
            className="rounded-full bg-[#E2E2E2]"
          />
          <p>Mens shoes</p>
        </li>
      </ul>
    </section>
  );
};

export default CategoriesIndex;
