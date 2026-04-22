// app/products/page.js
import { Suspense } from "react";
import ProductList from "@/components/ProductTest";
import SideBarNavigation from "@/components/SiderBarNavigation";

export default function ProductsPage({
  searchParams,
}) {
  return (
    <div className="flex items-start">
      <SideBarNavigation />
      <main className="flex-1 py-10 px-16 bg-[#E4DFD3]">
        <div className="relative top-40 pb-25">
          <Suspense
            fallback={<div>Indlæser...</div>}
          >
            <ProductList
              searchParams={searchParams}
            />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
