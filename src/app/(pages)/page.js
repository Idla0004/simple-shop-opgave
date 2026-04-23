import Hero from "@/components/FrontPage/Hero";
import CategoriesIndexTest from "@/components/FrontPage/CategoriesIndex";
export default function Home() {
  return (
    <div className="bg-primary-light">
      <main className=" bg-primary-light">
        <Hero />
        <CategoriesIndexTest />
      </main>
    </div>
  );
}
