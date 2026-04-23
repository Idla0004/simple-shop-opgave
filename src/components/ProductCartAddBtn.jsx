"use client";
import useAddedProducts from "@/store/addedtocart";

const ProductCardAddBtn = ({ product }) => {
  const { setAddedToCart } = useAddedProducts();

  return (
    <div>
      <button
        onClick={() => {
          setAddedToCart(
            product.id,
            product.image,
            product.title,
            product.price,
          );
        }}
        className="bg-foreground py-1 px-2 text-light-font text-[20px]"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCardAddBtn;
