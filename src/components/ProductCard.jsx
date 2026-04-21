import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import "../app/local.css";

const ProductCard = ({
  id,
  title,
  price,
  imgsrc,
}) => {
  return (
    <section className="max-w-97.5">
      <div className="relative">
        <div className="flex justify-between absolute top-0 right-0 left-0 m-2 items-center">
          <div className="text-(--color-light-font) text-[20px] px-2 py-0.5">
            <p className="out-of-stock bg-(--color-grey-bg)">
              out of stock
            </p>
          </div>
          <div className="rounded-full bg-(--color-background) p-2">
            <FaRegHeart
              size={30}
              color="#630850"
            ></FaRegHeart>
          </div>
        </div>
        <Image
          className="object-cover aspect-8/9"
          src={imgsrc}
          width={400}
          height={450}
          alt="Kitty cat"
        />
        <div className="flex justify-between absolute bottom-0 right-0 left-0">
          <div className="bg-(--color-pink) px-5 self-start text-(--color-light-font) text-[24px]">
            <p className="deal">DEAL</p>
          </div>
          <div>
            <p className="on-sale-price text-[20px] px-4 text-end text-pink">
              sale 234$
            </p>
            <p className="text-[20px] px-4 pb-4 text-end">
              price 1234$
            </p>
          </div>
        </div>
      </div>
      <div className="bg-(--color-grey-bg) py-4">
        <h2 className="font-(--font-p-mulish) text-[28px] mx-2 mb-3">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <button className="bg-(--color-foreground) py-1 px-2 text-(--color-light-font) text-[20px]">
            ADD TO CART
          </button>
          <button className="bg-(--color-background) py-1 px-2 text-(--color-dark-font) text-[20px]">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
