import {motion} from 'framer-motion';

import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaReddit} from 'react-icons/fa6'

import usaflag from '../assets/footer/USA flag.svg';
import ukflag from '../assets/footer/UK flag.svg';

import amex from '../assets/footer/amex.svg';
import apple_pay from '../assets/footer/apple-pay.svg';
import google_pay from '../assets/footer/google-pay.svg';
import master_card from '../assets/footer/master-card.svg';
import payoneer from '../assets/footer/payoneer.svg';
import paypal from '../assets/footer/paypal.svg';
import visa_card from '../assets/footer/visa-card.svg';


const security_services = [
    {
        text: 'Fire Safety',
        link: '#fire-safety',
    },
    {
        text: 'Electrical Safety',
        link: '#electrical-safety',
    },
    {
        text: 'Detailed Engineering',
        link: '#detailed-engineering',
    },
    {
        text: 'Assessment',
        link: '#assessment',
    },
    {
        text: 'Energy Efficiency Audit',
        link: '#energy-efficiency-audit',
    },
    {
        text: 'Architectural Support',
        link: '#architectural-support',
    },
    {
        text: 'Testing & Training',
        link: '#testing-and-training',
    },
    {
        text: 'Environment & Social Impact',
        link: '#environment-and-social-impact',
    },
    {
        text: 'Green Building',
        link: '#green-building',
    },
    {
        text: 'CAP Management',
        link: '#cap-management',
    },
    {
        text: 'Material Testing',
        link: '#material-testing',
    },
]

const others = [
    {
        text: 'Cookies',
        link: '#cookies',
    },
    {
        text: 'Contact Us',
        link: '#contact-us',
    },
    {
        text: 'Help & Support',
        link: '#help-and-support',
    },
    {
        text: 'Code of Conduct',
        link: '#code-of-conduct',
    },
    {
        text: 'Privacy Policy',
        link: '#privacy-policy',
    },
    {
        text: 'Return Policy',
        link: '#return-policy',
    },
    {
        text: 'Global Locations',
        link: '#global-locations',
    },
    {
        text: 'Global Suppliers',
        link: '#global-suppliers',
    },
    {
        text: 'About Us',
        link: '#about-us',
    },
]

const screen_width = screen.width;
const sm_screen = screen_width < 640;
const md_screen = screen_width >= 640 && screen_width <= 768;
const lg_screen = screen_width > 768;

export function Footer() {
    return (
        <section className='bg-gray-950 text-sky-100 px-3'>
            <div
                className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-between sm:justify-around sm:mb-3 text-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold text-yellow-300 font-merriweather-900 px-4 py-2 rounded'>
                        Offices of the company
                    </h1>
                    <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-10'>
                        <div>
                           
                            <ul className='text-center'>
                                <li> FIROJPUR, THESIL - RAJGARH, DIST. - ALWAR RAJASTHAN</li>
                                <li>mansamataconstruction@gmail.com</li>
                                <li>Contact</li>
                                <li> 9413559321</li>
                            </ul>
                        </div>
                       
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-bold text-yellow-300 font-merriweather-900 px-4 py-2 rounded'>
                        Security services
                    </h1>
                    <ul>
                        {
                            security_services.map((s, idx) =>
                                <li key={idx} className='hover:text-blue-500 transition-colors duration-150'>
                                    <a href={s.link}>
                                        {s.text}
                                    </a>
                                </li>)
                        }
                    </ul>
                </div>

                <div>
                    <h1 className='text-3xl font-bold text-yellow-300 font-merriweather-900 px-4 py-2 rounded'>
                        Others
                    </h1>
                    <ul>
                        {
                            others.map((o, idx) =>
                                <li key={idx} className='hover:text-blue-500 transition-colors duration-150'>
                                    <a href={o.link}>
                                        {o.text}
                                    </a>
                                </li>)
                        }
                    </ul>
                </div>
            </div>

          

           

            <ul id='#footer-social-links'
                className='flex flex-row justify-center items-center space-x-4 pt-2 pb-3 mt-5'>
                <span className='tooltip tooltip-left' data-tooltip='twitter'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#twitter'><FaTwitter className='text-sky-300 sm:text-3xl'/></a>
                    </li>
                </span>
                <span className='tooltip tooltip-top' data-tooltip='facebook'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#facebook'><FaFacebook className='text-blue-500 sm:text-3xl'/></a>
                    </li>
                </span>
                <span className='tooltip tooltip-top' data-tooltip='instagram'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#instagram'><FaInstagram className='text-rose-500 sm:text-3xl'/></a>
                    </li>
                </span>
                <span className='tooltip tooltip-top' data-tooltip='linkedin'>
                    <li className='hover:scale-125 transition-all duration-150'>
                        <a href='#linkedin'><FaLinkedin className='text-blue-700 sm:text-3xl'/></a>
                    </li>
                </span>
               
            </ul>
        </section>
    )
}