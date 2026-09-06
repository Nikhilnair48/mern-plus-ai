import { memo } from "react";
import { addSlowProductListRender } from "./performanceHelpers";
import type { Product } from "./productData";

type ProductListProps = {
  products: Product[];
  onSelect: (
    productId: string,
  ) => void;
};

function ProductListComponent({
  products,
  onSelect,
}: ProductListProps) {
  // Teaching only: make unnecessary child renders easy to feel.
  addSlowProductListRender();

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {products.slice(0, 8).map((product) => (
        <article
          key={product.id}
          className="rounded-xl border border-slate-200 bg-white p-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-semibold text-slate-900">
                {product.name}
              </h2>
              <span className="mt-2 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {product.category}
              </span>
            </div>

            <p className="font-semibold text-slate-900">
              ₹
              {product.price.toLocaleString(
                "en-IN",
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onSelect(product.id)
            }
            className="mt-4 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Select
          </button>
        </article>
      ))}
    </div>
  );
}

export const ProductList = memo(
  ProductListComponent,
);
