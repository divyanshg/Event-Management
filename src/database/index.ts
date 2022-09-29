import mongoose from "mongoose";
import config from "../config";

export default async function () {
  await mongoose.connect(config.db.uri);

  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
}
