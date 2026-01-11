'use client'

import { useState, useEffect } from 'react'
import { FiPlus, FiEdit, FiTrash2, FiX, FiCalendar, FiSave } from 'react-icons/fi'

export default function AdminNews() {
  const [news, setNews] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingNews, setEditingNews] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'Events',
    date: new Date().toISOString().split('T')[0],
    featured: false,
  })

  useEffect(() => {
    // Load news from localStorage
    const savedNews = JSON.parse(localStorage.getItem('ycp_news') || '[]')
    setNews(savedNews)
  }, [])

  const saveToStorage = (updatedNews) => {
    localStorage.setItem('ycp_news', JSON.stringify(updatedNews))
    setNews(updatedNews)
  }

  const handleAdd = () => {
    setEditingNews(null)
    setFormData({
      title: '',
      content: '',
      category: 'Events',
      date: new Date().toISOString().split('T')[0],
      featured: false,
    })
    setIsModalOpen(true)
  }

  const handleEdit = (item) => {
    setEditingNews(item)
    setFormData({
      title: item.title,
      content: item.content,
      category: item.category,
      date: item.date,
      featured: item.featured || false,
    })
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this news item?')) {
      const updatedNews = news.filter((item) => item.id !== id)
      saveToStorage(updatedNews)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let updatedNews

    if (editingNews) {
      // Update existing
      updatedNews = news.map((item) =>
        item.id === editingNews.id
          ? { ...formData, id: editingNews.id }
          : item
      )
    } else {
      // Add new
      const newItem = {
        ...formData,
        id: Date.now().toString(),
      }
      updatedNews = [...news, newItem]
    }

    saveToStorage(updatedNews)
    setIsModalOpen(false)
    setEditingNews(null)
  }

  const categories = ['Events', 'Mass Schedule', 'Charity', 'Meetings', 'General']

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage News & Announcements</h1>
          <p className="text-gray-600">Add, edit, or delete news items</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2 shadow-lg"
        >
          <FiPlus size={20} />
          <span>Add News</span>
        </button>
      </div>

      {/* News List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        {news.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500 mb-4">No news items yet</p>
            <button
              onClick={handleAdd}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Add your first news item
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {news.map((item) => (
              <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      {item.featured && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{item.content}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="mr-1" size={14} />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingNews ? 'Edit News' : 'Add News'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
                  Mark as Featured
                </label>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2"
                >
                  <FiSave size={18} />
                  <span>{editingNews ? 'Update' : 'Save'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
