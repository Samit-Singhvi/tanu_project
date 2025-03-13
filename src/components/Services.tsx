import {ServiceLink} from "./ServiceLink";
import {motion} from 'framer-motion';

import house from '../assets/services/house.svg';
import office from '../assets/services/office.svg';
import market from '../assets/services/market.svg';
import mosque from '../assets/services/mosque.svg';
import road from '../assets/services/road.svg';
import bridge from '../assets/services/bridge.svg';

export function Services() {
    const services = [
        {icon: house, title: 'House Design'},
        {icon: office, title: 'Office Design'},
        {icon: market, title: 'Market Design'},
        {icon: mosque, title: 'Mosque Design'},
        {icon: road, title: 'Road Design'},
        {icon: bridge, title: 'Bridge Design'},
    ];

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.1, duration: 0.5}}
        >
            <h1 className='text-5xl font-bold text-center pb-10'>
                Our Services
            </h1>
            <div className='flex flex-wrap justify-evenly gap-2'>
                {services.map((service, idx) => (
                    <ServiceLink key={idx} icon={service.icon} name={service.title}/>
                ))}
            </div>
        </motion.section>
    )
}