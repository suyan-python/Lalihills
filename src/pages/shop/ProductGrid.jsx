import { motion } from "framer-motion";
import ProductCard from "./ProductCard";


const ProductGrid = ({ products = [] }) =>
{
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-3">

            {products.map((product, index) => (

                <motion.div
                    key={product.id}
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: Math.min(index * 0.08, 0.4),
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <ProductCard product={product} />

                </motion.div>

            ))}

        </div>
    );
};

export default ProductGrid;