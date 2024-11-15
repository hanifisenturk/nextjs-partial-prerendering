import ProductSizesClient from "./item";

async function getSizes() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    { id: 1, name: "XS", inStock: true },
    { id: 2, name: "S", inStock: true },
    { id: 3, name: "M", inStock: false },
    { id: 4, name: "L", inStock: true },
    { id: 5, name: "XL", inStock: true },
  ];
}

export const ProductSizes = async () => {
  const sizes = await getSizes();

  return <ProductSizesClient sizes={sizes} />;
};
