import ShopCategory from "./ShopCategory";
import { teaProducts } from "../../data/products";

const Tea = () =>
{
    return (
        <ShopCategory
            title="Tea"
            description="Discover carefully selected teas from Nepal's hills, where landscape, climate and tradition come together in every leaf."
            products={teaProducts}
        />
    );
};

export default Tea;