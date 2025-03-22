"use client";

import type { Product } from "@/types/product";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-4 flex-grow">
        <Link href={`/${product.id}`} className="group">
          <div className="aspect-square relative mb-3 bg-gray-100 rounded-md overflow-hidden">
            {imageLoading && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
            )}

            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-contain p-4 group-hover:scale-105 transition-all duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </div>
          <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 mb-2">
            {formatPrice(product.price)}
          </p>
        </Link>
      </CardContent>
      <CardFooter className="pt-0 px-4 pb-4">
        <Button onClick={() => addToCart(product)} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
