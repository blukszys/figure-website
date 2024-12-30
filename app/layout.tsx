import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ben Lukszys | Supply Chain Innovation',
  description: 'UW-Madison junior with 1.5yrs experience in Madison startup supply chain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

