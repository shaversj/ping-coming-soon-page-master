const SubmitButton = ({ buttonText }) => {
  return (
    <div>
      <button
        type={"submit"}
        className={
          " group-invalid:pointer-events-none group-invalid:opacity-100 min-w-[17.563rem] min-h-[2.5rem] bg-primary-blue rounded-full lg:min-h-[3.5rem] lg:min-w-[12.5rem] lg:ml-4 drop-shadow-lg"
        }
      >
        <h3 className={"text-white text-[12px] lg:text-[16px]"}>{buttonText}</h3>
      </button>
    </div>
  )
}

export default SubmitButton
