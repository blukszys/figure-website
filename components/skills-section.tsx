import { Code2, Database, LineChart, BrainCircuit } from 'lucide-react'

const skills = [
  {
    category: "Programming",
    icon: Code2,
    items: ["Python", "R", "SQL", "JavaScript", "Java"]
  },
  {
    category: "Data Science",
    icon: BrainCircuit,
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Statistical Analysis"]
  },
  {
    category: "Data Engineering",
    icon: Database,
    items: ["ETL", "Data Warehousing", "Big Data", "Cloud Computing", "Data Modeling"]
  },
  {
    category: "Business Analytics",
    icon: LineChart,
    items: ["Business Intelligence", "Data Visualization", "Strategic Planning", "Risk Analysis"]
  }
]

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="mt-4 text-gray-600">
            Comprehensive expertise across data science, engineering, and business domains.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index} className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <skill.icon className="h-6 w-6 text-gray-700" />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

