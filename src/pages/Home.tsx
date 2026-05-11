import WhoWeAre from '../sections/WhoWeAre'
import Hero from '../sections/Hero'
import WhatWeDo from '../sections/WhatWeDo'
import Carousel from '../components/ui/Carousel'
import CTA from '../sections/CTA'

const Home = () => {
    return (
        <>
            <Hero />
            <WhoWeAre />
            <Carousel />
            <WhatWeDo />
            <CTA />
        </>
    )
}

export default Home
