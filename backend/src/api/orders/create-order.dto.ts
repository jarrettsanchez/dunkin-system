// DTO to handle data transfer between frontend and backend
import { Types } from 'mongoose';

// define FlavourQuantity DTO
class FlavourQuantityDto {
  flavour: string;
  quantity: number;
}

// define OrderItem DTO
class CreateOrderItemDto {
  product: Types.ObjectId; // MongoDB ObjectId for product
  price: number;
  flavours: FlavourQuantityDto[];
}

// define Order DTO
export class CreateOrderDto {
  fname: string;
  lname?: string;
  email: string;
  mobile_number: string;
  items: CreateOrderItemDto[];
  status?: string;
}
