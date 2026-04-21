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
        <div className="px-10 pt-10 object-cover">
          <div className="border-b flex justify-between w-125 pb-4">
            <h2 className="row-start-1">
              Shipping Fee
            </h2>
            <p className="row-start-2">12.56,-</p>
          </div>
          <div className="flex justify-between max-w-125 pt-6">
            <h2 className="uppercase font-medium col-start-1">
              Total
            </h2>
            <p className="col-start-2">
              1234.56,-
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
