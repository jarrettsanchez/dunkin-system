import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

class Flavour {
  @Prop({ required: true })
  name: string;
}

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [Flavour], default: [] })
  flavours: Flavour[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
