import ProductList from "@/components/product-list";

export const metadata = {
  title: "E-Commerce Store | Products",
  description:
    "Browse our collection of high-quality products at great prices.",
};

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <ProductList />
    </div>
  );
}
