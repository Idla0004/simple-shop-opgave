// app/products/page.js
import { Suspense } from "react";
import ProductList from "@/components/ListView/ProductList";
import SideBarNavigation from "@/components/ListView/SiderBarNavigation";

export default function ProductsPage({
  searchParams,
}) {
  return (
    <div className="flex items-start">
      <SideBarNavigation />
      <main className="flex-1 py-10 px-16 bg-[#E4DFD3]">
        <div className="relative top-40 pb-25">
          <Suspense
            fallback={
              <div>Loading products...</div>
            }
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
