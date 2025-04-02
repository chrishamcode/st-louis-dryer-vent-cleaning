import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

export default function FAQ() {
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
  return (
    <section className="bg-white py-16" aria-labelledby="faq-heading">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 
            id="faq-heading" 
            className="text-3xl font-bold tracking-tight text-gray-900 mb-2"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-10">
            Learn more about our dryer vent cleaning services
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-dryer-vent-cleaning">
              <AccordionTrigger className="text-left font-medium">
                What is dryer vent cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Dryer vent cleaning is the process of removing lint, debris, and blockages from your dryer's ventilation system. 
                This includes the duct that runs from your dryer to the outside of your home, which over time can become clogged 
                with lint that escapes your dryer's lint trap. Our professional service uses specialized tools including 
                high-powered vacuum systems and rotary brushes to thoroughly clean the entire vent path.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="why-is-dryer-vent-cleaning-necessary">
              <AccordionTrigger className="text-left font-medium">
                Why is dryer vent cleaning necessary?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p className="mb-2">
                  Dryer vent cleaning is essential for several important reasons:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium">Fire Prevention:</span> Lint is highly flammable, and according to the U.S. Fire Administration, 
                  there are approximately 2,900 home dryer fires reported each year, causing an estimated 5 deaths, 100 injuries, and $35 million in property loss.</li>
                  <li><span className="font-medium">Energy Efficiency:</span> A clogged vent forces your dryer to work harder and run longer, increasing energy consumption and utility bills.</li>
                  <li><span className="font-medium">Extended Appliance Life:</span> Regular cleaning helps prevent overheating and unnecessary wear on your dryer components.</li>
                  <li><span className="font-medium">Reduced Drying Time:</span> Clean vents allow proper airflow, helping clothes dry faster.</li>
                  <li><span className="font-medium">Health Benefits:</span> Prevents mold growth and improves indoor air quality by reducing humidity and trapped particles.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="how-often-should-dryer-vents-be-cleaned">
              <AccordionTrigger className="text-left font-medium">
                How often should dryer vents be cleaned?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The National Fire Protection Association recommends that dryer vents be inspected and cleaned at least once per year.
                However, if you notice any warning signs like longer drying times, burning smells, excessive heat from the dryer, 
                or lint visible around the vent opening, you should schedule a cleaning immediately. Households with high laundry 
                volume, homes with pets, or vents with longer or more complex ductwork may require more frequent cleanings.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="how-is-dryer-vent-cleaning-performed">
              <AccordionTrigger className="text-left font-medium">
                How is dryer vent cleaning performed?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p className="mb-2">Our professional dryer vent cleaning process includes:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li><span className="font-medium">Inspection:</span> We thoroughly examine your dryer vent system to assess its condition and identify any issues.</li>
                  <li><span className="font-medium">Disconnect:</span> Your dryer is carefully disconnected and moved to access the vent.</li>
                  <li><span className="font-medium">Cleaning:</span> Using professional-grade equipment, we remove lint and debris from the entire duct system.</li>
                  <li><span className="font-medium">Rotary Brushing:</span> A specialized rotating brush system is used to scrub the interior walls of the ductwork.</li>
                  <li><span className="font-medium">High-Powered Vacuum:</span> Industrial-strength vacuum equipment extracts all loosened debris.</li>
                  <li><span className="font-medium">Exterior Vent Check:</span> We clean the outside vent opening and ensure it operates properly.</li>
                  <li><span className="font-medium">Reconnection:</span> Your dryer is reconnected and tested for proper airflow.</li>
                  <li><span className="font-medium">Final Inspection:</span> We confirm that the entire system is clean and functioning correctly.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="why-choose-us">
              <AccordionTrigger className="text-left font-medium">
                Why choose St. Louis Dryer Vent Cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Local Expertise:</span> We specialize in the unique needs of St. Louis area homes and have extensive knowledge of local building styles and vent configurations.</li>
                  <li><span className="font-medium">Certified Technicians:</span> Our technicians are professionally trained and certified in proper dryer vent cleaning techniques.</li>
                  <li><span className="font-medium">Comprehensive Service:</span> We don't just clean visible lint—we thoroughly clean the entire vent system from dryer to exterior.</li>
                  <li><span className="font-medium">Advanced Equipment:</span> We use professional-grade tools that are more effective than DIY approaches.</li>
                  <li><span className="font-medium">Satisfaction Guarantee:</span> We stand behind our work with a 100% satisfaction guarantee.</li>
                  <li><span className="font-medium">Transparent Pricing:</span> We provide clear, upfront pricing with no hidden fees or surprise charges.</li>
                  <li><span className="font-medium">Flexible Scheduling:</span> We offer convenient appointment times that work with your schedule.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="signs-of-clogged-dryer-vent">
              <AccordionTrigger className="text-left font-medium">
                What are the signs that my dryer vent needs cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Look out for these warning signs:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Clothes take longer than usual to dry</li>
                  <li>The dryer or your laundry feels unusually hot</li>
                  <li>Burning smell when the dryer is running</li>
                  <li>Visible lint accumulation around the dryer hose or exterior vent opening</li>
                  <li>The dryer automatically shuts off before clothes are dry (due to overheating)</li>
                  <li>It's been more than a year since your last cleaning</li>
                  <li>Excessive humidity in the laundry room when the dryer is running</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}