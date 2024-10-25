import React from 'react';
import '../components/Hero.css'; // Update the path as per your project structure

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 hero-background">
      <div className="mx-auto max-w-xl py-16 sm:py-48 lg:py-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
         
        </div>
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-white">
            Expert LED/LCD TV Repair In Pune
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-white">
          Get your LED/LCD TV back in perfect working condition with our expert repair services in Pune.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="tel:8510922806"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
}
