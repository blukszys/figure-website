import { Button } from './ui/button'
import { Mail, Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="py-10 text-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">Ben Lukszys</h1>
        <p className="text-xl text-gray-600">The Ultimate Self-Starter</p>
        <div className="mx-auto max-w-3xl mt-8 mb-10">
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="w-full h-full object-cover rounded-lg"
              controls
              poster="/video-placeholder.jpg"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          <Button className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Send Email
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}

