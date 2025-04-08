import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  HelpCircle, 
  AlertTriangle, 
  Clock, 
  Zap, 
  Flame, 
  Settings, 
  Award, 
  Info,
  ChevronDown
} from "lucide-react";

export default function FAQ2() {
  // Structured data for FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is dryer vent cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dryer vent cleaning is the process of removing lint, debris, and blockages from your dryer's ventilation system. This includes the duct that runs from your dryer to the outside of your home, which over time can become clogged with lint that escapes your dryer's lint trap. Our professional service uses specialized tools including high-powered vacuum systems and rotary brushes to thoroughly clean the entire vent path."
        }
      },
      {
        "@type": "Question",
        "name": "Why is dryer vent cleaning necessary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dryer vent cleaning is essential for several important reasons: 1) Fire Prevention: Lint is highly flammable, and according to the U.S. Fire Administration, there are approximately 2,900 home dryer fires reported each year. 2) Energy Efficiency: A clogged vent forces your dryer to work harder and run longer, increasing energy consumption and utility bills. 3) Extended Appliance Life: Regular cleaning helps prevent overheating and unnecessary wear on your dryer components. 4) Reduced Drying Time: Clean vents allow proper airflow, helping clothes dry faster. 5) Health Benefits: Prevents mold growth and improves indoor air quality."
        }
      },
      {
        "@type": "Question",
        "name": "How often should dryer vents be cleaned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The National Fire Protection Association recommends that dryer vents be inspected and cleaned at least once per year. However, if you notice any warning signs like longer drying times, burning smells, excessive heat from the dryer, or lint visible around the vent opening, you should schedule a cleaning immediately. Households with high laundry volume, homes with pets, or vents with longer or more complex ductwork may require more frequent cleanings."
        }
      },
      {
        "@type": "Question",
        "name": "How is dryer vent cleaning performed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our professional dryer vent cleaning process includes: 1) Inspection: We thoroughly examine your dryer vent system to assess its condition and identify any issues. 2) Disconnect: Your dryer is carefully disconnected and moved to access the vent. 3) Cleaning: Using professional-grade equipment, we remove lint and debris from the entire duct system. 4) Rotary Brushing: A specialized rotating brush system is used to scrub the interior walls of the ductwork. 5) High-Powered Vacuum: Industrial-strength vacuum equipment extracts all loosened debris. 6) Exterior Vent Check: We clean the outside vent opening and ensure it operates properly. 7) Reconnection: Your dryer is reconnected and tested for proper airflow. 8) Final Inspection: We confirm that the entire system is clean and functioning correctly."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose St. Louis Dryer Vent Cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer local expertise in St. Louis area homes, certified technicians, comprehensive service cleaning the entire vent system, advanced professional equipment, 100% satisfaction guarantee, transparent pricing with no hidden fees, and flexible scheduling to accommodate your needs."
        }
      },
      {
        "@type": "Question",
        "name": "What are the signs that my dryer vent needs cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look out for these warning signs: clothes take longer than usual to dry, the dryer or your laundry feels unusually hot, burning smell when the dryer is running, visible lint accumulation around the dryer hose or exterior vent opening, the dryer automatically shuts off before clothes are dry (due to overheating), it's been more than a year since your last cleaning, and excessive humidity in the laundry room when the dryer is running."
        }
      }
    ]
  };

  // State to track which accordion items are open
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "what-is-dryer-vent-cleaning": false,
    "why-is-dryer-vent-cleaning-necessary": false,
    "how-often-should-dryer-vents-be-cleaned": false,
    "how-is-dryer-vent-cleaning-performed": false,
    "why-choose-us": false,
    "signs-of-clogged-dryer-vent": false
  });

  // Toggle accordion item
  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20" aria-labelledby="faq-heading">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 rounded-full">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 
            id="faq-heading" 
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn more about our dryer vent cleaning services and why they're essential for your home's safety and efficiency
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl space-y-4">
          {/* Accordion Item 1: What is dryer vent cleaning? */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleItem("what-is-dryer-vent-cleaning")}
              className="w-full text-left font-medium px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between"
              aria-expanded={openItems["what-is-dryer-vent-cleaning"]}
            >
              <div className="flex items-center">
                <Info className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  What is dryer vent cleaning?
                </span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 transition-transform duration-200 ${openItems["what-is-dryer-vent-cleaning"] ? "transform rotate-180" : ""}`}
              />
            </button>
            
            {openItems["what-is-dryer-vent-cleaning"] && (
              <div className="text-gray-600 px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="pl-8">
                  Dryer vent cleaning is the process of removing lint, debris, and blockages from your dryer's ventilation system. 
                  This includes the duct that runs from your dryer to the outside of your home, which over time can become clogged 
                  with lint that escapes your dryer's lint trap. Our professional service uses specialized tools including 
                  high-powered vacuum systems and rotary brushes to thoroughly clean the entire vent path.
                </div>
              </div>
            )}
          </div>

          {/* Accordion Item 2: Why is dryer vent cleaning necessary? */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleItem("why-is-dryer-vent-cleaning-necessary")}
              className="w-full text-left font-medium px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between"
              aria-expanded={openItems["why-is-dryer-vent-cleaning-necessary"]}
            >
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  Why is dryer vent cleaning necessary?
                </span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 transition-transform duration-200 ${openItems["why-is-dryer-vent-cleaning-necessary"] ? "transform rotate-180" : ""}`}
              />
            </button>
            
            {openItems["why-is-dryer-vent-cleaning-necessary"] && (
              <div className="text-gray-600 px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="pl-8">
                  <p className="mb-3">
                    Dryer vent cleaning is essential for several important reasons:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                            <Flame className="h-5 w-5 text-red-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-base font-medium text-gray-900">Fire Prevention</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            Lint is highly flammable, and according to the U.S. Fire Administration, 
                            there are approximately 2,900 home dryer fires reported each year, causing an estimated 
                            5 deaths, 100 injuries, and $35 million in property loss.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                            <Zap className="h-5 w-5 text-green-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-base font-medium text-gray-900">Energy Efficiency</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            A clogged vent forces your dryer to work harder and run longer, increasing energy consumption and utility bills.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                            <Settings className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-base font-medium text-gray-900">Extended Appliance Life</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            Regular cleaning helps prevent overheating and unnecessary wear on your dryer components,
                            potentially adding years to your appliance's lifespan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accordion Item 3: How often should dryer vents be cleaned? */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleItem("how-often-should-dryer-vents-be-cleaned")}
              className="w-full text-left font-medium px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between"
              aria-expanded={openItems["how-often-should-dryer-vents-be-cleaned"]}
            >
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  How often should dryer vents be cleaned?
                </span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 transition-transform duration-200 ${openItems["how-often-should-dryer-vents-be-cleaned"] ? "transform rotate-180" : ""}`}
              />
            </button>
            
            {openItems["how-often-should-dryer-vents-be-cleaned"] && (
              <div className="text-gray-600 px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="pl-8">
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-amber-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-amber-700">
                          The National Fire Protection Association recommends that dryer vents be inspected and cleaned at least once per year.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    However, if you notice any warning signs like longer drying times, burning smells, excessive heat from the dryer, 
                    or lint visible around the vent opening, you should schedule a cleaning immediately.
                  </p>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="text-base font-medium text-gray-900 mb-2">You may need more frequent cleanings if you have:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center">
                        <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                        High laundry volume
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                        Pets in the home
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                        Long or complex ductwork
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                        Multiple residents/large family
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accordion Item 4: How is dryer vent cleaning performed? */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleItem("how-is-dryer-vent-cleaning-performed")}
              className="w-full text-left font-medium px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between"
              aria-expanded={openItems["how-is-dryer-vent-cleaning-performed"]}
            >
              <div className="flex items-center">
                <Settings className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  How is dryer vent cleaning performed?
                </span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 transition-transform duration-200 ${openItems["how-is-dryer-vent-cleaning-performed"] ? "transform rotate-180" : ""}`}
              />
            </button>
            
            {openItems["how-is-dryer-vent-cleaning-performed"] && (
              <div className="text-gray-600 px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="pl-8">
                  <p className="mb-4">Our professional dryer vent cleaning process follows these comprehensive steps:</p>
                  
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                          1
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">Inspection</h4>
                        <p className="mt-1 text-sm text-gray-600">We thoroughly examine your dryer vent system to assess its condition and identify any issues.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                          2
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">Disconnect</h4>
                        <p className="mt-1 text-sm text-gray-600">Your dryer is carefully disconnected and moved to access the vent.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                          3
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">Cleaning</h4>
                        <p className="mt-1 text-sm text-gray-600">Using professional-grade equipment, we remove lint and debris from the entire duct system.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                          4
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">Rotary Brushing</h4>
                        <p className="mt-1 text-sm text-gray-600">A specialized rotating brush system is used to scrub the interior walls of the ductwork.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                          5
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">High-Powered Vacuum</h4>
                        <p className="mt-1 text-sm text-gray-600">Industrial-strength vacuum equipment extracts all loosened debris.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                          6
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">Exterior Vent Check</h4>
                        <p className="mt-1 text-sm text-gray-600">We clean the outside vent opening and ensure it operates properly.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                          7
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">Reconnection</h4>
                        <p className="mt-1 text-sm text-gray-600">Your dryer is reconnected and tested for proper airflow.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                          8
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-gray-900">Final Inspection</h4>
                        <p className="mt-1 text-sm text-gray-600">We confirm that the entire system is clean and functioning correctly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accordion Item 5: Why choose St. Louis Dryer Vent Cleaning? */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleItem("why-choose-us")}
              className="w-full text-left font-medium px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between"
              aria-expanded={openItems["why-choose-us"]}
            >
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  Why choose St. Louis Dryer Vent Cleaning?
                </span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 transition-transform duration-200 ${openItems["why-choose-us"] ? "transform rotate-180" : ""}`}
              />
            </button>
            
            {openItems["why-choose-us"] && (
              <div className="text-gray-600 px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="pl-8">
                  <ul className="space-y-4">
                    <li className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex">
                        <div className="mr-3 text-primary">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-gray-900">Locally Owned & Operated</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            We are proud to be a local St. Louis business, deeply familiar with the homes and architecture in our area.
                          </p>
                        </div>
                      </div>
                    </li>
                    
                    <li className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex">
                        <div className="mr-3 text-primary">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-gray-900">Certified Technicians</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            Our technicians are fully trained, certified, and experienced in the latest dryer vent cleaning techniques.
                          </p>
                        </div>
                      </div>
                    </li>
                    
                    <li className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex">
                        <div className="mr-3 text-primary">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-gray-900">Comprehensive Service</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            We clean your entire vent system from the dryer to the exterior vent, not just the accessible portions.
                          </p>
                        </div>
                      </div>
                    </li>
                    
                    <li className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex">
                        <div className="mr-3 text-primary">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-gray-900">Satisfaction Guaranteed</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            We stand behind our work with a 100% satisfaction guarantee on every service.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Accordion Item 6: Signs of clogged dryer vent */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleItem("signs-of-clogged-dryer-vent")}
              className="w-full text-left font-medium px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between"
              aria-expanded={openItems["signs-of-clogged-dryer-vent"]}
            >
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" />
                <span className="text-gray-800 text-lg">
                  What are the signs that my dryer vent needs cleaning?
                </span>
              </div>
              <ChevronDown 
                className={`h-5 w-5 transition-transform duration-200 ${openItems["signs-of-clogged-dryer-vent"] ? "transform rotate-180" : ""}`}
              />
            </button>
            
            {openItems["signs-of-clogged-dryer-vent"] && (
              <div className="text-gray-600 px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="pl-8">
                  <p className="mb-4">Look out for these warning signs that indicate it's time for a professional dryer vent cleaning:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                      <div className="flex-shrink-0 text-red-500 mr-2">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Clothes take longer than usual to dry</span>
                    </div>
                    
                    <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                      <div className="flex-shrink-0 text-red-500 mr-2">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">The dryer or your laundry feels unusually hot</span>
                    </div>
                    
                    <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                      <div className="flex-shrink-0 text-red-500 mr-2">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Burning smell when the dryer is running</span>
                    </div>
                    
                    <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                      <div className="flex-shrink-0 text-red-500 mr-2">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Visible lint accumulation around the dryer hose</span>
                    </div>
                    
                    <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                      <div className="flex-shrink-0 text-red-500 mr-2">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">The dryer automatically shuts off before clothes are dry</span>
                    </div>
                    
                    <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                      <div className="flex-shrink-0 text-red-500 mr-2">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">It's been more than a year since your last cleaning</span>
                    </div>
                    
                    <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                      <div className="flex-shrink-0 text-red-500 mr-2">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Excessive humidity in the laundry room</span>
                    </div>
                    
                    <div className="flex items-start bg-white p-3 rounded border border-gray-200">
                      <div className="flex-shrink-0 text-red-500 mr-2">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Your clothes have a musty smell after drying</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}