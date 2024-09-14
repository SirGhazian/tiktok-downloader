"use client";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="absolute top-0 w-full h-16 bg-primary items-center grid grid-cols-3 px-4 font-semibold">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-[#b6e2f8] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/stalk" className="hover:bg-black/5">
                Other Tools
              </a>
            </li>
            <li>
              <a href="/about" className="hover:bg-black/5">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <a href="/">
            <Image
              src="/img/mainLogo.png"
              width={500}
              height={90}
              priority
              alt="Main Logo"
              className="px-4 py-3 w-[9.5rem] h-full rounded-lg duration-300 hover:bg-black/10"
            />
          </a>{" "}
        </div>
      </div>
    </>
  );
}
