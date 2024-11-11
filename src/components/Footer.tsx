import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">

                {/* Logo and Site Name */}
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-semibold">Gym-Ping</h1>
                    <p className="text-sm">Find!-Fit!-Thrive!</p>
                </div>

                {/* Navigation Links */}
                <div className='flex flex-col items-center'>
                    <div className='flex space-x-4'>
                        <a href="/" className="text-sm hover:underline">Home</a>
                        <a href="/about" className="text-sm hover:underline">About Us</a>
                        <a href="/support" className="text-sm hover:underline">Support</a>
                        <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>
                    </div>
                    <div className="flex space-x-8">
                        <a href="/spotter" className="text-sm hover:underline">Spotter</a>
                        <a href="/locator" className="text-sm hover:underline">Locator</a>
                        <a href="/dashboard" className="text-sm hover:underline">Dashboard</a>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 text-gray-400 text-sm">
                © {new Date().getFullYear()} Gym-Ping. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
