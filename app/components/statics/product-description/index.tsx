import { Suspense } from "react";

import { ProductPrice } from "../../dynamics/product-price";

interface ProductDescriptionProps {
  title: string;
  description: string;
  features: string[];
}

export const ProductDescription = ({
  title = "Louis Vuitton Imagination",
  description = "A fresh and powerful citrus scent that embodies elegant masculinity. Imagination opens with rare Chinese black tea and Italian citrus, followed by Tunisian neroli, Nigerian ginger, and Ambrox for a sophisticated and long-lasting fragrance experience.",
  features = [
    "Top notes: Chinese black tea, Italian citrus",
    "Heart notes: Tunisian neroli, Nigerian ginger",
    "Base notes: Guaiac wood, Black tea, Ambrox",
    "100ml Eau de Parfum",
    "Made in France",
    "Long-lasting fragrance",
  ],
}: Partial<ProductDescriptionProps>) => {
  return (
    <div className="max-w-2xl p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

      <div className="mb-6">
        <Suspense fallback={<div>loading price...</div>}>
          <ProductPrice />
        </Suspense>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Details</h2>
        <ul className="list-disc list-inside space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
