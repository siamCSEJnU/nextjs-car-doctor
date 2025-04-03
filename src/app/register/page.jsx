import React from "react";
import RegisterForm from "./components/RegisterForm";
import loginImg from "@public/assets/images/login/login.svg";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <>
      {" "}
      <h1 className="text-3xl font-bold text-center my-8">Register</h1>
      <section className="w-4/5 mx-auto grid grid-cols-12">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <Image
            className="hidden md:block"
            src={loginImg}
            // width={460}
            // height={500}
            alt={"Authentication Image"}
          />
        </div>

        {/* Right Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <RegisterForm />
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
