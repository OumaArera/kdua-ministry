import React, { useState } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';

const ContactUs = ({ isOpen, onClose }) => {
    const contactInfo = {
        phones: ['+233 24 909 9740', '+1 (325) 703-0636', '+13257030636'],
        email: 'info@kduahministry.org',
        address: 'Gbawe, H/N 33, Tower School Dig\nGS-0047-3214 Accra, Ghana'
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-in fade-in-0 scale-in-95 duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 rounded-t-2xl">
                    <h2 className="text-2xl font-bold text-center">Contact Us</h2>
                </div>

                <div className="p-6 space-y-6">
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                            <Phone className="w-5 h-5 mr-2 text-teal-500" />
                            Phone Numbers
                        </h3>
                        {contactInfo.phones.map((phone, index) => (
                            <div key={index} className="ml-7">
                                <a
                                    href={`tel:${phone}`}
                                    className="text-gray-600 hover:text-teal-600 transition-colors duration-200 block"
                                >
                                    {phone}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-3">
                            <Mail className="w-5 h-5 mr-2 text-teal-500" />
                            Email
                        </h3>
                        <div className="ml-7">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
                            >
                                {contactInfo.email}
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-3">
                            <MapPin className="w-5 h-5 mr-2 text-teal-500" />
                            Address
                        </h3>
                        <div className="ml-7">
                            <p className="text-gray-600 whitespace-pre-line">
                                {contactInfo.address}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 pb-6">
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;