import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import { VscSend } from "react-icons/vsc";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    message: string;
}

export function ContactUsPage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: "",
    });

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page reload
        console.log("Form Submitted:", formData);
        alert("Thank you! We received your message.");
        
        // Reset form fields
        setFormData({ firstName: "", lastName: "", email: "", number: "", message: "" });
    };

    return (
        <section className="flex flex-col sm:flex-row justify-evenly items-center min-h-screen bg-violet-800 p-6">
            {/* Title Section */}
            <motion.p
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 70, duration: 0.6 }}
                className="text-3xl sm:text-5xl uppercase font-serif font-black text-gray-100 text-center sm:text-left"
            >
                Let's Deal With <br /> Your Issues
            </motion.p>

            {/* Contact Form */}
            <motion.form
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 70, duration: 0.6 }}
                onSubmit={handleSubmit}
                className="flex flex-col space-y-3 items-center bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                {/* Name Fields */}
                <div className="flex w-full space-x-2">
                    <input 
                        className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500" 
                        type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} 
                    />
                    <input 
                        className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500" 
                        type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} 
                    />
                </div>

                {/* Email & Phone */}
                <div className="flex w-full space-x-2">
                    <input 
                        className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500" 
                        type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} 
                    />
                    <input 
                        className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500" 
                        type="text" name="number" placeholder="Phone Number" required value={formData.number} onChange={handleChange} 
                    />
                </div>

                {/* Message */}
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500 h-32"
                    name="message"
                    placeholder="Please put a few words for us"
                    required
                    value={formData.message}
                    onChange={handleChange}
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full flex items-center justify-center bg-violet-600 text-white px-4 py-3 rounded-md hover:bg-violet-700 transition-all text-lg font-semibold"
                >
                    Send <VscSend className="ml-2" />
                </button>
            </motion.form>
        </section>
    );
}
