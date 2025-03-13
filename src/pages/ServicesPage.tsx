import {Services} from "../components/Services";
import {Footer} from "../components/Footer";

export function ServicesPage() {
    return (
        <section className='pt-[4rem] flex flex-col space-y-10'>
            <Services/>
            <Footer/>
        </section>
    )
}