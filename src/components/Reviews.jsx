import { FaStar } from "react-icons/fa";

const Reviews = ({ reviewerName, comment }) => {
  return (
    <section className="bg-grey-bg min-w-80 max-w-87.5 h-40 flex flex-col justify-center items-center">
      <div className="flex mb-4 gap-1">
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
        <h3>{reviewerName}</h3>
        <p className="mx-4">{comment}</p>
      </div>
    </section>
  );
};

export default Reviews;
