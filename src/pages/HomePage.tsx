import {Hero} from "../components/Hero";
import {Services} from "../components/Services";
import {FeaturedWorks} from "../components/FeaturedWorks/FeaturedWorks";
// import {FeaturedDesigns} from "../components/FeaturedDesigns/FeaturedDesigns";
import {LastMessage} from "../components/LastMessage";
import {WhyChooseUs} from "../components/WhyChooseUs";
import {Footer} from "../components/Footer";

export function HomePage() {
    return (
        <div className='flex flex-col space-y-20'>
            <Hero/>
            <Services/>
            <FeaturedWorks/>
            {/* <FeaturedDesigns/> */}
            <WhyChooseUs/>
            <LastMessage/>
            <Footer/>
        </div>
    )
}