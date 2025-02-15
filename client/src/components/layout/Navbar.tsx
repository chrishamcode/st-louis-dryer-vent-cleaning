import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/">
          <a className="text-xl font-bold text-primary">
            St. Louis Dryer Vent Cleaning
          </a>
        </Link>

        <div className="hidden items-center space-x-4 md:flex">
          <Link href="/">
            <a className="text-sm font-medium hover:text-primary">Home</a>
          </Link>
          <Link href="/service-areas">
            <a className="text-sm font-medium hover:text-primary">Service Areas</a>
          </Link>
          <Link href="/contact">
            <a className="text-sm font-medium hover:text-primary">Contact</a>
          </Link>
          <Button variant="outline" size="sm" asChild>
            <a href="tel:314-555-0123">
              <PhoneCall className="mr-2 h-4 w-4" />
              (314) 555-0123
            </a>
          </Button>
          <Button size="sm" asChild>
            <Link href="/book">
              <a>
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </a>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}