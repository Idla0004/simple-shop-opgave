import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

const Reviews = ({
  reviewerName,
  comment,
  rating,
}) => {
  return (
    <section className="bg-grey-bg min-w-80 max-w-87.5 h-40 flex flex-col justify-center items-center">
      <div className="flex mb-4 gap-1">
        {rating > 0 ? (
          <IoStar
            size={25}
            color="#99D2DF"
          ></IoStar>
        ) : (
          <IoStarOutline
            size={25}
            color="#99D2DF"
          ></IoStarOutline>
        )}
        {rating > 1 ? (
          <IoStar
            size={25}
            color="#99D2DF"
          ></IoStar>
        ) : (
          <IoStarOutline
            size={25}
            color="#99D2DF"
          ></IoStarOutline>
        )}
        {rating > 2 ? (
          <IoStar
            size={25}
            color="#99D2DF"
          ></IoStar>
        ) : (
          <IoStarOutline
            size={25}
            color="#99D2DF"
          ></IoStarOutline>
        )}
        {rating > 3 ? (
          <IoStar
            size={25}
            color="#99D2DF"
          ></IoStar>
        ) : (
          <IoStarOutline
            size={25}
            color="#99D2DF"
          ></IoStarOutline>
        )}
        {rating > 4 ? (
          <IoStar
            size={25}
            color="#99D2DF"
          ></IoStar>
        ) : (
          <IoStarOutline
            size={25}
            color="#99D2DF"
          ></IoStarOutline>
        )}
      </div>
      <div className="text-light-font">
        <h3>{reviewerName}</h3>
        <p className="mx-4">{comment}</p>
      </div>
    </section>
  );
};

export default Reviews;
