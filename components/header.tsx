'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Profile', href: '/profile' },
  { name: 'Why me?', href: '/experience' },
  { name: 'Why Figure?', href: '/skills' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4" aria-label="Global">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4">
            <span className="sr-only">Ben Lukszys</span>
            <span className="text-2xl font-bold">BL</span>
          </Link>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex">Contact Me</Button>
          <ModeToggle />
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      {mobileMenuOpen && (
        <div className="md:hidden" role="dialog" aria-modal="true">
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Ben Lukszys</span>
                <span className="text-2xl font-bold">BL</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Button className="w-full">Contact Me</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

