const stats = [
    { id: 1, name: 'TVs Repaired Every Year', value: '12,000+' },
    { id: 2, name: 'Satisfied Customers', value: '98%' },
    { id: 3, name: 'Years of Experience', value: '15+ years' },
  ]

  export default function Counter() {
    return (
      <div className="bg-indigo-600 py-12 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base text-white leading-7 ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  