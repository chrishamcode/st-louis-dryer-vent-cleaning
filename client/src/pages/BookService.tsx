import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceTypeStep from "@/components/booking/ServiceTypeStep";
import LocationScheduleStep from "@/components/booking/LocationScheduleStep";
import ContactInfoStep from "@/components/booking/ContactInfoStep";
import ConfirmationStep from "@/components/booking/ConfirmationStep";
import { Progress } from "@/components/ui/progress";
import SEO from "@/lib/seo";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  "Service Type",
  "Location & Schedule",
  "Contact Information",
  "Confirmation",
];

export default function BookService() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward
  const [bookingData, setBookingData] = useState({
    serviceType: "",
    date: null,
    time: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const updateBookingData = (data: Partial<typeof bookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    <>
      <SEO 
        title="Book Service"
        description="Schedule your dryer vent cleaning service with our easy-to-use booking wizard. Professional service in St. Louis area."
        canonical="https://stlouisdryerventcleaning.com/book"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold mb-8">Book Your Service</h1>

          <div className="mx-auto max-w-2xl mb-8">
            <div className="mb-2 flex justify-between text-sm">
              {steps.map((step, index) => (
                <motion.span
                  key={step}
                  initial={{ opacity: 0.5 }}
                  animate={{
                    opacity: index <= currentStep ? 1 : 0.5,
                    color: index <= currentStep ? "var(--primary)" : "var(--muted-foreground)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ width: ((currentStep) / steps.length) * 100 + "%" }}
              animate={{ width: progress + "%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Progress value={100} className="h-2" />
            </motion.div>
          </div>

          <Card className="mx-auto max-w-2xl p-6 overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                {currentStep === 0 && (
                  <ServiceTypeStep
                    data={bookingData}
                    updateData={updateBookingData}
                    onNext={nextStep}
                  />
                )}
                {currentStep === 1 && (
                  <LocationScheduleStep
                    data={bookingData}
                    updateData={updateBookingData}
                    onNext={nextStep}
                    onBack={prevStep}
                  />
                )}
                {currentStep === 2 && (
                  <ContactInfoStep
                    data={bookingData}
                    updateData={updateBookingData}
                    onNext={nextStep}
                    onBack={prevStep}
                  />
                )}
                {currentStep === 3 && (
                  <ConfirmationStep
                    data={bookingData}
                    onBack={prevStep}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </>
  );
}