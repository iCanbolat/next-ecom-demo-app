import ProductDetail from "@/components/product-detail";
import { Product } from "@/types/product";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch(() => []);

  return products.map((product: Product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} | E-Commerce Store`,
    description: product.description.substring(0, 160),
    openGraph: {
      images: [{ url: product.image }],
    },
  };
}

async function getProduct(id: string) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
