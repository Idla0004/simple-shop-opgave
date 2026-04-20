import Image from "next/image";

const CategoriesScroll = () => {
  return (
    <div className="pt-8 px-5 flex flex-col items-center justify-center w-screen">
      <h2 className="lowercase text-2xl self-start">
        Your order
      </h2>
      <ul className="px-5 w-screen flex gap-1 overflow-auto snap-x">
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <h2 className="self-start font-semibold">
            Item 1
          </h2>
          <Image
            src="https://placecats.com/350/350"
            width={200}
            height={200}
            alt="cat"
            className="w-[200px] h-[300px] object-cover"
          />
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">quantity</p>
            <p className="self-end">1</p>
          </div>
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">price</p>
            <p className="self-end">219.25,-</p>
          </div>
        </li>
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <h2 className="self-start font-semibold">
            Item 1
          </h2>
          <Image
            src="https://placecats.com/350/350"
            width={200}
            height={200}
            alt="cat"
            className="w-[200px] h-[300px] object-cover"
          />
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">quantity</p>
            <p className="self-end">1</p>
          </div>
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">price</p>
            <p className="self-end">219.25,-</p>
          </div>
        </li>{" "}
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <h2 className="self-start font-semibold">
            Item 1
          </h2>
          <Image
            src="https://placecats.com/350/350"
            width={200}
            height={200}
            alt="cat"
            className="w-[200px] h-[300px] object-cover"
          />
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">quantity</p>
            <p className="self-end">1</p>
          </div>
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">price</p>
            <p className="self-end">219.25,-</p>
          </div>
        </li>{" "}
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <h2 className="self-start font-semibold">
            Item 1
          </h2>
          <Image
            src="https://placecats.com/350/350"
            width={200}
            height={200}
            alt="cat"
            className="w-[200px] h-[300px] object-cover"
          />
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">quantity</p>
            <p className="self-end">1</p>
          </div>
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">price</p>
            <p className="self-end">219.25,-</p>
          </div>
        </li>{" "}
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <h2 className="self-start font-semibold">
            Item 1
          </h2>
          <Image
            src="https://placecats.com/350/350"
            width={200}
            height={200}
            alt="cat"
            className="w-[200px] h-[300px] object-cover"
          />
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">quantity</p>
            <p className="self-end">1</p>
          </div>
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">price</p>
            <p className="self-end">219.25,-</p>
          </div>
        </li>{" "}
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <h2 className="self-start font-semibold">
            Item 1
          </h2>
          <Image
            src="https://placecats.com/350/350"
            width={200}
            height={200}
            alt="cat"
            className="w-[200px] h-[300px] object-cover"
          />
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">quantity</p>
            <p className="self-end">1</p>
          </div>
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">price</p>
            <p className="self-end">219.25,-</p>
          </div>
        </li>{" "}
        <li className="flex flex-col place-items-center basis-[min(250px,80%)] shrink-0 py-10 px-2 self-start snap-center snap-always">
          <h2 className="self-start font-semibold">
            Item 1
          </h2>
          <Image
            src="https://placecats.com/350/350"
            width={200}
            height={200}
            alt="cat"
            className="w-[200px] h-[300px] object-cover"
          />
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">quantity</p>
            <p className="self-end">1</p>
          </div>
          <div className="flex flex-row gap-15 self-stretch">
            <p className="self-start">price</p>
            <p className="self-end">219.25,-</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesScroll;
