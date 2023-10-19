const InputEmail = ({ placeholderText, errorText }) => {
  return (
    <label htmlFor={"email lg:relative"}>
      <input
        pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
        required={false}
        className={
          "pl-[2rem] lg:pl-[1.8rem] invalid:border-red-600 peer min-w-[17.563rem] min-h-[2.5rem] lg:min-h-[3.5rem] lg:min-w-[26.313rem] " +
          "rounded-full border-primary-blue/25 focus:outline-none border-[1px] placeholder:text-light-gray-placeholder placeholder:text-[12px] " +
          "lg:placeholder:text-[16px] placeholder:font-thin"
        }
        type={"email"}
        name={"email"}
        id={"email"}
        placeholder={placeholderText}
      />

      <span
        className="lg:absolute mt-2 hidden text-[10px] lg:text-[12px] text-center lg:text-left lg:ml-7 italic font-light
      text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block "
      >
        {errorText}
      </span>
    </label>
  )
}

export default InputEmail
