"use client";

import React from 'react';
import '../components/Hero.css';

export default function Hero() {
  return (
    <div className="relative isolate px-4 pt-10 sm:px-6 lg:px-8 hero-background">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-10 py-10 sm:py-32 lg:py-24">
        
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Expert LED/LCD TV Repair In Pune
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-200">
            Get your LED/LCD TV back in perfect working condition with our expert repair services in Pune.
          </p>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6">
            <a
              href="tel:8510922806"
              className="rounded-md bg-indigo-600 px-4 py-2 sm:px-3.5 sm:py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="enquiry-form-container bg-dark mt-8 sm:mt-10 lg:mt-0 lg:w-1/3 w-full max-w-md mx-auto lg:mx-0 px-4 sm:px-6 py-6 sm:py-8">
          <h3 className="form-heading text-xl font-semibold text-dark text-center mb-6">Get Free Estimate</h3>
          <form className="enquiry-form space-y-4" method="post" action="https://dmspl.club/thanku.php">
            <div className="form-group">
              <input
                type="text"
                className="form-control w-full px-3 py-2 rounded-md"
                placeholder="Your Name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control w-full px-3 py-2 rounded-md"
                name="mobile"
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder="Enter Mobile Number"
                required
              />
            </div>
            <input name="website" type="hidden" value="smartvsolutions.online" />
            <input name="loginID" type="hidden" value="" />
            <input name="companyName" type="hidden" value="smartvsolutions" />
            <div className="form-group w-full text-center">
              <button className="submit-btn w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-500" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
