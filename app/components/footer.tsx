"use client";

import { Mail, Phone, MapPin, Twitter, Instagram, } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3a2a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#F1DECD] italic font-light" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                Lumi
              </h2>
            <p className="text-sm text-gray-300">Skincare Products</p>
          </div>
          {/* Treatments */}
          <div>
            <h4 className="font-bold text-[#F1DECD] mb-4 uppercase tracking-wide">
              Treatments
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F1DECD] transition text-sm flex items-center gap-2">
                  <span>›</span> Skin Care
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F1DECD] transition text-sm flex items-center gap-2">
                  <span>›</span> Body Care
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F1DECD] transition text-sm flex items-center gap-2">
                  <span>›</span> Serums
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F1DECD] transition text-sm flex items-center gap-2">
                  <span>›</span> Masks
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#F1DECD] mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F1DECD] transition text-sm flex items-center gap-2">
                  <span>›</span> FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F1DECD] transition text-sm flex items-center gap-2">
                  <span>›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#F1DECD] transition text-sm flex items-center gap-2">
                  <span>›</span> Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-[#f1cdd0] mb-4 uppercase tracking-wide">
              Address
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#e7062c] flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-300">
                  123 Skincare Lane<br />
                  London, UK W1F 9DB
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-[#1c07d6] flex-shrink-0" />
                <p className="text-sm text-gray-300">+234 8061794206</p>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-[#0de756] flex-shrink-0" />
                <p className="text-sm text-gray-300">Fadhmusty@gmailcom</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 ">
              <Link
                href="#"
                className="text-gray-300 hover:text-[#F1DECD] transition"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#https://x.com/XyloStorm?s=20"
                className="text-gray-300 hover:text-[#F1DECD] transition"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#F1DECD] transition"
              >
                
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © Lumi Skincare {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
