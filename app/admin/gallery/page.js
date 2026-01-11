'use client'

import { useState, useEffect } from 'react'
import { FiPlus, FiEdit, FiTrash2, FiX, FiSave, FiImage, FiCalendar } from 'react-icons/fi'

export default function AdminGallery() {
  const [galleries, setGalleries] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingGallery, setEditingGallery] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    category: 'Events',
    date: new Date().toISOString().split('T')[0],
    images: [],
  })
  const [imageInput, setImageInput] = useState('')

  useEffect(() => {
    // Load galleries from localStorage
    const savedGalleries = JSON.parse(localStorage.getItem('ycp_gallery') || '[]')
    setGalleries(savedGalleries)
  }, [])

  const saveToStorage = (updatedGalleries) => {
    localStorage.setItem('ycp_gallery', JSON.stringify(updatedGalleries))
    setGalleries(updatedGalleries)
  }

  const handleAdd = () => {
    setEditingGallery(null)
    setFormData({
      title: '',
      category: 'Events',
      date: new Date().toISOString().split('T')[0],
      images: [],
    })
    setImageInput('')
    setIsModalOpen(true)
  }

  const handleEdit = (item) => {
    setEditingGallery(item)
    setFormData({
      title: item.title,
      category: item.category,
      date: item.date,
      images: item.images || [],
    })
    setImageInput('')
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this gallery?')) {
      const updatedGalleries = galleries.filter((item) => item.id !== id)
      saveToStorage(updatedGalleries)
    }
  }

  const handleAddImage = () => {
    if (imageInput.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, { url: imageInput.trim(), alt: '' }],
      })
      setImageInput('')
    }
  }

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    })
  }

  const handleImageAltChange = (index, alt) => {
    const updatedImages = [...formData.images]
    updatedImages[index].alt = alt
    setFormData({ ...formData, images: updatedImages })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let updatedGalleries

    if (editingGallery) {
      // Update existing
      updatedGalleries = galleries.map((item) =>
        item.id === editingGallery.id
          ? { ...formData, id: editingGallery.id }
          : item
      )
    } else {
      // Add new
      const newItem = {
        ...formData,
        id: Date.now().toString(),
      }
      updatedGalleries = [...galleries, newItem]
    }

    saveToStorage(updatedGalleries)
    setIsModalOpen(false)
    setEditingGallery(null)
  }

  const categories = ['Events', 'Retreat', 'Charity', 'Meetings', 'Service', 'Other']

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Gallery</h1>
          <p className="text-gray-600">Add, edit, or delete gallery collections</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2 shadow-lg"
        >
          <FiPlus size={20} />
          <span>Add Gallery</span>
        </button>
      </div>

      {/* Gallery List */}
      <div className="space-y-6">
        {galleries.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center border border-gray-200">
            <p className="text-gray-500 mb-4">No galleries yet</p>
            <button
              onClick={handleAdd}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Add your first gallery
            </button>
          </div>
        ) : (
          galleries.map((gallery) => (
            <div key={gallery.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{gallery.title}</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                        {gallery.category}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="mr-1" size={14} />
                      {new Date(gallery.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(gallery)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(gallery.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(gallery.images || []).slice(0, 8).map((image, index) => (
                    <div key={index} className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FiImage className="text-purple-400" size={32} />
                      </div>
                      {/* In production: <Image src={image.url} alt={image.alt || gallery.title} fill className="object-cover" /> */}
                    </div>
                  ))}
                  {(gallery.images || []).length > 8 && (
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        +{(gallery.images || []).length - 8} more
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Total images: {(gallery.images || []).length}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingGallery ? 'Edit Gallery' : 'Add Gallery'}
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
                  Gallery Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Annual Retreat 2024"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add Images (URLs)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="url"
                    value={imageInput}
                    onChange={(e) => setImageInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleAddImage()
                      }
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter image URL and press Enter or click Add"
                  />
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Enter image URLs one at a time. In production, you'll upload images directly.
                </p>
              </div>

              {/* Image List */}
              {formData.images.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Images ({formData.images.length})
                  </label>
                  <div className="space-y-2 max-h-60 overflow-y-auto border border-gray-200 rounded-lg p-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded flex items-center justify-center flex-shrink-0">
                          <FiImage className="text-purple-400" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <input
                            type="text"
                            value={image.url}
                            readOnly
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded bg-white mb-1"
                          />
                          <input
                            type="text"
                            value={image.alt}
                            onChange={(e) => handleImageAltChange(index, e.target.value)}
                            placeholder="Image alt text (optional)"
                            className="w-full px-2 py-1 text-xs border border-gray-300 rounded bg-white"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                        >
                          <FiX size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                  <span>{editingGallery ? 'Update' : 'Save'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
