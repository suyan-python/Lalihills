import React from 'react'
import Hero from './Hero'
import LaliComingSoon from '../../components/LaliCommingSoon'
import FeaturedProduct from './FeaturedProduct'
import SummerOfferings from './SummerOfferings'

const Landing = () =>
{
    return (
        <div>
            {/* <Hero /> */}
            <LaliComingSoon />
            <FeaturedProduct />
            <SummerOfferings />
        </div>
    )
}

export default Landing