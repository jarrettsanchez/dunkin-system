import { Injectable } from '@nestjs/common';
import { Order } from './order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findById(id).exec();
  }

  async create(createOrderDto: CreateOrderDto) {
    return await this.orderModel.create(createOrderDto);
  }

  async update(id: string, createOrderDto: CreateOrderDto) {
    return await this.orderModel.findByIdAndUpdate(id, createOrderDto).exec();
  }

  async delete(id: string) {
    const deletedOrder = await this.orderModel.findByIdAndDelete(id).exec();
    return deletedOrder;
  }
}
