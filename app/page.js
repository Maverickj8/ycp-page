import HeroCarousel from '@/components/HeroCarousel'
import { FiUsers, FiHeart, FiBook, FiCalendar } from 'react-icons/fi'

export default function Home() {
  const features = [
    {
      icon: <FiUsers size={32} />,
      title: 'Community',
      description: 'Connect with like-minded professionals who share your faith and values.',
    },
    {
      icon: <FiHeart size={32} />,
      title: 'Service',
      description: 'Engage in meaningful charity work and community service projects.',
    },
    {
      icon: <FiBook size={32} />,
      title: 'Faith',
      description: 'Strengthen your faith through regular meetings, retreats, and spiritual guidance.',
    },
    {
      icon: <FiCalendar size={32} />,
      title: 'Events',
      description: 'Participate in workshops, conferences, and networking events.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to YCP
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A community dedicated to nurturing young Catholic professionals in their faith, careers, and service to others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Become part of a vibrant community of young Catholic professionals
          </p>
          <a
            href="/join"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
