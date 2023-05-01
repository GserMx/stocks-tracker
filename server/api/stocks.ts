import StockPurchase from "~/server/db/models/stock-purchase.model";
import _ from "lodash";

export default defineEventHandler(async (event) => {
  console.log(event.context.auth);
  const purchases = await StockPurchase.find();
  return _.map(purchases, (purchase) => {
    return _.pick(purchase, ["_id", "stock", "price", "qty", "createdAt"]);
  });
});
