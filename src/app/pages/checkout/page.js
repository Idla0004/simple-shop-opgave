import Form from "@/components/CheckOutForm";
import CategoriesScroll from "@/components/CategoriesCheckOut";

export default function CheckOut() {
  return (
    <main className="grid grid-cols-2 h-screen w-screen">
      <section className=" bg-(--dark-grey) px-4 pt-8 grid col-1 col-end-1 relative top-0">
        <div className="grid">
          <div className="relative top-40">
            <h2 className="pl-20 font-bold text-(--primary-light) text-2xl">
              Contact info
            </h2>
            <Form />
          </div>
        </div>
      </section>
      <section className="px-4 pt-8 grid col-2 col-end-2 h-fit min-w-full relative top-30 overflow-hidden">
        <CategoriesScroll />
        <div className="flex flex-col flex-wrap px-10 pt-10 object-cover">
          <div className="border-b flex justify-between w-125 pb-4 border-dark-grey">
            <h2 className="row-start-1 text-dark-grey">
              Shipping Fee
            </h2>
            <p className="row-start-2 text-dark-grey">
              12.56,-
            </p>
          </div>
          <div className="flex justify-between max-w-125 pt-6">
            <h2 className="uppercase font-medium col-start-1 text-dark-grey">
              Total
            </h2>
            <p className="col-start-2 text-dark-grey">
              1234.56,-
            </p>
          </div>
          <div className="pl-76">
            <button
              type="submit"
              className="lowercase text-pink bg-blue rounded-md py-1 px-2 text-[20px] w-50 mt-8"
            >
              Check out
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
