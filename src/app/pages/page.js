import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#E4DFD3] font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#E4DFD3] sm:items-start">
        <Image
          src="https://placecats.com/750/750"
          width={750}
          height={750}
        />
      </main>
    </div>
  );
}
