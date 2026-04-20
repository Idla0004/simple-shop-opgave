import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="bg-grey-bg min-w-80 max-w-87.5 h-40 flex flex-col justify-center items-center">
      <div className="flex">
        <FaStar
          size={25}
          color="#99D2DF"
        ></FaStar>
        <FaStar
          size={25}
          color="#99D2DF"
        ></FaStar>
        <FaStar
          size={25}
          color="#99D2DF"
        ></FaStar>
        <FaStar
          size={25}
          color="#99D2DF"
        ></FaStar>
        <FaStar
          size={25}
          color="#99D2DF"
        ></FaStar>
      </div>
      <div className="text-light-font">
        <h3>Name of reviewer</h3>
        <p>"Quote from reviewer!"</p>
      </div>
    </section>
  );
};

export default Reviews;
