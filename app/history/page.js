import { FiCalendar, FiUsers, FiTrendingUp } from 'react-icons/fi'

export default function History() {
  const timeline = [
    {
      year: '2020',
      title: 'Establishment',
      description: 'YCP was officially established, bringing together young Catholic professionals from various fields.',
    },
    {
      year: '2021',
      title: 'First Major Event',
      description: 'Organized our first annual retreat and networking conference with over 100 participants.',
    },
    {
      year: '2022',
      title: 'Community Expansion',
      description: 'Expanded to multiple cities and established local chapters across the region.',
    },
    {
      year: '2023',
      title: 'Charity Initiatives',
      description: 'Launched major charity programs and community service projects, impacting thousands of lives.',
    },
    {
      year: '2024',
      title: 'Digital Presence',
      description: 'Established strong online presence and digital platforms to reach more young professionals.',
    },
  ]

  const foundingMembers = [
    { name: 'John Doe', role: 'Founding President' },
    { name: 'Jane Smith', role: 'Founding Vice President' },
    { name: 'Michael Johnson', role: 'Founding Secretary' },
    { name: 'Sarah Williams', role: 'Founding Treasurer' },
    { name: 'David Brown', role: 'Founding Member' },
    { name: 'Emily Davis', role: 'Founding Member' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-xl text-purple-100">
            A journey of faith, growth, and service
          </p>
        </div>
      </div>

      {/* Establishment Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg shadow-md mb-12">
            <div className="flex items-center mb-4">
              <FiCalendar className="text-purple-600 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Establishment</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Young Catholic Professionals was established on <strong>January 15, 2020</strong>, 
              with a vision to create a supportive community for young Catholics navigating the 
              professional world while maintaining their faith and values.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Members */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FiUsers className="text-purple-600 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Pioneer Executives & Founding Members</h2>
            </div>
            <p className="text-gray-600 text-lg">
              The dedicated individuals who laid the foundation for our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundingMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-purple-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FiTrendingUp className="text-purple-600 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Growth Timeline</h2>
            </div>
            <p className="text-gray-600 text-lg">
              Key milestones in our journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-white rounded-lg shadow-md p-6 flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-purple-600 mr-4">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
