"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { PageHero } from "@/components/sections/page-hero"
import { brandConfig } from "@/config/brand-config"

interface ContactInfoItemProps {
  icon: React.ReactNode
  title: string
  content: string
}

function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
  return (
    <div className="flex items-start">
      <div className="p-3 rounded-lg bg-purple-900/20 mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
      setIsSubmitting(false)
    }, 1000)
  }

  const faqs = brandConfig.faq

  return (
    <main className="pt-24 bg-black text-white">
      <PageHero
        title="Contact Us"
        description="Have questions or need assistance? Our team is ready to help you recover your valuable digital assets."
      />

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="h-1 w-20 bg-purple-500 mb-6"></div>
              <p className="text-gray-300 mb-8">
                Fill out the form and our team will get back to you within 24 hours. For urgent matters, please use our
                direct contact information.
              </p>

              <div className="space-y-6">
                <ContactInfoItem
                  icon={<Mail className="h-6 w-6 text-purple-400" />}
                  title="Email"
                  content={brandConfig.contact.email}
                />
                <ContactInfoItem
                  icon={<Phone className="h-6 w-6 text-purple-400" />}
                  title="Phone"
                  content={brandConfig.contact.phone}
                />
                <ContactInfoItem
                  icon={<MapPin className="h-6 w-6 text-purple-400" />}
                  title="Address"
                  content={brandConfig.contact.address}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-black/50 border border-purple-900/50 backdrop-blur-sm rounded-lg p-6">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 rounded-full bg-purple-900/30 border border-purple-500/50 flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-center">
                      Thank you for contacting us. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">\
                      <div>\
