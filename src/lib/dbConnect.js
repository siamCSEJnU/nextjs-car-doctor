import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

export const collectionNamesObj = {
  servicesCollection: "test_services",
  usersCollection: "test_users",
  bookingCollection: "test_booking",
};

const dbConnect = (collectionName) => {
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
};

export default dbConnect;
