import { config } from "dotenv";
config();

import { MongoClient } from "mongodb";

let client = new MongoClient(process.env.MONGO_STRING!);

(async () => {
  try {
    await client.connect();
    console.log("\nConnected to the Database");
    console.log("======================================");
  } catch (e) {
    console.error(e);
  }
})();

export let db = client.db("persona");
export default client;
