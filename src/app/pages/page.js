import Hero from "@/components/Hero";
import CategoriesIndex from "@/components/CategoriesIndex";
export default function Home() {
  return (
    <div className="bg-primary-light">
      <main className=" bg-primary-light">
        <Hero />
        <CategoriesIndex />
      </main>
    </div>
  );
}
