import Image from "next/image";
import Container from "./Container";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../../public/images/logo_white.png";
export default function Navber() {
  return (
    <Container>
      <nav className="fixed w-full grid grid-cols-12 gap-4 items-center text-white">
        <div className="col-span-2">
          <Image src={Logo} width={200} height={200} alt="logo" />
        </div>
        <ul className="flex col-span-8 justify-between text-base">
          <li>Home</li>
          <li>About</li>
          <li>Desheng</li>
          <li>Product Center</li>
          <li>Photovoltaic Power Generation</li>
          <li>News</li>
          <li>Service Support</li>
          <li>Contact Us</li>
        </ul>
        <div className="col-span-2 flex items-center  gap-5">
          <IoSearchOutline size={18} />
          <span>|</span>
          <p className="text-base font-normal">English</p>
        </div>
      </nav>
    </Container>
  );
}
