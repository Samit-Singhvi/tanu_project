import {motion} from 'framer-motion'

import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'

export function WhyChooseUs() {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.1, duration: 0.5}}

            className='flex flex-col space-y-8'>
            <h1 className='text-5xl font-bold text-center pb-10'>
                Why Choose Us
            </h1>
            <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:justify-around items-center'>
                <img src={img1} alt='image-1' width={180} height={100} className='rounded-2xl ring-2 ring-offset-1'/>
                <p className='font-raleway-500 w-96 font-thin tracking-wide text-md sm:text-lg text-center sm:text-left'>
                    We combine extensive expertise in structural engineering with a proven track record of delivering
                    innovative and cost-effective solutions that prioritize safety and sustainability.
                </p>
            </div>
            <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:justify-around items-center'>
                <p className='font-raleway-500 w-96 font-thin tracking-wide text-md sm:text-lg text-center sm:text-right'>
                    And also ensuring the successful completion of your project. We love our clients requirement.
                </p>
                <img src={img2} alt='image-2' width={250} height={200} className='rounded-2xl ring-2 ring-offset-1'/>
            </div>
        </motion.section>
    )
}