import { useState } from "react";
import { slowFilterProducts } from "./performanceHelpers";
import {
  products,
  type Product,
  type ProductCategory,
} from "./productData";
import { ProductList } from "./ProductList";

const categories: Array<
  ProductCategory | "All"
> = [
  "All",
  "Kitchen",
  "Home",
  "Travel",
  "Tech",
];

export function ProductDirectory() {
  const [query, setQuery] =
    useState("");
  const [category, setCategory] =
    useState<ProductCategory | "All">(
      "All",
    );
  const [showHelp, setShowHelp] =
    useState(false);
  const [
    selectedProductId,
    setSelectedProductId,
  ] = useState<string | null>(null);

  // PERFORMANCE TASK:
  // This calculation repeats during unrelated updates.
  const visibleProducts =
    slowFilterProducts(
      products,
      query,
      category,
    );

  // PERFORMANCE TASK:
  // Check whether this function prop changes
  // during unrelated parent renders.
  function handleSelectProduct(
    productId: string,
  ) {
    setSelectedProductId(productId);
  }

  const selectedProduct =
    products.find(
      (product) =>
        product.id ===
        selectedProductId,
    );

  return (
    <DirectoryView
      query={query}
      setQuery={setQuery}
      category={category}
      setCategory={setCategory}
      showHelp={showHelp}
      setShowHelp={setShowHelp}
      visibleProducts={visibleProducts}
      handleSelectProduct={
        handleSelectProduct
      }
      selectedProduct={selectedProduct}
    />
  );
}

type DirectoryViewProps = {
  query: string;
  setQuery: (value: string) => void;
  category:
    | ProductCategory
    | "All";
  setCategory: (
    value:
      | ProductCategory
      | "All",
  ) => void;
  showHelp: boolean;
  setShowHelp: (
    value: boolean,
  ) => void;
  visibleProducts: Product[];
  handleSelectProduct: (
    id: string,
  ) => void;
  selectedProduct:
    | Product
    | undefined;
};

function DirectoryView({
  query,
  setQuery,
  category,
  setCategory,
  showHelp,
  setShowHelp,
  visibleProducts,
  handleSelectProduct,
  selectedProduct,
}: DirectoryViewProps) {
  return (
    <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Shopping tools
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Product Directory
          </h1>
        </div>

        <button
          type="button"
          onClick={() =>
            setShowHelp(!showHelp)
          }
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          {showHelp
            ? "Hide help"
            : "Show help"}
        </button>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-[1fr_220px]">
        <div>
          <label
            htmlFor="product-query"
            className="text-sm font-medium text-slate-700"
          >
            Search products
          </label>

          <input
            id="product-query"
            value={query}
            onChange={(event) =>
              setQuery(
                event.target.value,
              )
            }
            placeholder="Try coffee grinder"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="product-category"
            className="text-sm font-medium text-slate-700"
          >
            Category
          </label>

          <select
            id="product-category"
            value={category}
            onChange={(event) =>
              setCategory(
                event.target.value as
                  | ProductCategory
                  | "All",
              )
            }
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            {categories.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {showHelp && (
        <aside className="mt-4 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
          Tip: combine a search term
          with a category to narrow the
          directory.
        </aside>
      )}

      <div className="mt-6 flex items-center justify-between">
        <p className="font-medium text-slate-800">
          {visibleProducts.length}{" "}
          matching products
        </p>
        <p className="text-sm text-slate-500">
          Showing first 8
        </p>
      </div>

      <div className="mt-4">
        <ProductList
          products={visibleProducts}
          onSelect={
            handleSelectProduct
          }
        />
      </div>

      <section className="mt-6 rounded-xl bg-slate-50 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Selected product
        </p>

        {selectedProduct ? (
          <>
            <h2 className="mt-2 font-semibold text-slate-900">
              {selectedProduct.name}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {selectedProduct.category}
              {" · ₹"}
              {selectedProduct.price.toLocaleString(
                "en-IN",
              )}
            </p>
          </>
        ) : (
          <p className="mt-2 text-sm text-slate-500">
            Select a product to see its
            summary.
          </p>
        )}
      </section>
    </main>
  );
}
