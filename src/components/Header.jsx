import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-scroll";
import profileImg from "../assets/wandi.png";
import React from "react";
//link yang dibaca berdasarkan id pada setiap halaman yang di tuju, sedangkan untuk name itu untuk judul nya
export default function Header() {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
    { name: "Arcticle", link: "arcticle" },
  ];
  let [open, setOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const className = scroll > 50 ? "navbar navbar-scrolled" : "navbar";

  return (
    <header className="font-patua">
      <nav className={className} aria-label="Global">
        <div className="font-bold text-xl tracking-wide cursor-pointer flex items-center gap-1 ml-6">
          {/* logo section */}
          <div className="font-bold tracking-wide cursor-pointer flex items-center gap-1 mt-3">
            <img
              src={profileImg}
              alt=""
              className="md:w-12 md:h-12 w-10 h-10"
            />
            <span className="text-primary hover:text-secondary md:ml-3 ml-2 pt-2">
              <h6 className="text-2xl text-black">JUNSWHANDY</h6>
              <p className="italic text-sm text-red-500 font-kalam">
                INFORMATICS ENGGINERRING
              </p>
            </span>
          </div>

          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-black"
          >
            {open ? <XMarkIcon /> : <Bars3Icon />}
          </div>
          {/* linke items */}
          <ul
            className={`md:flex md:items-center items-center md:pb-0 absolute md:static  md:z-auto z-50 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0  bg-white sm:bg-transparent  ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                className="md:ml-14 md:my-0 font-semibold text-xl border-b-2 md:border-b-0 text-right px-7 md:px-4 pb-4 md:pb-0 cursor-pointer pt-5"
                key={link.name}
              >
                <Link
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  offset={-100}
                  className="text-light hover:text-putih duration-500 uppercase"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* button */}
        </div>
      </nav>
    </header>
  );
}
