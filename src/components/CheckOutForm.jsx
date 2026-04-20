const Form = () => {
  return (
    <form className="grid grid-rows-2 grid-cols-2 gap-10 py-5 px-8">
      <input
        type="text"
        name="query"
        className="text-[#D0CFCB] px-3 py-2 outline-none border-b border-[#D0CFCB]"
        placeholder="Name"
      />
      <input
        type="text"
        name="query"
        className="text-[#D0CFCB] px-3 py-2 outline-none border-b border-[#D0CFCB]"
        placeholder="Adress"
      />
      <input
        type="text"
        name="query"
        className="text-[#D0CFCB] px-3 py-2 outline-none border-b border-[#D0CFCB]"
        placeholder="Phone Number"
      />
      <input
        type="text"
        name="query"
        className="text-[#D0CFCB] px-3 py-2 outline-none border-b border-[#D0CFCB]"
        placeholder="E-mail"
      />
      <div className="flex flex-col gap-5 items-center ">
        <button
          type="submit"
          className="lowercase bg-[#99D2DF] text-[#630850] rounded-md py-1 px-2 text-[20px] w-50"
        >
          Sign up
        </button>
        <button
          type="submit"
          className="lowercase text-[#99D2DF] bg-[#630850] rounded-md py-1 px-2 text-[20px] w-50"
        >
          Check out
        </button>
      </div>
    </form>
  );
};

export default Form;
