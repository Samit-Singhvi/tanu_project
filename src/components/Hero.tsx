import {motion} from 'framer-motion';

export function Hero() {
    return (
        <section id="#hero"
                 className="bg-[url('assets/img-3.jpg')] bg-cover bg-blend-normal min-h-screen sm:ps-10 flex flex-col justify-center items-center sm:items-start space-y-10">
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}

                className='bg-slate-300 backdrop-blur-2xl text-black shadow-md shadow-white-500/40 self-center text-center sm:text-left sm:self-start sm:w-1/2 p-5 mt-5'>
                <span className='text-3xl sm:text-4xl font-semibold'>Welcome!</span><br/>
                <span className='text-md sm:text-lg text-black font-semibold tracking-wider'>We are here to build your dream home.</span><br/>
            </motion.p>
            <motion.p
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.5, duration: 0.5}}

                className='bg-white/30 backdrop-blur-sm backdrop-opacity-50 p-5 rounded text-5xl sm:text-6xl text-center sm:text-left font-serif text-red-600 font-semibold sm:font-bold'>
                MANSAMATA CONSTRUCTION  <br/> AND SERVICES PRIVATE LIMITED
            </motion.p>
            <motion.p
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 1, duration: 0.5}}

                className='text-center sm:text-left font-semibold'
            >
                Experience and sustainability - these are the keys to success of Byron<br/>for the realisation of
                large
                international construction projects.
            </motion.p>
            <motion.p
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 1.5, duration: 0.4}}
                className='sm:pb-2'
            >
                {/* <a
                    type="button"
                    href='#get-started'
                    className="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-5 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    <p className='text-2xl'>Get started</p>
                    <svg className="w-5 h-auto" width="17" height="16" viewBox="0 0 17 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
                              fill="currentColor"/>
                    </svg>
                </a> */}
            </motion.p>
        </section>
    )
}