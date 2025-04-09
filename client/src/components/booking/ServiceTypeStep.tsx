import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Timer, Shield } from "lucide-react";

const serviceTypes = [
  {
    id: "standard",
    title: "Standard Cleaning",
    description: "Thorough cleaning of your dryer vent system - Opening Special!",
    price: "$99",
    icon: Wrench,
  },
  {
    id: "express",
    title: "Express Service",
    description: "Same-day service with priority scheduling",
    price: "$139",
    icon: Timer,
  },
  {
    id: "premium",
    title: "Premium Service",
    description: "Deep cleaning with video inspection",
    price: "$169",
    icon: Shield,
  },
];

const formSchema = z.object({
  serviceType: z.string().min(1, "Please select a service type"),
});

interface ServiceTypeStepProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
}

export default function ServiceTypeStep({
  data,
  updateData,
  onNext,
}: ServiceTypeStepProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: data.serviceType || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateData(values);
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-lg font-semibold">
                Select Your Service Type
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid gap-4"
                >
                  {serviceTypes.map((service) => (
                    <FormItem key={service.id}>
                      <FormControl>
                        <RadioGroupItem
                          value={service.id}
                          id={service.id}
                          className="peer sr-only"
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor={service.id}
                        className="flex cursor-pointer items-start space-x-4 rounded-lg border p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <service.icon className="h-6 w-6 shrink-0 text-primary" />
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <p className="font-medium leading-none">{service.title}</p>
                            {service.id === 'standard' && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                SPECIAL
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">
                            {service.description}
                          </p>
                          <div className="flex items-center">
                            <p className="font-medium text-primary">{service.price}</p>
                            {service.id === 'standard' && (
                              <span className="ml-2 text-xs text-gray-500 line-through">$125</span>
                            )}
                          </div>
                        </div>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
    </Form>
  );
}
