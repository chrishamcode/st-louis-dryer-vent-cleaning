import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ConfirmationStepProps {
  data: {
    serviceType: string;
    date: Date;
    time: string;
    location: string;
    name: string;
    email: string;
    phone: string;
    notes?: string;
  };
  onBack: () => void;
}

export default function ConfirmationStep({ data, onBack }: ConfirmationStepProps) {
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      toast({
        title: "Booking Confirmed!",
        description: "We'll send you a confirmation email shortly.",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    },
  });

  const serviceTypes = {
    standard: {
      title: "Standard Cleaning",
      price: "$89",
    },
    express: {
      title: "Express Service",
      price: "$129",
    },
    premium: {
      title: "Premium Service",
      price: "$159",
    },
  };

  if (mutation.isSuccess) {
    return (
      <div className="text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for choosing St. Louis Dryer Vent Cleaning. We'll send you a
          confirmation email with all the details.
        </p>
        <Button asChild className="w-full">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Review Your Booking</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-gray-500">Service</div>
          <div className="font-medium">
            {serviceTypes[data.serviceType as keyof typeof serviceTypes].title}
          </div>

          <div className="text-gray-500">Price</div>
          <div className="font-medium">
            {serviceTypes[data.serviceType as keyof typeof serviceTypes].price}
          </div>

          <div className="text-gray-500">Date</div>
          <div className="font-medium">{format(data.date, "PPP")}</div>

          <div className="text-gray-500">Time</div>
          <div className="font-medium">{data.time}</div>

          <div className="text-gray-500">Location</div>
          <div className="font-medium">{data.location}</div>

          <div className="text-gray-500">Name</div>
          <div className="font-medium">{data.name}</div>

          <div className="text-gray-500">Email</div>
          <div className="font-medium">{data.email}</div>

          <div className="text-gray-500">Phone</div>
          <div className="font-medium">{data.phone}</div>

          {data.notes && (
            <>
              <div className="text-gray-500">Notes</div>
              <div className="font-medium">{data.notes}</div>
            </>
          )}
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <p className="text-sm text-yellow-600">
              By clicking confirm, you agree to our terms of service and
              cancellation policy.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          className="flex-1"
          onClick={() => mutation.mutate()}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Processing..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
}
