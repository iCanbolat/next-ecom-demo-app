"use client";

import type { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { Star } from "lucide-react";
import { useState } from "react";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center relative">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <div className="relative aspect-square w-full max-w-md">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-contain transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              priority={true}
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center mt-2 mb-4">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating.rate)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              ({product.rating.rate}) {product.rating.count} reviews
            </span>
          </div>

          <div className="text-2xl font-bold mb-4">
            {formatPrice(product.price)}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div>
            <Button
              size="lg"
              onClick={() => addToCart(product)}
              className="w-full md:w-auto"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
