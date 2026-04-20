import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function Single() {
  return (
    <div>
      <main className="bg-background">
        <section className="grid grid-cols-2">
          <div className="">
            <Image
              className="object-cover aspect-8/9"
              src="https://placecats.com/750/750"
              width={400}
              height={450}
              alt="Kitty cat"
            ></Image>
            <Image
              className="object-cover aspect-8/9"
              src="https://placecats.com/750/750"
              width={400}
              height={450}
              alt="Kitty cat"
            ></Image>
            <Image
              className="object-cover aspect-8/9"
              src="https://placecats.com/750/750"
              width={400}
              height={450}
              alt="Kitty cat"
            ></Image>
            <Image
              className="object-cover aspect-8/9"
              src="https://placecats.com/750/750"
              width={400}
              height={450}
              alt="Kitty cat"
            ></Image>
          </div>
          <div>
            <h2 className="text-[40px] font-semibold">
              Product name
            </h2>
            <div className="text-[32px] flex">
              <p>Price 12$</p>
              <p>On sale Price 10$</p>
            </div>
            <div>
              <div>
                <label>QUANTITY</label>
                <input type="number"></input>
              </div>
              <div>
                <label>SIZE</label>
                <input type="number"></input>
              </div>
            </div>
            <button>add to cart</button>
            <div>
              <h3>product description</h3>
              <p>alt muligt bla bla</p>
              <h3>shipping information</h3>
              <p>alt muligt bla bla</p>
              <h3>warranty information</h3>
              <p>alt muligt bla bla</p>
            </div>
          </div>
        </section>
        <section className="flex justify-evenly">
          <Reviews></Reviews>
          <Reviews></Reviews>
          <Reviews></Reviews>
        </section>
      </main>
    </div>
  );
}
