import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default Navbar;
