import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { insertContactFormSchema, type InsertContactForm } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Loader2,
  CheckCircle2,
  Calendar,
  Flag
} from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<InsertContactForm>({
    resolver: zodResolver(insertContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      zipCode: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactForm) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    },
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Form header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6 sm:p-8">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-white/90 text-sm sm:text-base max-w-lg">
          Request a quote, schedule service, or ask us any questions about dryer vent cleaning. We're here to help!
        </p>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3 border border-white/20">
            <CheckCircle2 className="h-5 w-5 text-white" />
            <span className="text-white text-sm font-medium">Free Estimates</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3 border border-white/20">
            <Calendar className="h-5 w-5 text-white" />
            <span className="text-white text-sm font-medium">Flexible Scheduling</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3 border border-white/20">
            <Flag className="h-5 w-5 text-white" />
            <span className="text-white text-sm font-medium">Same-Day Service</span>
          </div>
        </div>
      </div>
      
      {/* Form body */}
      <div className="p-6 sm:p-8">
        <Form {...form}>
          <form
            id="contact-form"
            onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input 
                          placeholder="John Smith" 
                          className="pl-10 py-6 bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input 
                          type="email" 
                          placeholder="you@example.com" 
                          className="pl-10 py-6 bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input 
                          type="tel" 
                          placeholder="(123) 456-7890" 
                          className="pl-10 py-6 bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">ZIP Code</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input 
                          placeholder="63110" 
                          className="pl-10 py-6 bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Your Message</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <Textarea
                        placeholder="Tell us about your dryer vent cleaning needs, preferred appointment times, or any questions you have."
                        className="pl-10 pt-2 min-h-[120px] bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <div className="pt-3">
              <Button
                type="submit"
                className="w-full py-6 text-base font-medium bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Submit Request
                  </span>
                )}
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
