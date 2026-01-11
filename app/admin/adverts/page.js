'use client'

import { useState, useEffect } from 'react'
import { FiPlus, FiEdit, FiTrash2, FiX, FiSave, FiMail, FiPhone, FiExternalLink } from 'react-icons/fi'

export default function AdminAdverts() {
  const [adverts, setAdverts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingAdvert, setEditingAdvert] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Technology',
    contact: '',
    phone: '',
    website: '',
    member: '',
  })

  useEffect(() => {
    // Load adverts from localStorage
    const savedAdverts = JSON.parse(localStorage.getItem('ycp_adverts') || '[]')
    setAdverts(savedAdverts)
  }, [])

  const saveToStorage = (updatedAdverts) => {
    localStorage.setItem('ycp_adverts', JSON.stringify(updatedAdverts))
    setAdverts(updatedAdverts)
  }

  const handleAdd = () => {
    setEditingAdvert(null)
    setFormData({
      title: '',
      description: '',
      category: 'Technology',
      contact: '',
      phone: '',
      website: '',
      member: '',
    })
    setIsModalOpen(true)
  }

  const handleEdit = (item) => {
    setEditingAdvert(item)
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
      contact: item.contact,
      phone: item.phone,
      website: item.website,
      member: item.member,
    })
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this advert?')) {
      const updatedAdverts = adverts.filter((item) => item.id !== id)
      saveToStorage(updatedAdverts)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let updatedAdverts

    if (editingAdvert) {
      // Update existing
      updatedAdverts = adverts.map((item) =>
        item.id === editingAdvert.id
          ? { ...formData, id: editingAdvert.id }
          : item
      )
    } else {
      // Add new
      const newItem = {
        ...formData,
        id: Date.now().toString(),
      }
      updatedAdverts = [...adverts, newItem]
    }

    saveToStorage(updatedAdverts)
    setIsModalOpen(false)
    setEditingAdvert(null)
  }

  const categories = ['Technology', 'Events', 'Healthcare', 'Design', 'Fitness', 'Services', 'Other']

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Adverts</h1>
          <p className="text-gray-600">Add, edit, or delete member business advertisements</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2 shadow-lg"
        >
          <FiPlus size={20} />
          <span>Add Advert</span>
        </button>
      </div>

      {/* Adverts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adverts.length === 0 ? (
          <div className="col-span-full bg-white rounded-lg shadow-md p-12 text-center border border-gray-200">
            <p className="text-gray-500 mb-4">No adverts yet</p>
            <button
              onClick={handleAdd}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Add your first advert
            </button>
          </div>
        ) : (
          adverts.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <p className="text-xs text-gray-500 mb-4">Member: {item.member}</p>
                <div className="space-y-1 text-sm text-gray-700 mb-4">
                  <div className="flex items-center">
                    <FiMail className="mr-2" size={14} />
                    <span className="truncate">{item.contact}</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="mr-2" size={14} />
                    <span>{item.phone}</span>
                  </div>
                  {item.website && (
                    <div className="flex items-center">
                      <FiExternalLink className="mr-2" size={14} />
                      <span className="truncate">{item.website}</span>
                    </div>
                  )}
                </div>
                <div className="flex space-x-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FiEdit size={16} />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FiTrash2 size={16} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingAdvert ? 'Edit Advert' : 'Add Advert'}
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
                  Business Title <span className="text-red-500">*</span>
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
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                    Member Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.member}
                    onChange={(e) => setFormData({ ...formData, member: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="https://example.com"
                  />
                </div>
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
                  <span>{editingAdvert ? 'Update' : 'Save'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
