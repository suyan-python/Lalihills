import ShopCategory from "./ShopCategory";
import { teaProducts } from "../../data/products";

const Tea = () =>
{
    return (
        <ShopCategory
            displayName="Leaves"
            displaySubtitle="Tea"

            collectionLabel="Tea Collection"
            originLabel="Nepal · Highlands"

            description="Whole-leaf teas from Nepal’s hills."

            seoTitle="Nepali Specialty Tea — Laali Hills"

            seoDescription="Discover whole-leaf teas from the hills of Nepal. Explore carefully selected Nepali teas shaped by altitude, climate, tradition and the land they come from."

            products={teaProducts}
        />
    );
};

export default Tea;