import SubmitButton from "./SubmitButton.jsx"
import InputEmail from "./InputEmail.jsx"

const Form = () => {
  return (
    <>
      <form noValidate={true} className={"group sm:grid sm:space-y-2 lg:space-y-0 lg:flex lg:items-center lg:justify-center"}>
        <InputEmail placeholderText={"Your email address.."} errorText={"Please enter a valid email address"} />
        <SubmitButton buttonText={"Notify Me"} />
      </form>
    </>
  )
}

export default Form
