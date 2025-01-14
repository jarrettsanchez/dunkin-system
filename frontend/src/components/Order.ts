import { Types } from "mongoose";

export type Flavours = {
  flavour: string;
};

export type OrderItem = {
  product: Types.ObjectId;
  price: number;
  flavours: Flavours[];
};

export type Order = {
  _id?: string;
  fname: string;
  lname?: string;
  email: string;
  mobile_number: string;
  items: OrderItem[];
  special_requests?: string;
  createdAt?: Date;
};

export const DefaultEmptyOrder: Order = {
  _id: undefined,
  fname: "",
  lname: "",
  email: "",
  mobile_number: "",
  items: [],
  special_requests: "",
  createdAt: undefined,
};
