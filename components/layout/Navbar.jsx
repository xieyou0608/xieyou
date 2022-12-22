import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu } from "react-icons/hi";
import { RiArrowGoBackFill } from "react-icons/ri";

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

  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav((prev) => !prev);
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
    <>
      {/* PC display */}
      <nav
        className={`fixed top-0 w-full py-3 pl-5 pr-16 z-50 hidden md:flex justify-between items-center opacity-70 duration-500 ${navColor}`}
      >
        <header>
          <Image
            src="/assets/logo.png"
            alt=""
            width={50}
            height={50}
            className="rounded-full opacity-0"
          />
        </header>
        <ul className="flex gap-x-6">
          <li>
            <Link href="#top" scroll={false}>
              Home
            </Link>
          </li>
          {!magic && (
            <>
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
            </>
          )}
          {magic && (
            <>
              <li>
                <Link href="#timeline" scroll={false}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#magicSkills" scroll={false}>
                  Service
                </Link>
              </li>
              <li>
                <Link href="#stagePhotos" scroll={false}>
                  Photos
                </Link>
              </li>
            </>
          )}
          <li>
            <button onClick={changePage} className="text-pink-900 font-bold">
              {magic ? "Developer" : "Magic"}
            </button>
          </li>
        </ul>
      </nav>
      {/* mobile display */}
      <nav
        id="mobileNavbar"
        className={`fixed top-0 w-full flex flex-col z-50 md:hidden opacity-90`}
      >
        <div
          className={`text-right py-3 px-5 z-40 w-full h-full duration-500 bg-slate-400 `}
        >
          <button onClick={toggleNav}>
            <HiMenu className="text-black" />
          </button>
        </div>
        <ul
          className={`flex flex-col pb-2 z-30 text-center bg-slate-400 relative duration-500 ${
            openNav ? "bottom-0" : "bottom-48"
          } `}
        >
          <li>
            <Link href="#top" scroll={false} className="block p-1">
              Home
            </Link>
          </li>
          {!magic && (
            <>
              <li>
                <Link href="#portfolios" scroll={false} className="block p-1">
                  Portfolios
                </Link>
              </li>
              <li>
                <Link href="#skills" scroll={false} className="block p-1">
                  Skills
                </Link>
              </li>
            </>
          )}
          {magic && (
            <>
              <li>
                <Link href="#timeline" scroll={false} className="block p-1">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#magicSkills" scroll={false} className="block p-1">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#stagePhotos" scroll={false} className="block p-1">
                  Photos
                </Link>
              </li>
            </>
          )}
          <li>
            <button
              onClick={changePage}
              className="w-full h-full p-1 text-pink-900 font-bold"
            >
              {magic ? "Developer" : "Magic"}
            </button>
          </li>

          <li>
            <button
              onClick={toggleNav}
              className="w-full h-full p-1 flex justify-center"
            >
              <RiArrowGoBackFill />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
