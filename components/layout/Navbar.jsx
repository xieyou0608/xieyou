import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const magic = router.pathname === "/magician";
  const changePage = () => {
    if (!magic) {
      router.push("/magician");
    } else {
      router.push("/");
    }
  };

  const [navColor, setNavColor] = useState("");
  const scrollListener = () => {
    if (window.scrollY > 10) {
      setNavColor("bg-slate-400");
    } else {
      setNavColor("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <nav
      className={`sticky top-0  py-3 pl-5 pr-16 z-50 flex justify-between items-center opacity-70 duration-500 ${navColor}`}
    >
      <header>
        <Image src="/assets/logo.png" alt="" width={50} height={50} />
      </header>
      <ul className="flex gap-x-6">
        <li>
          <Link href="#top" scroll={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#portfolios" scroll={false}>
            Portfolios
          </Link>
        </li>
        <li>
          <Link href="#skills" scroll={false}>
            Skills
          </Link>
        </li>
        <li>
          <button onClick={changePage}>{magic ? "Developer" : "Magic"}</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
