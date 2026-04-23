import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 z-0 justify-center py-0 w-screen mb-8">
      <div className="max-h-200 min-h-screen bg-grey-bg items-center grid col-start-1 justify-center">
        <div
          className="
        grid auto-rows-auto"
        >
          <Image
            src="/img/KOEBdark.png"
            width={350}
            height={350}
            alt="Logo"
            loading="eager"
            className="row-start-2"
          />
          <p className="row-start-3 text-[18px] text-light-font text-pretty max-w-115 mt-6">
            Your premium destination for fashion.
            Discover new styles and find your new
            dream look. Explore our categories to
            view more.
          </p>
          <div className="row-start-4">
            <Link href="/products">
              <button className="bg-blue text-[20px] font-semibold uppercase py-2 px-9 mt-10 text-dark-font cursor-pointer hover:bg-[#C4F4FF]">
                Go To Categories
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative right-0 top-0 col-start-2 col-end-2">
        <Image
          src="https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/1.webp"
          width={800}
          height={800}
          alt="Womens handbag black"
          className="size-full object-cover bg-light-grey"
        />
      </div>
    </section>
  );
};

export default Hero;
