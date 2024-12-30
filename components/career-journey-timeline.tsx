import { School, TrendingUp, Stethoscope } from 'lucide-react'

const timelineEvents = [
  {
    date: "August 2024 - Present",
    title: "Student Liaison",
    organization: "UW-Madison Chancellor's Entrepreneurship Initiative",
    achievement: "Gathering UW student entrepreneur feedback via interviews",
    icon: School,
  },
  {
    date: "June 2024 - August 2024",
    title: "Venture Capital Intern",
    organization: "Badger Fund of Funds",
    achievement: "Developed acquisition analysis framework for 45+ portfolio companies",
    icon: TrendingUp,
  },
  {
    date: "May 2024 - Present",
    title: "Startup Business Intern",
    organization: "Atrility Medical",
    achievements: [
      "Reduced order fulfillment time from 30 to 15 minutes",
      "Implemented ShipStation integration with inventory management",
      "Managed end-to-end inventory processes",
      "Developed EKG display data product proof-of-concept",
    ],
    icon: Stethoscope,
    featured: true,
  },
]

export function CareerJourneyTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Career Journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A timeline of my professional experiences and key achievements.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div key={event.title} className={`mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full lg:w-1/2 ${event.featured ? 'bg-indigo-50 p-6 rounded-lg' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-600 rounded-full p-2 mr-4">
                      <event.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                  <p className="mb-2 font-medium">{event.organization}</p>
                  {Array.isArray(event.achievements) ? (
                    <ul className="list-disc list-inside">
                      {event.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600">{achievement}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-600">{event.achievement}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

