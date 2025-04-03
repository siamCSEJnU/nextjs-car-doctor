import Image from "next/image";
import React from "react";
import bannerImg from "@public/assets/images/checkout/checkout.png";
import Link from "next/link";

const ServiceDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/service/${params.id}`);
  const data = await res.json();
  return (
    <div>
      <section className="flex justify-center ">
        <figure className="relative">
          <Image
            src={bannerImg}
            // width={1137}
            // height={300}
            alt="Banner"
          ></Image>

          <div className="transparent-layer overlay-bg absolute  w-full h-full top-0">
            <div className="w-full h-full flex items-center ps-16 font-bold text-3xl">
              <div>
                <h1 className="text-white">{data.title}</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>

      <section className="w-9/12 mx-auto grid grid-cols-12 gap-4 my-6 ">
        <div className="col-span-9  space-y-4">
          <Image
            src={data.img}
            width={400}
            height={280}
            alt={data.title}
            className="w-full"
          ></Image>
          <h1 className="font-bold text-2xl">{data.title}</h1>
          <p>{data.description}</p>
        </div>
        <div className="col-span-3 space-y-4">
          <Link href={`/checkout/${data._id}`}>
            {" "}
            <button className="bg-orange-500 text-white font-bold text-center py-2 w-full cursor-pointer">
              Checkout
            </button>
          </Link>
          <p className="font-bold text-xl text-center">Price : ${data.price}</p>
        </div>
      </section>

      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default ServiceDetailsPage;
