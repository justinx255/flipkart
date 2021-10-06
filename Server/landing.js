import { products } from "./Constant/product.js";
import Product from './model/productSchema.js';
const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        // await Product.deleteMany();

        console.log('product Data imported Successfully')
    }
    catch (error) {
        console.log('Error', error.message);
    }
}


export default DefaultData;