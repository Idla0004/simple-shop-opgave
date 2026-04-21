import Reviews from "@/components/Reviews";
import Image from "next/image";
import "@/app/local.css";

export default function Single() {
  return (
    <div>
      <main className="w-screen flex-1 py-10 px-16 bg-background">
        <section className="grid pt-8 grid-cols-2 relative top-30 pb-25">
          <div className="flex m-4 flex-col gap-4 place-items-center mx-8">
            <Image
              className="object-cover aspect-square"
              src="https://placecats.com/750/750"
              width={700}
              height={750}
              alt="Kitty cat"
            ></Image>
            <div className="flex gap-4">
              <Image
                className="object-cover max-w-[50%] aspect-6/7"
                src="https://placecats.com/750/750"
                width={400}
                height={450}
                alt="Kitty cat"
              ></Image>
              <div className="flex flex-col gap-4">
                <Image
                  className="object-cover aspect-5/4"
                  src="https://placecats.com/750/750"
                  width={400}
                  height={450}
                  alt="Kitty cat"
                ></Image>
                <Image
                  className="object-cover aspect-5/4"
                  src="https://placecats.com/750/750"
                  width={400}
                  height={450}
                  alt="Kitty cat"
                ></Image>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[40px] uppercase font-semibold">
              Product name
            </h2>
            <div className="out-of-stock flex justify-center p-2 my-4 bg-dark-grey text-light-font w-50">
              <p>OUT OF STOCK</p>
            </div>
            <div className="text-[32px] font-bold font-poppins flex gap-8">
              <p className="">Price 12$</p>
              <div className="on-sale-price flex gap-4 text-pink">
                <p>NOW</p>
                <p>Price 10$</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col">
                <label className="text-dark-grey">
                  QUANTITY
                </label>
                <input
                  placeholder="add amount"
                  className="bg-blue rounded-lg placeholder:text-pink h-12 cursor-pointer font-poppins max-w-60 text-pink text-center"
                  type="number"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="text-dark-grey">
                  SIZE
                </label>
                <select className="placeholder:text-slate-400 rounded-lg transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow cursor-pointer appearance-none bg-blue h-12 font-poppins w-60 text-pink text-center">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                  <option value="xl">xl</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center my-8">
              <button className="cursor-pointer bg-pink text-blue font-bold font-poppins w-60 h-12 rounded-lg">
                add to cart
              </button>
            </div>
            <div className="my-4">
              <div className="my-4">
                <h3 className="mb-2">
                  product description
                </h3>
                <p>alt muligt bla bla</p>
              </div>
              <div className="my-4">
                <h3 className="mb-2">
                  shipping information
                </h3>
                <p>alt muligt bla bla</p>
              </div>
              <div className="my-4">
                <h3 className="mb-2">
                  warranty information
                </h3>
                <p>alt muligt bla bla</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-8 my-8">
          <h2 className="font-poppins font-semibold text-[32px] my-8">
            reviews
          </h2>
          <div className="flex flex-wrap gap-3 justify-evenly">
            <Reviews></Reviews>
            <Reviews></Reviews>
            <Reviews></Reviews>
          </div>
        </section>
      </main>
    </div>
  );
}
