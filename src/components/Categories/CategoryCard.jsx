"use client";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  slug,
  title,
  imgsrc,
}) {
  return (
    <Link href={`/products?category=${slug}`}>
      <Image
        className="rounded-full bg-dark-grey"
        src={imgsrc}
        width={250}
        height={250}
        alt={title}
      />
      <p className="mt-5 text-center text-m font-bold">
        {title}
      </p>
    </Link>
  );
}
