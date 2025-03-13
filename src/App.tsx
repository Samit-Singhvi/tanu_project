import {HomePage} from "./pages/HomePage";

import {Navbar} from "./components/Navbar";
import {CompanyPage} from "./pages/CompanyPage";
import {SecurityPage} from "./pages/SecurityPage";
import {NoticePage} from "./pages/NoticePage";
import {ContactUsPage} from "./pages/ContactUsPage";
import {LoginPage} from "./pages/LoginPage";
import {Routes, Route} from "react-router-dom";

import {ServicesPage} from "./pages/ServicesPage";

function App() {
    return (
        <div className='bg-gradient-to-r from-sky-100 to-sky-200 text-black'>
            <Navbar/>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='civil' element={<HomePage/>}/>
                <Route path='services' element={<ServicesPage/>}/>
                <Route path='company' element={<CompanyPage/>}/>
                <Route path='security' element={<SecurityPage/>}/>
               
                <Route path='contact-us' element={<ContactUsPage/>}/>
                
            </Routes>
        </div>
    )
}

export default App
