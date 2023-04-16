import { UserSchema } from "@/server/validation";
import User from "~~/server/db/models/user.model";
import { e } from "ofetch/dist/error-04138797";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { error, value } = UserSchema.validate(body);
  // //   console.log(error, value, body);
  if (error) {
    const regex = /"/gm;
    return {
      statusCode: 400,
      error: error.message.replace(regex, ""),
    };
  }
  try {
    const user = await User.findOne({ email: body.email });
    if (user)
      return { error: true, message: "user already exists", statusCode: 200 };
    await User.create(body);
    return { message: "success" };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
});
