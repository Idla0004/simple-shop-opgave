import ProductCard from "@/components/ProductCard";

export default function Products() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#E4DFD3] font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#E4DFD3] sm:items-start">
        <h1 className="text-6xl">WOMENS BAGS</h1>
        <p className="text-[24px] my-4">
          Discover our selection of BAGS and find
          your new favorite
        </p>
        <section>
          <ProductCard></ProductCard>
        </section>
      </main>
    </div>
  );
}
