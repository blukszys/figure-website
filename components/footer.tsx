import { Button } from './ui/button'
import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Ben Lukszys. All rights reserved.
          </p>
        </div>
        <div className="mt-8 md:order-3 md:mt-0">
          <Button asChild>
            <a href="/path-to-your-resume.pdf" download>Download Resume</a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

