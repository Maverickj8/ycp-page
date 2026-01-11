'use client'

import { useState } from 'react'
import { FiX, FiImage } from 'react-icons/fi'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // This would typically come from a database or CMS
  const galleries = [
    {
      id: 1,
      title: 'Annual Retreat 2024',
      category: 'Retreat',
      date: '2024-10-15',
      images: Array(6).fill(null).map((_, i) => ({
        id: i + 1,
        src: `/images/gallery/retreat-2024-${i + 1}.jpg`,
        alt: `Annual Retreat 2024 - Image ${i + 1}`,
      })),
    },
    {
      id: 2,
      title: 'Charity Program - Food Drive',
      category: 'Charity',
      date: '2024-09-20',
      images: Array(6).fill(null).map((_, i) => ({
        id: i + 1,
        src: `/images/gallery/charity-2024-${i + 1}.jpg`,
        alt: `Charity Program - Image ${i + 1}`,
      })),
    },
    {
      id: 3,
      title: 'Monthly Meeting - November',
      category: 'Meetings',
      date: '2024-11-05',
      images: Array(4).fill(null).map((_, i) => ({
        id: i + 1,
        src: `/images/gallery/meeting-nov-2024-${i + 1}.jpg`,
        alt: `Monthly Meeting - Image ${i + 1}`,
      })),
    },
    {
      id: 4,
      title: 'Community Service - School Renovation',
      category: 'Service',
      date: '2024-08-12',
      images: Array(8).fill(null).map((_, i) => ({
        id: i + 1,
        src: `/images/gallery/service-2024-${i + 1}.jpg`,
        alt: `Community Service - Image ${i + 1}`,
      })),
    },
    {
      id: 5,
      title: 'Networking Event - Professional Development',
      category: 'Events',
      date: '2024-07-25',
      images: Array(5).fill(null).map((_, i) => ({
        id: i + 1,
        src: `/images/gallery/event-jul-2024-${i + 1}.jpg`,
        alt: `Networking Event - Image ${i + 1}`,
      })),
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-purple-100">
            Moments from our events, activities, and community service
          </p>
        </div>
      </div>

      {/* Gallery Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {galleries.map((gallery) => (
              <div key={gallery.id}>
                {/* Gallery Header */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {gallery.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                          {gallery.category}
                        </span>
                        <span>{formatDate(gallery.date)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {gallery.images.map((image) => (
                    <div
                      key={image.id}
                      onClick={() => setSelectedImage(image)}
                      className="relative aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FiImage className="text-purple-400" size={48} />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all"></div>
                      {/* In production, replace with: <Image src={image.src} alt={image.alt} fill className="object-cover" /> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <FiX size={32} />
            </button>
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-full h-96 md:h-[600px] rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <FiImage size={64} className="mx-auto mb-4" />
                <p className="text-lg">{selectedImage.alt}</p>
                <p className="text-sm mt-2 text-purple-100">Replace with actual image</p>
              </div>
              {/* In production, replace with: <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-contain" /> */}
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <section className="py-12 bg-purple-50 border-t border-purple-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">
            Our gallery is regularly updated with photos from major YCP events, charity programs, 
            retreats, and meetings. Check back often to see the latest moments from our community.
          </p>
        </div>
      </section>
    </div>
  )
}
