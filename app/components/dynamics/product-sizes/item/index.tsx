"use client";

interface Size {
  id: number;
  name: string;
  inStock: boolean;
}

interface ProductSizesClientProps {
  sizes: Size[];
}

export default function ProductSizesClient({ sizes }: ProductSizesClientProps) {
  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <button
          key={size.id}
          className={`px-4 py-2 border rounded ${
            size.inStock ? "border-black" : "border-gray-300 text-gray-300"
          }`}
          disabled={!size.inStock}
        >
          {size.name}
        </button>
      ))}
    </div>
  );
}
