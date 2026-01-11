import Link from 'next/link'
import { FiMail, FiPhone } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">YCP</h3>
            <p className="text-purple-100 text-sm">
              Young Catholic Professionals - Building a strong community of faith and professional excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-purple-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-purple-100 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-purple-100 hover:text-white transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-purple-100 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-purple-100">
              <div className="flex items-center space-x-2">
                <FiMail size={16} />
                <span>info@ycp.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone size={16} />
                <span>+234 (0) XXX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400 mt-8 pt-8 text-center text-sm text-purple-100">
          <p>&copy; {new Date().getFullYear()} Young Catholic Professionals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
