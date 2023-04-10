import Joi from "joi";

export const StockPurchaseSchema = Joi.object({
    stock: Joi.string().required(),
    price: Joi.number().required(),
    qty: Joi.number().required(),
    date: Joi.date().required()
})