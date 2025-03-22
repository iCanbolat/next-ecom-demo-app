"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
 import { useState } from "react";
import CartSheet from "./cart-sheet";

export default function Header() {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          E-Commerce
        </Link>

        <Button
          variant="outline"
          size="icon"
          className="relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="h-5 w-5" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </Button>

        <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
      </div>
    </header>
  );
}
