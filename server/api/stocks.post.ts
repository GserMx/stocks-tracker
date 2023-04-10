import { StockPurchaseSchema } from "../validation";
import StockPurchase from "../db/models/stock-purchase";

export default eventHandler(async (event) => {
  const body = await readBody(event);

  const { error, value } = StockPurchaseSchema.validate(body);
  //   console.log(error, value, body);
  if (error) {
    console.log(error.message);
    return {
      statusCode: 400,
      body: error.message,
    };
  }
  //   try {
  //     await StockPurchase.create(body);
  //     return { message: "success" };
  //   } catch (e) {
  //     return {
  //         statusCode: 400,
  //         body: JSON.stringify(e),
  //       };
  //   }
});
