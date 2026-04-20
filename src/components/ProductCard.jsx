import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

const ProductCard = () => {
  return (
    <section className="max-w-97.5">
      <div className="">
        <div className="flex justify-between">
          <div className="bg-">out of stock</div>
          <FaRegHeart></FaRegHeart>
        </div>
        <Image
          src="https://placecats.com/750/750"
          width={390}
          height={450}
          alt="Kitty cat"
        ></Image>
      </div>
      <div>
        <h2 className="font-mulish font-normal">
          Product name
        </h2>
        <div>
          <button>add to cart</button>
          <button>buy now</button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
