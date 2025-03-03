"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Check, Send } from "lucide-react"

export default function ExhibitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    productCategory: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const benefits = [
    "Reach thousands of architecture and design professionals",
    "Showcase your products to a global audience",
    "Generate high-quality leads for your business",
    "Increase brand visibility in the architecture industry",
    "Connect with potential distributors and partners",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">Exhibit With Us</h1>
          <p className="text-gray-600 mb-6">
            Join thousands of leading manufacturers and showcase your products to architecture and design professionals
            worldwide.
          </p>

          <div className="relative h-64 rounded-lg overflow-hidden mb-6">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Exhibition showcase"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-xl font-bold mb-3">Why Exhibit With Us?</h2>
          <ul className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Our Platform in Numbers</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-blue-600">500K+</p>
                <p className="text-sm text-gray-600">Monthly Visitors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">15K+</p>
                <p className="text-sm text-gray-600">Products Listed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">180+</p>
                <p className="text-sm text-gray-600">Countries Reached</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">25K+</p>
                <p className="text-sm text-gray-600">RFQs Generated</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h2>
              <p className="text-gray-700 mb-4">
                Your exhibition request has been submitted successfully. Our team will contact you within 2 business
                days to discuss the next steps.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Contact Us to Exhibit</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get in touch with you to discuss exhibition opportunities.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">
                      Product Category *
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      required
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="">Select a category</option>
                      <option value="furniture">Furniture</option>
                      <option value="lighting">Lighting</option>
                      <option value="flooring">Flooring & Wallcovering</option>
                      <option value="kitchen">Kitchen & Bathroom</option>
                      <option value="decoration">Decoration</option>
                      <option value="outdoor">Garden & Terrace</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Tell us about your products and exhibition goals..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

