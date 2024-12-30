import { Box, BarChart, Lightbulb, TrendingUp } from 'lucide-react'

const valueProps = [
  {
    title: "Inventory Management Expert",
    description: "Managed end-to-end inventory processes at a high-growth medical device startup",
    icon: Box,
  },
  {
    title: "Data Analysis Champion",
    description: "Strong data analysis skills applied to supply chain optimization and process improvement",
    icon: BarChart,
  },
  {
    title: "Innovation Mindset",
    description: "Proven track record of identifying problems and implementing creative solutions",
    icon: Lightbulb,
  },
  {
    title: "Fast Learner & Contributor",
    description: "Motivated to make immediate impact while growing with the team",
    icon: TrendingUp,
  },
]

export function WhyFigureSection() {
  return (
    <section id="why-figure" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Figure</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bringing Value to Figure AI
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            My experiences and skills align perfectly with Figure AI's mission in revolutionizing supply chain management.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {valueProps.map((prop) => (
              <div key={prop.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <prop.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {prop.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{prop.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

