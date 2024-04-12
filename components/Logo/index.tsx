import Logo from "../../public/static/images/header/Linus.svg"
import Link from "next/link"
import Image from 'next/image';


const LogoHeader = () => {
  return (
    <Link href={"/"}>
      <div className="pb-0.5 max-md:hidden text-navy-blue-900">
        <Image unoptimized={true} src={Logo} alt="Linus" className="w-[97px] h-[97px] max-sm:w-[31px] max-sm:h-[31px]" />
      </div>
      <div className="md:hidden text-navy-blue-900">
        <Image unoptimized={true} src={Logo} alt="Linus" className="w-[51px] h-[51px] max-sm:w-[31px] max-sm:h-[31px]" />
      </div>
    </Link>
  )
}

const LogoFooter = () => {
  return (
    <Link href={"/"}>
      <div className="max-md:hidden text-navy-blue-900">
        <Image unoptimized={true} src={Logo} alt="Linus" width={51} height={51} />
      </div>
      <div className="md:hidden text-navy-blue-900">
        <Image unoptimized={true} src={Logo} alt="Linus" width={70} height={70} />
      </div>
    </Link>
  )
}

export { LogoHeader, LogoFooter }
