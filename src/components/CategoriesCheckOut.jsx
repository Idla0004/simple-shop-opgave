"use client";
import useAddedProducts from "@/store/addedtocart";
import Image from "next/image";

const CategoriesScroll = () => {
  const { addedtocart } = useAddedProducts();

  return (
    <section className="pt-8 px-3 flex flex-col items-center justify-center w-full overflow-clip">
      <h2 className="lowercase text-2xl self-start font-semibold">
        Your order
      </h2>
      {addedtocart.length === 0 ? (
        <div>
          <p className="text-lg font-medium text-gray-700">
            Your cart is empty
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Add some products to get started!
          </p>
        </div>
      ) : (
        <ul className="px-0 w-fit flex gap-1 overflow-auto snap-x">
          {addedtocart.map((product) => (
            <li
              key={product.id}
              className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always"
            >
              <h2 className="self-start font-bold">
                {product.title}
              </h2>
              <Image
                src={product.imgsrc}
                width={200}
                height={200}
                alt={product.title}
                className="w-50 h-75 object-cover"
              />
              <div className="flex flex-row gap-15 self-stretch justify-between">
                <p className="self-start">
                  quantity
                </p>
                <p className="self-end">1</p>
              </div>
              <div className="flex flex-row gap-15 self-stretch justify-between">
                <p className="self-start">
                  price
                </p>
                <p className="self-end">
                  {product.price}$
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CategoriesScroll;

{
  /* <li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li>
<li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li>
<li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li>
<li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li>
<li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li>
<li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li>
<li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li>
<li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li>
<li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li>
<li className="flex flex-col place-items-center basis-auto shrink-0 py-10 px-2 self-start snap-center snap-always">
  <h2 className="self-start font-bold">
    Item 1
  </h2>
  <Image
    src="https://placecats.com/350/350"
    width={200}
    height={200}
    alt="cat"
    className="w-50 h-75 object-cover"
  />
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">quantity</p>
    <p className="self-end">1</p>
  </div>
  <div className="flex flex-row gap-15 self-stretch justify-between">
    <p className="self-start">price</p>
    <p className="self-end">219.25,-</p>
  </div>
</li> */
}
