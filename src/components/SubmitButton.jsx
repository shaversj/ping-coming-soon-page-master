const SubmitButton = ({ buttonText }) => {
  return (
    <div>
      <button
        type={"submit"}
        className={
          " group-invalid:pointer-events-none group-invalid:opacity-100 min-w-[17.563rem] min-h-[2.5rem] bg-primary-blue rounded-full lg:min-h-[3.5rem] lg:min-w-[12.5rem] lg:ml-4 drop-shadow-lg"
        }
      >
        <span className={"text-white text-[12px] lg:text-[16px]"}>{buttonText}</span>
      </button>
    </div>
  )
}

export default SubmitButton
