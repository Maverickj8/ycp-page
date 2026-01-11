import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'

export default function News() {
  // This would typically come from a database or CMS
  const announcements = [
    {
      id: 1,
      title: 'Monthly Mass Schedule - December 2024',
      date: '2024-12-01',
      category: 'Mass Schedule',
      content: 'Join us for our monthly mass every first Sunday of the month at 10:00 AM. Location: St. Mary\'s Cathedral.',
      featured: true,
    },
    {
      id: 2,
      title: 'Charity Project: Food Drive for Christmas',
      date: '2024-11-25',
      category: 'Charity',
      content: 'We\'re organizing a food drive to support families in need this Christmas season. Donations can be dropped off at our office.',
      featured: true,
    },
    {
      id: 3,
      title: 'Annual Retreat Registration Open',
      date: '2024-11-20',
      category: 'Events',
      content: 'Registration for our annual spiritual retreat is now open. Early bird registration closes December 15th.',
      featured: false,
    },
    {
      id: 4,
      title: 'Networking Event: Professional Development Workshop',
      date: '2024-11-15',
      category: 'Events',
      content: 'Join us for an interactive workshop on professional development and career growth. Limited slots available.',
      featured: false,
    },
    {
      id: 5,
      title: 'Weekly Meeting Update',
      date: '2024-11-10',
      category: 'Meetings',
      content: 'Our weekly meetings now take place every Thursday at 7:00 PM. New members are welcome to attend.',
      featured: false,
    },
    {
      id: 6,
      title: 'Community Service: School Renovation Project',
      date: '2024-11-05',
      category: 'Charity',
      content: 'We\'re looking for volunteers to help with our school renovation project. All skills are welcome!',
      featured: false,
    },
  ]

  const featuredAnnouncements = announcements.filter(item => item.featured)
  const regularAnnouncements = announcements.filter(item => !item.featured)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Announcements</h1>
          <p className="text-xl text-purple-100">
            Stay updated with the latest from our community
          </p>
        </div>
      </div>

      {/* Featured Announcements */}
      {featuredAnnouncements.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredAnnouncements.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FiCalendar className="mr-1" size={14} />
                        {formatDate(item.date)}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {item.content}
                    </p>
                    <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                      Read More
                      <FiArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Announcements */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Updates</h2>
          <div className="space-y-4">
            {regularAnnouncements.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full inline-block w-fit mb-2 md:mb-0">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="mr-1" size={14} />
                    {formatDate(item.date)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Note */}
      <section className="py-12 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">
            <strong>Note for Administrators:</strong> This page will include an admin panel in future updates 
            for easy content management and regular updates.
          </p>
        </div>
      </section>
    </div>
  )
}
