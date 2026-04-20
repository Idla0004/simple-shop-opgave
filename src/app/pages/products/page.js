import ProductCard from "@/components/ProductCard";

export default function Products() {
  return (
    <div className="">
      <main className="py-10 px-16 bg-[#E4DFD3]">
        <h1 className="text-6xl">WOMENS BAGS</h1>
        <p className="text-[24px] my-4">
          Discover our selection of BAGS and find
          your new favorite
        </p>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 gap-y-10 py-14 place-items-center justify-between">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </section>
      </main>
    </div>
  );
}
