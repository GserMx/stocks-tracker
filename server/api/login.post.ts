import User from "../db/models/user.model";
import bcrypt from "bcrypt";
import { IHttpResponse, IUser } from "../types";
import _ from "lodash";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  let res: IHttpResponse = {
    statusCode: 401,
    message: null,
    error: true,
  };

  try {
    const user = await User.findOne({ email: body.email }).exec();
    if (user) {
      const validPass = await user.comparePassword(body.password);
      if (validPass) {
        res.error = false;
        res.statusCode = 200;
        res.message = _.pick(user, ["email", "_id"]);
        return res;
      } else {
        return res;
      }
    } else {
      return res;
    }
  } catch (error) {}
});
