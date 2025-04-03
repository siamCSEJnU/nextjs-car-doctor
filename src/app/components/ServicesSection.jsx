// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";
import React from "react";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Link from "next/link";

const ServicesSection = async () => {
  // const res = await fetch("/services.json", { cache: "no-store" });
  // const data = await res.json();
  const serviceCllection = await dbConnect(
    collectionNamesObj.servicesCollection
  );
  const data = await serviceCllection.find({}).toArray();

  return (
    <div className="grid grid-cols-12 gap-4 w-4/5 mx-auto">
      {data.map((item) => {
        return (
          <div
            className=" col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border"
            key={item._id}
          >
            <figure className="w-full h-3/4 flex justify-center items-center">
              {" "}
              <Image
                className="w-full h-full object-fit"
                src={item.img}
                width={314}
                height={208}
                alt="Service Image"
              ></Image>
            </figure>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="font-bold text-xl text-orange-500">
                  Price : ${item.price}
                </p>
              </div>
              <div>
                <Link
                  href={`/services/${item._id}`}
                  className="text-orange-500 w-5"
                >
                  <FaArrowRight />
                </Link>

                {/* <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-orange-500 w-5"
                /> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
