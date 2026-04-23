"use client";
import useAddedProducts from "@/store/addedtocart";
import { useState } from "react";

const AddToCartBtn = ({ product }) => {
  const { setAddedToCart } = useAddedProducts();
  const [buttonText, setButtonText] = useState(
    "add to cart",
  );
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setAddedToCart(
      product.id,
      product.images[0],
      product.title,
      product.price,
    );
    setButtonText("ADDED");
    setIsAdded(true);
  };
  return (
    <div className="flex justify-center max-w-130 my-8">
      <button
        onClick={handleClick}
        disabled={isAdded}
        className={`cursor-pointer bg-pink text-blue font-bold font-poppins w-60 h-12 rounded-lg ${isAdded ? "bg-blue-500" : ""}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AddToCartBtn;
