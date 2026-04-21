import ProductCard from "@/components/ProductCard";

export default function Products() {
  return (
    <div className="flex items-start">
      <aside className="flex flex-col justify-center sticky h-screen min-w-60 max-w-100 top-0 p-8 bg-grey-bg">
        <h2 className="text-light-font mb-1">
          CATEGORIES
        </h2>
        <ul className="border-l text-light-font">
          <li className="p-2">mens watches</li>
          <li className="p-2">womens watches</li>
          <li className="p-2">womens bags</li>
          <li className="p-2">mens sunglasses</li>
          <li className="p-2">
            womens sunglasses
          </li>
          <li className="p-2">womens dresses</li>
          <li className="p-2">mens shirts</li>
          <li className="p-2">womens shoes</li>
          <li className="p-2">mens shoes</li>
        </ul>
        <button className="my-6 px-4 py-1 font-bold font-poppins text-[20px] text-pink text-left bg-background w-42">
          SALE
        </button>
      </aside>
      <main className="flex-1 py-10 px-16 bg-[#E4DFD3]">
        <div className="relative top-40">
          <h1 className="text-6xl relative">
            WOMENS BAGS
          </h1>
          <p className="text-[24px] my-4">
            Discover our selection of BAGS and
            find your new favorite
          </p>
          <section className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 gap-y-10 py-14 place-items-center justify-between">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </section>
        </div>
      </main>
    </div>
  );
}
