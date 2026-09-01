import React from 'react'
import Hero from './Hero'
import LaliComingSoon from '../../components/LaliCommingSoon'
import FeaturedProduct from './FeaturedProduct'
import SummerOfferings from './SummerOfferings'
import AuthenticSection from './AuthenticSection'
import ContextSection from './ContextSection'
import Collab from './Collab'

const Landing = () =>
{
    return (
        <div>
            {/* <Hero /> */}
            <LaliComingSoon />

            <FeaturedProduct />

            <ContextSection />

            <AuthenticSection />

            <Collab />

            <SummerOfferings />
        </div>
    )
}

export default Landing