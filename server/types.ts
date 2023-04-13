import { Document } from "mongoose";

export interface IStockPurchase {
  stock: string;
  price: number;
  qty: number;
  createdAt: Date;
}

export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword(candidate: string): Promise<boolean>;
}

export interface IHttpResponse {
  error: boolean;
  message: string | object | null;
  statusCode: number;
}
