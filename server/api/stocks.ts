import StockPurchase from "@/server/db/models/stock-purchase"

export default defineEventHandler(async (event) => { 
    return await StockPurchase.find();
})