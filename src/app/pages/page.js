import Hero from "@/components/Hero";
import CategoriesIndex from "@/components/CategoriesIndex";
export default function Home() {
  return (
    <div className="bg-primary-light">
      <main className=" bg-primary-light">
        <Hero />
        <section className="flex flex-col items-center justify-center w-screen">
          <h2 className="uppercase text-2xl text-dark-font">
            Shop by categories
          </h2>
          <ul className="w-screen flex gap-1 overflow-auto snap-x text-dark-font">
            <CategoriesIndex />
          </ul>
        </section>
      </main>
    </div>
  );
}
