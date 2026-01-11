import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi'

export default function Executives() {
  // This would typically come from a database or CMS
  const executives = [
    {
      name: 'John Doe',
      position: 'President',
      email: 'president@ycp.org',
      phone: '+234 (0) 123 456 7890',
      image: '/images/executives/john-doe.jpg',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
    {
      name: 'Jane Smith',
      position: 'Vice President',
      email: 'vicepresident@ycp.org',
      phone: '+234 (0) 123 456 7891',
      image: '/images/executives/jane-smith.jpg',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
    {
      name: 'Michael Johnson',
      position: 'Secretary',
      email: 'secretary@ycp.org',
      phone: '+234 (0) 123 456 7892',
      image: '/images/executives/michael-johnson.jpg',
      linkedin: 'https://linkedin.com/in/michaeljohnson',
    },
    {
      name: 'Sarah Williams',
      position: 'Treasurer',
      email: 'treasurer@ycp.org',
      phone: '+234 (0) 123 456 7893',
      image: '/images/executives/sarah-williams.jpg',
      linkedin: 'https://linkedin.com/in/sarahwilliams',
    },
    {
      name: 'David Brown',
      position: 'Public Relations Officer',
      email: 'pr@ycp.org',
      phone: '+234 (0) 123 456 7894',
      image: '/images/executives/david-brown.jpg',
      linkedin: 'https://linkedin.com/in/davidbrown',
    },
    {
      name: 'Emily Davis',
      position: 'Program Coordinator',
      email: 'programs@ycp.org',
      phone: '+234 (0) 123 456 7895',
      image: '/images/executives/emily-davis.jpg',
      linkedin: 'https://linkedin.com/in/emilydavis',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Executives</h1>
          <p className="text-xl text-purple-100">
            Meet the dedicated leaders serving our community
          </p>
        </div>
      </div>

      {/* Executives Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <div
                key={index}
                className="bg-white border border-purple-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Photo */}
                <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <div className="text-6xl text-white font-bold">
                    {executive.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {/* In production, replace with: <Image src={executive.image} alt={executive.name} className="w-full h-full object-cover" /> */}
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {executive.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-4">
                    {executive.position}
                  </p>

                  {/* Contact Information */}
                  <div className="space-y-2">
                    <a
                      href={`mailto:${executive.email}`}
                      className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <FiMail className="mr-2" size={18} />
                      <span className="text-sm">{executive.email}</span>
                    </a>
                    <a
                      href={`tel:${executive.phone}`}
                      className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <FiPhone className="mr-2" size={18} />
                      <span className="text-sm">{executive.phone}</span>
                    </a>
                    <a
                      href={executive.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <FiLinkedin className="mr-2" size={18} />
                      <span className="text-sm">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              <strong>Note:</strong> Executive information is automatically updated when new executives resume office. 
              For the most current information, please contact us directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
