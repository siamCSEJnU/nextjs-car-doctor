"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

const loginUser = async (payload) => {
  const { email, password } = payload;

  const usersCollection = dbConnect(collectionNamesObj.usersCollection);
  const user = await usersCollection.findOne({ email });

  if (!user) return null;
  const isPasswordOK = bcrypt.compare(user.password, password);
  if (!isPasswordOK) return null;

  return user;
};

export default loginUser;
