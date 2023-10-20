import SubmitButton from "./SubmitButton.jsx"
import InputEmail from "./InputEmail.jsx"

const Form = () => {
  return (
    <>
      <form noValidate={true} className={"group sm:grid sm:space-y-2 lg:space-y-0 lg:flex lg:items-center lg:justify-center"}>
        <InputEmail
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
          required={false}
          placeholderText={"Your email address.."}
          errorText={"Please enter a valid email address"}
          type={"email"}
          name={"email"}
          id={"email"}
        />
        <SubmitButton buttonText={"Notify Me"} />
      </form>
    </>
  )
}

export default Form
