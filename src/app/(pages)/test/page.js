// app/products/page.js
import { Suspense } from "react";
import ProductList from "@/components/ProductTest";

export default function ProductsPage({
  searchParams,
}) {
  return (
    <main>
      <Suspense fallback={<div>Indlæser...</div>}>
        <ProductList
          searchParams={searchParams}
        />
      </Suspense>
    </main>
  );
}
