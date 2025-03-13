import {motion} from 'framer-motion'

import img1 from '../../assets/featured_work/img1.jpg';
import img2 from '../../assets/featured_work/img2.jpg';
import img3 from '../../assets/featured_work/img3.jpg';
import img4 from '../../assets/featured_work/img4.jpg';

const navigations = [
    {
        title: 'All',
        link: '#all'
    },
    {
        title: 'Education',
        link: '#'
    },
    {
        title: 'Green Building',
        link: '#'
    },
    {
        title: 'Healthcare',
        link: '#'
    },
    {
        title: 'Interior Design',
        link: '#'
    },
    {
        title: 'Office',
        link: '#'
    },
]

const galary = [
    {
        image:img1,
        title:'building-1'
    },
    {
        image:img2,
        title:'building-1'
    },
    {
        image:img3,
        title:'building-1'
    },
    {
        image:img4,
        title:'building-1'
    },
    {
        image:img4,
        title:'building-1'
    },
    {
        image:img3,
        title:'building-1'
    },
    {
        image:img2,
        title:'building-1'
    },
    {
        image:img1,
        title:'building-1'
    },
];

export function FeaturedWorks() {
    return (
        <section className='flex flex-col items-center'>
            <h1 className='text-5xl font-bold text-center pb-10'>
                Featured Works
            </h1>

            <div className='flex flex-row flex-wrap gap-3 sm:gap-4 justify-center font-semibold'>
                {navigations.map((navigation, idx) =>
                    <a key={idx} href={navigation.link} className='hover:text-blue-500 transition-colors duration-150'>{navigation.title}</a>)}
            </div>

            <div className='mt-4 flex flex-row flex-wrap gap-3 justify-center'>
                {galary.map((I, idx) =>
                    <div style={{backgroundImage: `url(${I.image})`}}
                         key={idx}
                         className='w-[18rem] h-[15rem] bg-cover rounded-md drop-shadow-lg'>
                    </div>)}
            </div>
        </section>
    )
}