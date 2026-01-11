import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About YCP</h1>
          <p className="text-xl text-purple-100">
            Young Catholic Professionals - Building a strong community of faith and excellence
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Young Catholic Professionals (YCP) is a vibrant community of young Catholic men and women 
              dedicated to living out their faith in their professional lives. We provide a platform for 
              spiritual growth, professional development, and meaningful service to our communities.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our organization brings together individuals who seek to integrate their Catholic values 
              with their career aspirations, creating a supportive network that encourages both personal 
              and professional excellence while serving others with compassion and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FiTarget className="text-purple-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To foster a community of young Catholic professionals who are committed to living out 
                their faith authentically in the workplace, supporting one another in spiritual growth, 
                and making a positive impact in society through service and leadership.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <FiEye className="text-pink-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a leading organization that empowers young Catholic professionals to excel in their 
                careers while maintaining strong moral principles, contributing to the betterment of society, 
                and inspiring others through their faith-driven actions.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full mr-4">
                <FiHeart className="text-purple-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 className="font-semibold text-purple-600 mb-2">Faith</h3>
                <p className="text-gray-600 text-sm">
                  Deepening our relationship with God through prayer, sacraments, and spiritual formation.
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold text-pink-600 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Striving for excellence in our professional endeavors while maintaining integrity and ethical standards.
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold text-purple-600 mb-2">Service</h3>
                <p className="text-gray-600 text-sm">
                  Serving our communities with compassion, humility, and a commitment to social justice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
