import react from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Image
          src="Youtube-logo.jpg"
          alt="Youtube logo"
          width={200}
          height={70}
        />
      </div>
      <div className="lists">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/watch">Watch</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
