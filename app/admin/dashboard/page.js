'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiFileText, FiShoppingBag, FiImage, FiArrowRight, FiBarChart2 } from 'react-icons/fi'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    news: 0,
    adverts: 0,
    gallery: 0,
  })

  useEffect(() => {
    // Load stats from localStorage
    const newsData = JSON.parse(localStorage.getItem('ycp_news') || '[]')
    const advertsData = JSON.parse(localStorage.getItem('ycp_adverts') || '[]')
    const galleryData = JSON.parse(localStorage.getItem('ycp_gallery') || '[]')

    setStats({
      news: newsData.length,
      adverts: advertsData.length,
      gallery: galleryData.length,
    })
  }, [])

  const quickActions = [
    {
      title: 'Manage News',
      description: 'Add, edit, or delete news and announcements',
      href: '/admin/news',
      icon: FiFileText,
      color: 'from-purple-600 to-purple-700',
    },
    {
      title: 'Manage Adverts',
      description: 'Manage member business advertisements',
      href: '/admin/adverts',
      icon: FiShoppingBag,
      color: 'from-pink-600 to-pink-700',
    },
    {
      title: 'Manage Gallery',
      description: 'Add, edit, or remove gallery photos',
      href: '/admin/gallery',
      icon: FiImage,
      color: 'from-purple-600 to-pink-600',
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage YCP website content</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">News Items</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.news}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FiFileText className="text-purple-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-pink-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Adverts</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.adverts}</p>
            </div>
            <div className="bg-pink-100 p-3 rounded-full">
              <FiShoppingBag className="text-pink-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Gallery Items</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.gallery}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-full">
              <FiImage className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link
                key={index}
                href={action.href}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-6 group"
              >
                <div className={`inline-block bg-gradient-to-r ${action.color} p-3 rounded-lg mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 mb-4">{action.description}</p>
                <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                  <span>Manage</span>
                  <FiArrowRight className="ml-2" size={18} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div className="flex items-start">
          <FiBarChart2 className="text-purple-600 mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Welcome to the Admin Panel</h3>
            <p className="text-gray-700 text-sm">
              Use the sections above to manage news, adverts, and gallery content. All changes are saved locally 
              and will need to be migrated to a backend database in production.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
