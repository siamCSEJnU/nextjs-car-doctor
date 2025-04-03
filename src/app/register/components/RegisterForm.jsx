"use client";
import registerUser from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import Link from "next/link";
import React from "react";
// import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, email, password });

    await registerUser({ name, email, password });
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-2">
      <div className="form-control w-full ">
        <label className="label w-full">
          <span className="label-text  font-bold">Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
        />
      </div>
      <div className="form-control w-full">
        <label className="label w-full">
          <span className="label-text  font-bold">Email</span>
        </label>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label w-full">
          <span className="label-text font-bold">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      <button className="w-full h-12 bg-orange-500 text-white font-bold ">
        Sign Up
      </button>
      <p className="text-center">Or Sign In with</p>
      <SocialLogin />
      <p className="text-center">
        Don't Have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
