import type { Types } from "mongoose";
import type { IBase } from "../Base";

export interface IProduct extends IBase {
  name: string;
  originalPrice: number;
  currentPrice: number;
  description?: string;
  imageUrl?: string;
  userId: Types.ObjectId;
}
