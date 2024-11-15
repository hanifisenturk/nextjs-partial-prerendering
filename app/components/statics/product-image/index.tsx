import Image from "next/image";
export const ProductImage = () => {
  return (
    <Image
      src="/imagination.webp"
      alt="Product"
      width={500}
      height={500}
      className="object-cover w-[500px] h-[500px] hover:scale-105 transition-transform duration-300"
    />
  );
};
