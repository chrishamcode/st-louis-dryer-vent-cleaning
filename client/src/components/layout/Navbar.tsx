import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="border-b bg-white" aria-label="Main navigation">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-primary">
          St. Louis Dryer Vent Cleaning
        </Link>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[385px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link href="/service-areas" className="text-sm font-medium hover:text-primary">
                Service Areas
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
              <Button variant="outline" size="sm" asChild>
                <a href="tel:314-555-0123" className="flex items-center">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  (314) 555-0123
                </a>
              </Button>
              <Button size="sm" asChild>
                <Link href="/book">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Now
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop menu */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/service-areas" className="text-sm font-medium hover:text-primary">
            Service Areas
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
          <Button variant="outline" size="sm" asChild>
            <a href="tel:314-555-0123" className="flex items-center">
              <PhoneCall className="mr-2 h-4 w-4" />
              (314) 555-0123
            </a>
          </Button>
          <Button size="sm" asChild>
            <Link href="/book" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}