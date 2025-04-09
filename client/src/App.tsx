import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ServiceAreas from "@/pages/ServiceAreas";
import Contact from "@/pages/Contact";
import BookService from "@/pages/BookService";
import { useEffect } from "react";

// Service Area Pages
import StLouisCity from "@/pages/service-areas/StLouisCity";
import StLouisCounty from "@/pages/service-areas/StLouisCounty";
import StClairCounty from "@/pages/service-areas/StClairCounty";

// Component to scroll to top on route changes
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top when the location changes
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/service-areas" component={ServiceAreas} />
          <Route path="/service-areas/st-louis-city" component={StLouisCity} />
          <Route path="/service-areas/st-louis-county" component={StLouisCounty} />
          <Route path="/service-areas/st-clair-county" component={StClairCounty} />
          <Route path="/contact" component={Contact} />
          <Route path="/book" component={BookService} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;