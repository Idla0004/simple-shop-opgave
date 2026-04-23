"use client";
import Image from "next/image";
import { useState } from "react";

const Images = ({
  imagesource0,
  imagesource1,
  imagesource2,
}) => {
  const [bigImg, setBigImg] =
    useState(imagesource0);

  const updateBigImgSrc = (newSrc) => {
    setBigImg(newSrc);
  };

  return (
    <div className="flex m-4 flex-col gap-4 place-items-center mx-8">
      <Image
        className="object-cover aspect-square"
        loading="eager"
        src={bigImg}
        width={700}
        height={750}
        alt="Product image 1"
      ></Image>
      <div className="flex gap-4">
        <Image
          onClick={() =>
            updateBigImgSrc(imagesource0)
          }
          className="object-cover max-w-[50%] aspect-6/7"
          src={imagesource0}
          width={400}
          height={450}
          alt="Product image 2"
        ></Image>
        <div className="flex flex-col gap-4">
          <Image
            onClick={() =>
              updateBigImgSrc(imagesource1)
            }
            className="object-cover aspect-5/4"
            src={imagesource1}
            width={400}
            height={450}
            alt="Product image 3"
          ></Image>
          <Image
            onClick={() =>
              updateBigImgSrc(imagesource2)
            }
            className="object-cover aspect-5/4"
            src={imagesource2}
            width={400}
            height={450}
            alt="Product image 4"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Images;
