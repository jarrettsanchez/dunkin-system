class FlavourDto {
  name: string;
}

export class ProductDto {
  name: string;
  price: number;
  flavours: FlavourDto[];
}
