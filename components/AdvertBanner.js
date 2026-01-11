'use client'

import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import Link from 'next/link'

export default function AdvertBanner() {
  const [adverts, setAdverts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const loadAdverts = () => {
      // Load adverts from localStorage (managed by admin)
      const savedAdverts = JSON.parse(localStorage.getItem('ycp_adverts') || '[]')
      
      // Fallback to default data if no admin data exists
      if (savedAdverts.length === 0) {
        const defaultAdverts = [
          {
            id: 1,
            title: 'Tech Solutions Ltd.',
            description: 'Professional software development and IT consulting services.',
            website: 'https://techsolutions.com',
            category: 'Technology',
          },
          {
            id: 2,
            title: 'Elegant Events Planning',
            description: 'Full-service event planning and management.',
            website: 'https://elegantevents.com',
            category: 'Events',
          },
          {
            id: 3,
            title: 'Healthy Living Pharmacy',
            description: 'Your trusted neighborhood pharmacy.',
            website: 'https://healthylivingpharmacy.com',
            category: 'Healthcare',
          },
        ]
        setAdverts(defaultAdverts.slice(0, 5)) // Show latest 5
      } else {
        // Sort by ID (assuming higher ID = more recent) and take latest 5
        const sortedAdverts = savedAdverts.sort((a, b) => parseInt(b.id) - parseInt(a.id))
        setAdverts(sortedAdverts.slice(0, 5))
      }
    }

    loadAdverts()

    // Listen for storage changes to update banner when admin updates adverts
    const handleStorageChange = () => {
      loadAdverts()
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Also check periodically for changes (since storage event only fires in other tabs)
    const interval = setInterval(loadAdverts, 2000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    // Auto-rotate carousel every 5 seconds
    if (adverts.length > 1 && isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % adverts.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [adverts.length, isVisible])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + adverts.length) % adverts.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % adverts.length)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible || adverts.length === 0) {
    return null
  }

  const currentAdvert = adverts[currentIndex]

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Left Arrow */}
          {adverts.length > 1 && (
            <button
              onClick={handlePrevious}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors flex-shrink-0"
              aria-label="Previous advert"
            >
              <FiChevronLeft size={20} />
            </button>
          )}

          {/* Advert Content */}
          <Link
            href={currentAdvert.website || '/adverts'}
            target={currentAdvert.website ? '_blank' : '_self'}
            rel={currentAdvert.website ? 'noopener noreferrer' : ''}
            className="flex-1 flex items-center justify-center space-x-3 px-4 hover:bg-white hover:bg-opacity-10 transition-colors rounded mx-2"
          >
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wide opacity-90">
              AD:
            </span>
            <span className="text-sm md:text-base font-medium truncate">
              {currentAdvert.title}
            </span>
            {currentAdvert.description && (
              <span className="hidden md:inline text-xs opacity-90 truncate max-w-md">
                - {currentAdvert.description}
              </span>
            )}
            <span className="text-xs md:text-sm underline opacity-90 flex-shrink-0">
              Learn More →
            </span>
          </Link>

          {/* Right Arrow */}
          {adverts.length > 1 && (
            <button
              onClick={handleNext}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors flex-shrink-0"
              aria-label="Next advert"
            >
              <FiChevronRight size={20} />
            </button>
          )}

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors ml-2 flex-shrink-0"
            aria-label="Close banner"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Dots Indicator (only if multiple adverts) */}
        {adverts.length > 1 && (
          <div className="flex justify-center space-x-1 pb-2">
            {adverts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white bg-opacity-50 w-1 hover:bg-opacity-75'
                }`}
                aria-label={`Go to advert ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
