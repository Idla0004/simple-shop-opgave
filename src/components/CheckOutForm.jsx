const Form = () => {
  return (
    <form className="flex flex-row flex-wrap gap-10 py-5 px-8 place-items-center justify-center mt-8">
      <input
        type="text"
        className="text-light-grey px-1 py-2 outline-none border-b border-light-grey w-70 uppercase"
        placeholder="Name"
      />
      <input
        type="text"
        className="text-light-grey px-1 py-2 outline-none border-b border-light-grey w-70 uppercase"
        placeholder="Adress"
      />
      <input
        type="text"
        className="text-light-grey px-1 py-2 outline-none border-b border-light-grey w-70 uppercase"
        placeholder="Phone Number"
      />
      <input
        type="text"
        className="text-light-grey px-1 py-2 outline-none border-b border-light-grey w-70 uppercase"
        placeholder="E-mail"
      />
      <div className="flex flex-col gap-5 items-center ">
        <button
          type="submit"
          className="lowercase bg-(--blue) text-dark-pink rounded-md py-1 px-2 text-[20px] w-50"
        >
          Sign up
        </button>
        <button
          type="submit"
          className="lowercase text-blue bg-(--dark-pink) rounded-md py-1 px-2 text-[20px] w-50"
        >
          Check out
        </button>
      </div>
    </form>
  );
};

export default Form;
