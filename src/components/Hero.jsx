import Image from "next/image";

const Hero = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 relative bottom-40 left-0 right-0 z-0 justify-center py-0 w-screen sm:flex sm:flex-wrap">
      <div className="relative left-0 bg-[#6F6F78] max-w-screen items-center grid justify-center col-start-1 col-end-1 px-5">
        <div
          className="
        grid grid-rows-3 row-start-1"
        >
          <Image
            src="/img/KOEBdark.png"
            width={350}
            height={0}
            alt="Logo"
            loading="eager"
            className="row-start-1"
          />
          <p className="row-start-2 text-[20px] text-[#E4DFD3] text-pretty max-w-115 mt-6">
            Your premium destination for fashion.
            Discover new styles and find your new
            dream look. Explore our categories to
            view more.
          </p>
          <div className="row-start-3">
            <button className="bg-blue text-[24px] uppercase py-2.5 px-8 mt-10 text-[#2D2D2D] cursor-pointer">
              Go To Categories
            </button>
          </div>
        </div>
      </div>
      <div className="relative right-0 top-0 col-start-2 col-end-2 max-w-screen">
        <Image
          src="https://placecats.com/750/750"
          width={800}
          height={800}
          alt="Kitty cat"
          className="max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
