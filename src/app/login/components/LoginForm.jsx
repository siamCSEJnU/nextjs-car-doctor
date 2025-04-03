"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import SocialLogin from "./SocialLogin";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting...");
    try {
      const resposne = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (resposne.ok) {
        toast.success("Logged In successfully!");
        router.push("/");
        form.reset();
      } else {
        toast.error("Faild to Login");
      }
      // console.log({ email, password });
    } catch (error) {
      console.log(error);
      toast.error("Faild to Login");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
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
      <button className="w-full h-12 bg-orange-500 text-white font-bold cursor-pointer">
        Sign In
      </button>
      <p className="text-center">Or Sign In with</p>
      <SocialLogin />
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
