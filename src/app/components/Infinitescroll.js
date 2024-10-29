import React from 'react';
import './horizontal.css'; // Import your CSS file

export default function Example() {
  const logos = [
    {
      alt: "Transistor",
      src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/1_f1ivmw.png",
    },
    {
      alt: "Reform",
      src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/4_ni2rgi.png",
    },
    {
      alt: "Tuple",
      src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/10_sd035r.png",
    },
    {
      alt: "SavvyCal",
      src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/11_aoyc35.png",
    },
    {
      alt: "Statamic",
      src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/5_xwnzij.png",
    },

    {
        alt: "Transistor",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/3_nzka2e.png",
      },
      {
        alt: "Reform",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183232/7_oe1hnw.png",
      },
      {
        alt: "Tuple",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183232/8_elrnjd.png",
      },
      {
        alt: "SavvyCal",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183232/6_dvx8pk.png",
      },
      {
        alt: "Statamic",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183232/2_azcksq.png",
      },
      {
        alt: "Statamic",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183235/9_pflryj.png",
      },

      {
        alt: "Transistor",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/1_f1ivmw.png",
      },
      {
        alt: "Reform",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/4_ni2rgi.png",
      },
      {
        alt: "Tuple",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/10_sd035r.png",
      },
      {
        alt: "SavvyCal",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/11_aoyc35.png",
      },
      {
        alt: "Statamic",
        src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/5_xwnzij.png",
      },
  
      {
          alt: "Transistor",
          src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183231/3_nzka2e.png",
        },
        {
          alt: "Reform",
          src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183232/7_oe1hnw.png",
        },
        {
          alt: "Tuple",
          src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183232/8_elrnjd.png",
        },
        {
          alt: "SavvyCal",
          src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183232/6_dvx8pk.png",
        },
        {
          alt: "Statamic",
          src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183232/2_azcksq.png",
        },
        {
          alt: "Statamic",
          src: "https://res.cloudinary.com/dm5f3hpbd/image/upload/v1730183235/9_pflryj.png",
        },
      
    
  ];

  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center">Brands We Service</h2>
        <h2 className="text-center text-lg/8   text-gray-900 pb-5 py-5">
        Our expert technicians are skilled at repairing all major TV brands, including
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                alt={logo.alt}
                src={logo.src}
                width={158}
                height={48}
                className="brand-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
