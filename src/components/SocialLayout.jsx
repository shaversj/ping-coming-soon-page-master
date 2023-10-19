import { SocialIcon } from "react-social-icons"

const SocialLayout = () => {
  return (
    <>
      <div className={"pt-[7.75rem] lg:pt-[4.375rem] flex items-center justify-center space-x-2.5"}>
        <SocialIcon network="facebook" fgColor={"currentColor"} bgColor={"currentColor"} className={"social-custom-class"} style={{ height: 31, width: 31 }} />
        <SocialIcon network="twitter" fgColor={"currentColor"} bgColor={"currentColor"} className={"social-custom-class"} style={{ height: 31, width: 31 }} />
        <SocialIcon network="instagram" fgColor={"currentColor"} bgColor={"currentColor"} className={"social-custom-class"} style={{ height: 31, width: 31 }} />
      </div>
    </>
  )
}

export default SocialLayout
