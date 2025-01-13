const DONUT_FLAVOURS = [
  'Glazed',
  'Chocolate Glazed',
  'Strawberry Frosted',
  'Chocolate Frosted',
  'Boston Kreme',
  'Bavarian Kreme',
  'Assorted',
];

const MUNCHKIN_FLAVOURS = [
  'Glazed',
  'Chocolate Glazed',
  'Bavarian Kreme',
  'Choc Butternut',
  'Strawberry',
  'Assorted',
];

export interface Product {
  id: string;
  name: string;
  price: number;
  flavours: string[];
}

export const PRODUCTS = [
  {
    id: '1',
    name: 'Single Donut',
    price: 4.0,
    flavours: DONUT_FLAVOURS,
  },
  {
    id: '2',
    name: '6 Donuts',
    price: 20.0,
    flavours: DONUT_FLAVOURS,
  },
  {
    id: '3',
    name: '12 Donuts',
    price: 32.0,
    flavours: DONUT_FLAVOURS,
  },
  {
    id: '4',
    name: '6 Munchkins',
    price: 5.9,
    flavours: MUNCHKIN_FLAVOURS,
  },
  {
    id: '5',
    name: '25 Munchkins',
    price: 20.0,
    flavours: MUNCHKIN_FLAVOURS,
  },
  {
    id: '6',
    name: '50 Munchkins',
    price: 32.0,
    flavours: MUNCHKIN_FLAVOURS,
  },
];
