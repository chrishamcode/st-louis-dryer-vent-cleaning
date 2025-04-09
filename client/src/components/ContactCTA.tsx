import React from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Calendar,
  Clock,
  CheckCircle2,
  Shield,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";

export default function ContactCTA() {
  return (
    <div id="contact-cta" className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark p-8 text-center">
        <h2 className="text-white text-3xl font-bold mb-3">Schedule Your Cleaning</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Professional dryer vent cleaning service in St. Louis and surrounding areas.
          Get in touch today for a safer, more efficient home!
        </p>
      </div>

      {/* CTA Options */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Call Now Button */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 transition-all hover:shadow-md">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Call Now</h3>
              <p className="mt-2 text-gray-600">Speak directly with our team</p>
            </div>
            
            <a
              href="tel:+13146326526"
              className="inline-flex w-full py-6 text-base mt-4 font-medium transition-all duration-300 items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-md"
            >
              <Phone className="h-5 w-5" />
              (314) 632-6526
            </a>
            
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>Available Mon-Fri 8am-6pm • Sat 9am-4pm</span>
            </div>
          </div>

          {/* Book Online Button */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 transition-all hover:shadow-md">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Book Online</h3>
              <p className="mt-2 text-gray-600">Schedule service at your convenience</p>
            </div>
            
            <Link 
              href="/book"
              className="inline-flex w-full py-6 text-base mt-4 font-medium transition-all duration-300 items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-md"
            >
              <Calendar className="h-5 w-5" />
              Schedule Appointment
            </Link>
            
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-500">
              <CheckCircle2 className="h-4 w-4" />
              <span>Quick, easy online scheduling available 24/7</span>
            </div>
          </div>
        </div>

        {/* Additional information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            </div>
            <span className="text-sm text-gray-700">Free quote</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm text-gray-700">Licensed & insured</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <MessageSquare className="h-6 w-6 text-blue-500" />
            </div>
            <span className="text-sm text-gray-700">
              <a href="mailto:info@stlouisdryerventcleaning.com" className="hover:underline">
                info@stlouisdryerventcleaning.com
              </a>
            </span>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Proudly serving St. Louis City, St. Louis County, and surrounding areas in Missouri and Illinois.
          </p>
        </div>
      </div>
    </div>
  );
}