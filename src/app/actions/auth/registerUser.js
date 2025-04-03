"use server";
import bcrypt from "bcryptjs";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

const registerUser = async (payload) => {
  const usersCollection = dbConnect(collectionNamesObj.usersCollection);

  //validation
  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await usersCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await usersCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();
    return result;
  }
  return null;
};

export default registerUser;
