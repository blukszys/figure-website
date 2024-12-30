import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: "Startup Business Intern: Logistics & Quality",
    company: "Atrility Medical",
    type: "Part-Time",
    location: "Madison, Wisconsin",
    period: "Oct 2022 - Aug 2024",
    description: "Owned supply chain operations for startup with $2.5 million in funds raised"
  },
  {
    title: "Student Liaison",
    company: "UW-Madison Chancellor's Entrepreneurship Initiative",
    type: "Part-Time",
    location: "Madison, Wisconsin",
    period: "Aug 2024 - Present",
    description: "Founded a student entrepreneurship community at the University of Wisconsin with >150 members"
  },
  {
    title: "Venture Capital Analyst Intern",
    company: "Badger Fund of Funds",
    type: "Contract",
    location: "Madison, Wisconsin",
    period: "June 2024 - Sep 2024",
    description: "Developed portfolio company exit preparation process to narrow ~15k potential acquirers down to top 20"
  }
]

export function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <p className="mt-4 text-gray-600">
            Proven track record in data science and business consulting, delivering impactful insights and results across industries.
          </p>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-8">
              <div className="relative">
                <div className="absolute -left-10 mt-1 h-4 w-4 rounded-full bg-gray-200" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span>{exp.company} • {exp.type}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

