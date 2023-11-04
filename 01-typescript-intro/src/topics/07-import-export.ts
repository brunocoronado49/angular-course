import { Product, taxCalculation } from "./06-function-desctructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 200
    }
];

const tax: number = 0.16;

const [total, totalTax] = taxCalculation({tax, products: shoppingCart});
console.log({total});
console.log({totalTax});

