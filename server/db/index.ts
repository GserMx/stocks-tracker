import mongoose from "mongoose";

export default async (_nitroApp) => {
  const config = useRuntimeConfig();
  mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log(`Connected to MONGO`))
    .catch((e) => console.log(e));
};
