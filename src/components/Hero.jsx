import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 z-0 justify-center py-0 w-screen mb-8">
      <div className="max-h-200 min-h-screen bg-[#6F6F78] items-center grid col-start-1 justify-center">
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
            className="row-start-2 "
          />
          <p className="row-start-3 text-[20px] text-[#E4DFD3] text-pretty max-w-115 mt-6">
            Your premium destination for fashion.
            Discover new styles and find your new
            dream look. Explore our categories to
            view more.
          </p>
          <div className="row-start-4">
            <button className="bg-blue text-[24px] uppercase py-2.5 px-8 mt-10 text-[#2D2D2D] cursor-pointer">
              Go To Categories
            </button>
          </div>
        </div>
      </div>
      <div className="relative right-0 top-0 col-start-2 col-end-2">
        <Image
          src="https://placecats.com/750/750"
          width={800}
          height={800}
          alt="Kitty cat"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
