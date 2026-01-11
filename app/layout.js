import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AdvertBanner from '@/components/AdvertBanner'

export const metadata = {
  title: 'YCP - Young Catholic Professionals',
  description: 'Young Catholic Professionals - Building a strong community of faith and professional excellence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdvertBanner />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
