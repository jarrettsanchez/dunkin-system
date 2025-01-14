// DTO to handle data transfer between frontend and backend
import { Types } from 'mongoose';

// define Flavours DTO
class FlavoursDto {
  flavour: string;
}

// define OrderItem DTO
class CreateOrderItemDto {
  product: Types.ObjectId;
  price: number;
  flavours: FlavoursDto[];
}

// define Order DTO
export class CreateOrderDto {
  fname: string;
  lname?: string;
  email: string;
  mobile_number: string;
  items: CreateOrderItemDto[];
  special_requests?: string;
}
