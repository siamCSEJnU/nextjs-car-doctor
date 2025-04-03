"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { data: session, status } = useSession();
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
      </>
    );
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navMenu()}
          </ul>
        </div>
        <Link href={"/"}>
          {" "}
          <Image
            src={"/assets/logo.svg"}
            height={107}
            width={87}
            alt="Car Doctor Logo"
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          {status == "authenticated" ? (
            <div className="flex items-center gap-4">
              {" "}
              <Image
                src={session?.user?.image}
                width={50}
                height={50}
                alt="profile image"
                className="rounded-full"
              ></Image>
              <li
                onClick={() => signOut()}
                className="cursor-pointer bg-orange-500 text-white p-2 rounded-lg font-bold"
              >
                Log Out
              </li>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {" "}
              <li>
                <Link
                  href={"/register"}
                  className="cursor-pointer bg-orange-500 text-white p-2 rounded-lg font-bold"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href={"/login"}
                  className="cursor-pointer bg-orange-500 text-white p-2 rounded-lg font-bold"
                >
                  Login
                </Link>
              </li>
            </div>
          )}
        </ul>
        <a className="btn btn-outline">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;
