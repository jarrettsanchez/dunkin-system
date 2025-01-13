import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, Types } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

class FlavourQuantity {
  @Prop({ required: true })
  flavour: string;

  @Prop({ required: true })
  quantity: number;
}

class OrderItem {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Types.ObjectId;

  @Prop({ required: true })
  price: number;

  // selected flavour name
  @Prop({ type: [FlavourQuantity], default: [] })
  flavours: FlavourQuantity[];
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

  @Prop({ default: 'Pending' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
