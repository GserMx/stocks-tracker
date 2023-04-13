import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "~~/server/types";

const SALT_WORK_FACTOR = 10;

const UserSchema: mongoose.Schema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.comparePassword = function (
  candidatePassword: string
): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return reject(err);
      return resolve(isMatch);
    });
  });
};

UserSchema.pre("save", function (next) {
  let user = this;
  const config = useRuntimeConfig();

  if (!this.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

export default mongoose.model<IUser>("User", UserSchema);
