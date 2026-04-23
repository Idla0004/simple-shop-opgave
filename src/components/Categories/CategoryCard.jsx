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
      <div className="h-90">
        <Image
          className="rounded-full bg-dark-grey"
          src={imgsrc}
          width={250}
          height={250}
          alt={title}
        />
        <p className="mt-5 text-center text-lg font-semibold hover:font-bold">
          {title}
        </p>
      </div>
    </Link>
  );
}
