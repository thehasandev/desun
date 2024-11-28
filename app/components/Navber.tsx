import Image from "next/image";
import Container from "./Container";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../../public/images/logo.png";
export default function Navber() {
  return (
    <Container>
      <nav className="grid grid-cols-6 gap-4 justify-between items-center">
        <div>
          <Image src={Logo} width={200} height={200} alt="logo" />
        </div>
        <ul className="col-span-4 flex gap-4 text-base text-black/80">
          <li>Home</li>
          <li>About</li>
          <li>Desheng</li>
          <li>Product Center</li>
          <li>Photovoltaic Power Generation</li>
          <li>News</li>
          <li>Service Support</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex gap-2 items-center text-black/80">
          <IoSearchOutline size={18} />
          <span>|</span>
          <p className="text-base font-normal">English</p>
        </div>
      </nav>
    </Container>
  );
}
