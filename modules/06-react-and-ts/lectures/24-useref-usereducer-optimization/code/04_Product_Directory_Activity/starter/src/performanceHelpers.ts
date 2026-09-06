import type {
  Product,
  ProductCategory,
} from "./productData";

export const FILTER_DELAY_MS = 110;
export const LIST_RENDER_DELAY_MS = 90;

function addTeachingDelay(milliseconds: number) {
  const start = performance.now();

  while (
    performance.now() - start <
    milliseconds
  ) {
    // Teaching only.
  }
}

export function slowFilterProducts(
  products: Product[],
  query: string,
  category:
    | ProductCategory
    | "All",
) {
  addTeachingDelay(FILTER_DELAY_MS);

  const normalizedQuery =
    query.trim().toLowerCase();

  return products.filter((product) => {
    const matchesQuery =
      !normalizedQuery ||
      product.name
        .toLowerCase()
        .includes(normalizedQuery);

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return (
      matchesQuery &&
      matchesCategory
    );
  });
}

export function addSlowProductListRender() {
  addTeachingDelay(
    LIST_RENDER_DELAY_MS,
  );
}
