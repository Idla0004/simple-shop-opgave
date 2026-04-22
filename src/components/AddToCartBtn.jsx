"use client";
import useAddedProducts from "@/store/addedtocart";

const AddToCartBtn = ({ id }) => {
  const { addedtocart, setAddedToCart } =
    useAddedProducts();
  /*   if (
    addedtocart.some(
      (addedtocart) => addedtocart.id === id,
    )
  ) */
  return (
    <div className="flex justify-center max-w-130 my-8">
      <button
        onClick={() => {
          setAddedToCart(id);
        }}
        className="cursor-pointer bg-pink text-blue font-bold font-poppins w-60 h-12 rounded-lg"
      >
        add to cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
