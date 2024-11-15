export const ProductPrice = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return <div className="text-2xl font-semibold text-gray-900">$265.00</div>;
};
