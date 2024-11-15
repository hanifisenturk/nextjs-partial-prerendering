import { Suspense } from "react";

import { ProductSizes } from "./components/dynamics/product-sizes";
import { ProductDescription } from "./components/statics/product-description";
import { ProductImage } from "./components/statics/product-image";

export const experimental_ppr = true;

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <ProductImage />

      <div className="flex flex-col gap-4">
        <ProductDescription />
        <Suspense fallback={<div>loading sizes...</div>}>
          <ProductSizes />
        </Suspense>
      </div>
    </main>
  );
}
