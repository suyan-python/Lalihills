import { useMemo, useState } from "react";
import ShopCategory from "./ShopCategory";
import { coffeeProducts } from "../../data/products";
import CoffeeFilters from "./CoffeeFilter";


const Coffee = () =>
{
    const [filters, setFilters] = useState({
        roastLevel: 5,
        caffeine: "all",
        profile: 1,
        process: [],
    });


    const filteredProducts = useMemo(() =>
    {
        return coffeeProducts.filter((product) =>
        {
            // Roast
            if (
                product.roastLevel > filters.roastLevel
            )
            {
                return false;
            }


            // Caffeine
            if (
                filters.caffeine !== "all" &&
                product.caffeine !== filters.caffeine
            )
            {
                return false;
            }


            // Profile
            if (
                product.profile < filters.profile
            )
            {
                return false;
            }


            // Process
            if (
                filters.process.length > 0 &&
                !filters.process.includes(product.process)
            )
            {
                return false;
            }


            return true;
        });

    }, [filters]);


    return (
        <ShopCategory
            title="Coffee"
            description="Exceptional coffee from the hills of Nepal, shaped by altitude, soil, climate and the hands that nurture it."
            collectionLabel="Coffee Collection"
            originLabel="Nepal · Highlands"
            products={filteredProducts}
            filters={filters}
            setFilters={setFilters}
            filterComponent={
                <CoffeeFilters
                    filters={filters}
                    setFilters={setFilters}
                />
            }
        />
    );
};


export default Coffee;