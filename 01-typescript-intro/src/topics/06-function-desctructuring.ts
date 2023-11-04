interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {tax, products} = options;

    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 300.0
}

const shoppingCart = [phone, tablet];
const tax = 0.16;

const [total, taxTotal] = taxCalculation({tax, products: shoppingCart});
console.log(`Total: ${total}`);
console.log(`Tax: ${taxTotal}`);


export {};