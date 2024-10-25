/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/



const callouts = [
  {
    name: 'Backlight Repair/Replacement',
    description: 'We fix or replace faulty backlights for clear and bright screen displays.',
    imageSrc: 'https://res.cloudinary.com/dm5f3hpbd/image/upload/v1729830777/1_ort9d3.png', // Using imported image
    imageAlt: 'Backlight repair for clear screen displays.',
    href: 'tel:8510922806',
  },
  {
    name: 'Horizontal/Vertical Lines on Screen',
    description: 'Addressing issues with lines or distortions for a crisp viewing experience.',
    imageSrc: 'https://res.cloudinary.com/dm5f3hpbd/image/upload/v1729829042/plbtoeiipzqohjtkrcl2.png', // Using imported image
    imageAlt: 'Fixing vertical lines on screen.',
    href: 'tel:8510922806',
  },
  {
    name: 'Screen Display Issues',
    description: 'Solving all types of screen problems to ensure optimal picture quality.',
    imageSrc: 'https://res.cloudinary.com/dm5f3hpbd/image/upload/v1729829042/rpk0mpcdm80nvkasjjty.png', // Using imported image
    imageAlt: 'Solving screen display issues.',
    href: 'tel:8510922806',
  },
  {
    name: 'Sound Problems',
    description: 'Fixing audio issues to ensure your TV delivers clear and balanced sound.',
    imageSrc: 'https://res.cloudinary.com/dm5f3hpbd/image/upload/v1729829041/pvz2j7jkuzvjbcnq72zd.png', // Using imported image
    imageAlt: 'Fixing audio issues',
    href: 'tel:8510922806',
  },
  {
    name: 'Power Failures',
    description: 'Repairing TV power issues to restore uninterrupted viewing sessions.',
    imageSrc: 'https://res.cloudinary.com/dm5f3hpbd/image/upload/v1729829041/zgtdai9yqyp7yofvff7m.png', // Using imported image
    imageAlt: 'Fixing TV power issues.',
    href: 'tel:8510922806',
  },
  {
    name: 'Port Malfunctions',
    description: 'Fixing broken or non-functional ports to keep your external devices connected.',
    imageSrc: 'https://res.cloudinary.com/dm5f3hpbd/image/upload/v1729829041/r8s4jybpfgh33fkuiuth.jpg', // Using imported image
    imageAlt: 'Fixing TV port malfunctions.',
    href: 'tel:8510922806',
  },
];


export default function Example() {
  return (
    <div className="bg-gray-100" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-6">Our Services</h2>

          <div className=" space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6  lg:gap-y-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              >
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg sm:aspect-h-12 sm:aspect-w-16 lg:aspect-h-12 lg:aspect-w-16 group-hover:opacity-75 sm:h-30">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mt-6 text-xl font-semibold text-black">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base text-gray-500 mb-5">{callout.description}</p>
                  <div className="mt-5 mb-5">
                    <a
                      href="tel:8510922806"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

