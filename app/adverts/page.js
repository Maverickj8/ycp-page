'use client'

import { useState, useEffect } from 'react'
import { FiShoppingBag, FiMail, FiPhone, FiExternalLink } from 'react-icons/fi'

export default function Adverts() {
  const [adverts, setAdverts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    // Load adverts from localStorage (managed by admin)
    const savedAdverts = JSON.parse(localStorage.getItem('ycp_adverts') || '[]')
    
    // Fallback to default data if no admin data exists
    if (savedAdverts.length === 0) {
      const defaultAdverts = [
        {
          id: 1,
          title: 'Tech Solutions Ltd.',
          description: 'Professional software development and IT consulting services. Specializing in web and mobile applications.',
          contact: 'info@techsolutions.com',
          phone: '+234 (0) 123 456 7890',
          website: 'https://techsolutions.com',
          category: 'Technology',
          member: 'John Doe',
        },
        {
          id: 2,
          title: 'Elegant Events Planning',
          description: 'Full-service event planning and management. We make your special occasions unforgettable.',
          contact: 'contact@elegantevents.com',
          phone: '+234 (0) 123 456 7891',
          website: 'https://elegantevents.com',
          category: 'Events',
          member: 'Jane Smith',
        },
        {
          id: 3,
          title: 'Healthy Living Pharmacy',
          description: 'Your trusted neighborhood pharmacy. Quality healthcare products and professional consultation.',
          contact: 'info@healthylivingpharmacy.com',
          phone: '+234 (0) 123 456 7892',
          website: 'https://healthylivingpharmacy.com',
          category: 'Healthcare',
          member: 'Michael Johnson',
        },
        {
          id: 4,
          title: 'Creative Design Studio',
          description: 'Graphic design, branding, and marketing materials. Bringing your vision to life with creativity and professionalism.',
          contact: 'hello@creativedesign.com',
          phone: '+234 (0) 123 456 7893',
          website: 'https://creativedesign.com',
          category: 'Design',
          member: 'Sarah Williams',
        },
        {
          id: 5,
          title: 'FitLife Gym & Wellness',
          description: 'State-of-the-art fitness facility with experienced trainers. Your journey to a healthier lifestyle starts here.',
          contact: 'info@fitlifegym.com',
          phone: '+234 (0) 123 456 7894',
          website: 'https://fitlifegym.com',
          category: 'Fitness',
          member: 'David Brown',
        },
        {
          id: 6,
          title: 'Green Thumb Landscaping',
          description: 'Professional landscaping and garden design services. Creating beautiful outdoor spaces for homes and businesses.',
          contact: 'contact@greenthumb.com',
          phone: '+234 (0) 123 456 7895',
          website: 'https://greenthumb.com',
          category: 'Services',
          member: 'Emily Davis',
        },
      ]
      setAdverts(defaultAdverts)
    } else {
      setAdverts(savedAdverts)
    }
  }, [])

  const categories = ['All', ...new Set(adverts.map(ad => ad.category))]

  const filteredAdverts = selectedCategory === 'All' 
    ? adverts 
    : adverts.filter(ad => ad.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Member Adverts</h1>
          <p className="text-xl text-purple-100">
            Support our members' businesses and discover quality services
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-purple-50 border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100 border border-purple-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Adverts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdverts.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>No adverts available in this category.</p>
              </div>
            ) : (
              filteredAdverts.map((advert) => (
                <div
                  key={advert.id}
                  className="bg-white border border-purple-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                        {advert.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center mb-3">
                      <FiShoppingBag className="text-purple-600 mr-2" size={20} />
                      <h3 className="text-xl font-bold text-gray-900">
                        {advert.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 text-sm">
                      {advert.description}
                    </p>

                    {/* Member Info */}
                    <p className="text-xs text-gray-500 mb-4">
                      Member: {advert.member}
                    </p>

                    {/* Contact Information */}
                    <div className="space-y-2 pt-4 border-t border-purple-100">
                      <a
                        href={`mailto:${advert.contact}`}
                        className="flex items-center text-gray-700 hover:text-purple-600 transition-colors text-sm"
                      >
                        <FiMail className="mr-2" size={16} />
                        {advert.contact}
                      </a>
                      <a
                        href={`tel:${advert.phone}`}
                        className="flex items-center text-gray-700 hover:text-purple-600 transition-colors text-sm"
                      >
                        <FiPhone className="mr-2" size={16} />
                        {advert.phone}
                      </a>
                      {advert.website && (
                        <a
                          href={advert.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium"
                        >
                          <FiExternalLink className="mr-2" size={16} />
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-purple-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Advertising Your Business?
            </h2>
            <p className="text-gray-700 mb-6">
              YCP members can display their business advertisements here. This section promotes networking 
              and supports members' businesses within our community.
            </p>
            <a
              href="/join"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
