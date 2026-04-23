"use client";
import { useState } from "react";
import useAddedProducts from "@/store/addedtocart";

const ProductCardAddBtn = ({ product }) => {
  const { setAddedToCart } = useAddedProducts();
  const [buttonText, setButtonText] = useState(
    "ADD TO CART",
  );
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setAddedToCart(
      product.id,
      product.image,
      product.title,
      product.price,
    );
    setButtonText("ADDED");
    setIsAdded(true);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={isAdded}
        className={`bg-foreground py-1 px-2 text-light-font text-[20px] z-1 hover:bg-background hover:text-foreground cursor-pointer active:px-2.5 active-py-1.5 ${
          isAdded ? "bg-blue" : ""
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProductCardAddBtn;
