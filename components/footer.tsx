import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { brandConfig } from "@/config/brand-config"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <brandConfig.logo.icon className={`${brandConfig.logo.size} ${brandConfig.logo.color} mr-2`} />
              <span className="font-bold text-xl">{brandConfig.name}</span>
            </div>
            <p className="text-gray-400 mb-6">{brandConfig.description}</p>
            <div className="flex space-x-4">
              {brandConfig.socialMedia.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {brandConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                <span className="text-gray-400">{brandConfig.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-500 mr-3" />
                <span className="text-gray-400">{brandConfig.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-500 mr-3" />
                <span className="text-gray-400">{brandConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/30 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
