import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './create-order.dto';
import { error } from 'console';

@Controller('api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // get all orders
  @Get('/')
  async findAll() {
    try {
      return this.orderService.findAll();
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No orders found.',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  // get one order by id
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    try {
      return this.orderService.findOne(id);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No order found.',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  // create an order
  @Post('/')
  async addOrder(@Body() createOrderDto: CreateOrderDto) {
    try {
      await this.orderService.create(createOrderDto);
      return { message: 'Order added successfully.' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to add this order.',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  // update an order by id
  @Put('/:id')
  async updateOrder(
    @Param('id') id: string,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    try {
      await this.orderService.update(id, createOrderDto);
      return { message: 'Order updated successfully.' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to update this order.',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  // delete an order by id
  @Delete('/:id')
  async deleteOrder(@Param('id') id: string) {
    try {
      return await await this.orderService.delete(id);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No such order.',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }
}
