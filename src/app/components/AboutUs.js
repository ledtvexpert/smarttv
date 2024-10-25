import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, TvIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function AboutUs() {
  return (
    
    <div className="overflow-hidden bg-white py-24 sm:py-32" id='about'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome To  Smart TV Solution</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">

              At Smart TV Solution, we specialize in providing expert repair services for all types of LED and LCD televisions. Our experienced technicians are dedicated to diagnosing and resolving a wide range of TV issues, from display malfunctions to sound and power problems. We take pride in delivering quick, efficient, and affordable solutions, ensuring your TV is up and running smoothly. Customer satisfaction and transparency are at the core of our services.
              </p>
            <div className='container'>
            <div className="grid grid-rows-3 grid-flow-col gap-4 ml-3">
      <div className="row-span-3 flex items-center">
        <TvIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
        <span className="ml-2">Experienced Technicians</span>
      </div>
      <div className="row-span-3 flex items-center">
        <TvIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
        <span className="ml-2">Fast & Reliable Service</span>
      </div>
      <div>
      
      </div>
    </div>
            </div>
            <div className='mt-5'>
      <a
              href="tel:8510922806"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
            </div>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://res.cloudinary.com/dm5f3hpbd/image/upload/v1729833182/about-min_1_xxkt60.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
    
  )
}
