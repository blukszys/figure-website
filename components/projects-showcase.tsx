import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const projects = [
  {
    title: "Inventory Management Optimization",
    image: "/placeholder.svg?height=200&width=400",
    tools: ["ShipStation", "SOS Inventory"],
    impact: "50% reduction in order fulfillment time",
    description: "Researched, implemented, and integrated new shipping software with existing inventory management system to streamline order fulfillment process.",
  },
  {
    title: "EKG Display Data Product",
    image: "/placeholder.svg?height=200&width=400",
    tools: ["Data visualization tools"],
    impact: "Created proof of concept for new product line",
    description: "Developed visualization tool for EKG waveform data to enable efficient labeling of abnormal heart rhythms.",
  },
  {
    title: "VC Acquisition Analysis Framework",
    image: "/placeholder.svg?height=200&width=400",
    tools: ["Excel", "PowerPoint"],
    impact: "Presented findings to fund managers",
    description: "Created generalizable process for identifying potential acquirers for portfolio companies.",
  },
]

export function ProjectsShowcase() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Showcasing My Work
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A selection of projects that demonstrate my skills and impact.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="aspect-video object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.impact}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

