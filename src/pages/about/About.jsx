import React from 'react'
import AboutHero from './AboutHero'
import AboutStory from './AboutStory'
import AboutImage from './AboutImage'

import aboutHero from "../../assets/about/back.jpg"

import gallery01 from '../../assets/about/img1.jpg'
import gallery02 from '../../assets/about/img2.webp'
import gallery03 from '../../assets/about/img3.jpeg'
import gallery04 from '../../assets/about/img4.jpeg'
import gallery05 from '../../assets/about/img5.jpg'

const About = () =>
{
    const galleryImages = [
        gallery01,
        gallery02,
        gallery03,
        gallery04,
        gallery05,
    ];

    return (
        <div>
            <AboutHero image={aboutHero} />
            <AboutStory />
            <AboutImage images={galleryImages} />
        </div>
    )
}

export default About