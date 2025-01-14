import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, Types } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

class Flavours {
  @Prop({ required: true })
  flavour: string;
}

class OrderItem {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Types.ObjectId;

  @Prop({ required: true })
  price: number;

  // selected flavour names
  @Prop({ type: [Flavours], default: [] })
  flavours: Flavours[];
}

@Schema()
export class Order {
  @Prop({ required: true })
  fname: string;

  @Prop()
  lname: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  mobile_number: string;

  // embed ordered items
  @Prop({ type: [OrderItem], required: true })
  items: OrderItem[];

  @Prop()
  special_requests: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
