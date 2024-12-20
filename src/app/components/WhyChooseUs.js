import { ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, CheckCircleIcon, TruckIcon, MapPinIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Affordable Rates',
    description:
      'Visiting charges only ₹199, which includes a detailed diagnosis for transparent, cost-effective service.',
    icon: CurrencyDollarIcon, // Affordable Rates
  },
  {
    name: 'Quick Response',
    description:
      'A technician will be at your location within 60 minutes of booking to address your TV repair needs promptly.',
    icon: ClockIcon, // Quick Response
  },
  {
    name: 'Hassle-Free Pickup & Drop Service',
    description:
      'We offer convenient transportation for your TV, making the repair process entirely stress-free for you.',
    icon: TruckIcon, // Hassle-Free Pickup & Drop Service
  },
  {
    name: 'Experienced Technicians',
    description:
      'Our team has experience with all major TV brands and models, delivering reliable and quality repairs each time.',
    icon: ShieldCheckIcon, // Experienced Technicians
  },
  {
    name: 'City-Wide Service Coverage',
    description:
      'We serve all areas of Pune, so dependable TV repair service is just a call away, wherever you are in the city.',
    icon: MapPinIcon, // City-Wide Service Coverage
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            We are providing best LCD/LED Repair Service
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <IconComponent aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
