import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50/60 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 data-aos="fade-up" className="forum text-4xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
                        Feel Free To <span className='text-[var(--dark)]'>Contact Us</span>
                    </h1>
                    <p data-aos="fade-up" className="text-md md:text-lg text-gray-600 md:w-lg font-medium mx-auto leading-relaxed mt-4">
                        We'd love to hear from you. Send us a message!
                    </p>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-18">
                        {/* Contact Info Card - Overlapping Design */}
                        <div className="lg:col-span-1 relative z-10">
                            <div  data-aos="fade-right" className="bg-(--dark) shadow-2xl p-8 text-white h-full">
                                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-white text-(--orange) bg-opacity-20 p-3 rounded-lg">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Address</h3>
                                            <p className="text-sm text-green-100">Plot No.15, Road,
                                                Keshav Industrial Park,
                                                Parab Vavdi, BHESAN, Gujarat 362020</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-white text-(--orange) bg-opacity-20 p-3 rounded-lg">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <p className="text-sm text-green-100">+91 98985 39948</p>
                                            <p className="text-sm text-green-100">+91 94291 58455</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-white text-(--orange) bg-opacity-20 p-3 rounded-lg">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p className="text-sm text-green-100">info@earth.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        {/* <div className="bg-white text-(--orange) bg-opacity-20 p-3 rounded-lg">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Working Hours</h3>
                                            <p className="text-sm text-green-100">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                            <p className="text-sm text-green-100">Sat - Sun: Closed</p>
                                        </div> */}
                                    </div>
                                </div>

                                <div data-aos="fade-up" className="mt-30">
                                    <div className="flex space-x-4">
                                        <div className="w-10 h-10 bg-white text-(--orange) bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition">
                                            <span className="text-sm font-bold">f</span>
                                        </div>
                                        <div className="w-10 h-10 bg-white text-(--orange) bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition">
                                            <span className="text-sm font-bold">in</span>
                                        </div>
                                        <div className="w-10 h-10 bg-white text-(--orange) bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition">
                                            <span className="text-sm font-bold">tw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div data-aos="fade-left" className="lg:col-span-2 bg-white shadow-xl p-8 lg:p-12 lg:-ml-8">
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--orange) focus:border-transparent outline-none transition"
                                            placeholder="Mahadev Agro Product"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--orange) focus:border-transparent outline-none transition"
                                            placeholder="earth@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--orange) focus:border-transparent outline-none transition"
                                            placeholder="+1 234 567 8900"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--orange) focus:border-transparent outline-none transition"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--orange) focus:border-transparent outline-none transition resize-none"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <div>
                                    <div data-aos="fade-up">
                                        <button  onClick={handleSubmit} className="outfit cursor-pointer cta-button relative px-12 tracking-wider py-4 bg-[var(--orange)] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ">
                                            <span className="relative z-10"> Send Message</span>
                                            <span className="button-fill"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-12 py-12">
                    <div className="text-center mb-12">
                        <h1 data-aos="fade-up" className="forum text-4xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)] mb-3">Find <span className='text-(--green)'>Us!</span></h1>
                        <p data-aos="fade-up" className="text-gray-600">We'd love to hear from you. Send us a message!</p>
                    </div>
                    <iframe data-aos="fade-up"
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d114096.1234627051!2d70.63399575042529!3d21.56862284250468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39580da48567dbed%3A0x1ca0cc0b71268887!2sPLOT%20NO.15%2C%20ROAD%2C%20KESHAV%20INDUSTRIAL%20PARK%2C%20Parab%20Vavdi%2C%20BHESAN%2C%20Gujarat%20362020!3m2!1d21.5686431!2d70.71639739999999!5e1!3m2!1sen!2sin!4v1762411739120!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>

                </div>
            </div>
        </div>
    );
}