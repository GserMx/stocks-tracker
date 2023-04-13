import Joi from "joi";

export const StockPurchaseSchema = Joi.object({
  stock: Joi.string().required(),
  price: Joi.number().required(),
  qty: Joi.number().required(),
});

export const UserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});