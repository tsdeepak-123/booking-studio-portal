
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Users, Camera, Music, Palette } from "lucide-react";
import LoginModal from "@/components/LoginModal";
import StudioCard from "@/components/StudioCard";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const featuredStudios = [
    {
      id: 1,
      name: "Harmony Recording Studio",
      location: "New York, NY",
      price: 150,
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500",
      type: "Music Studio",
      capacity: 8,
      amenities: ["Professional Equipment", "Soundproof", "24/7 Access"]
    },
    {
      id: 2,
      name: "Creative Light Studio",
      location: "Los Angeles, CA",
      price: 200,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500",
      type: "Photo Studio",
      capacity: 12,
      amenities: ["Professional Lighting", "Backdrop Options", "Equipment Rental"]
    },
    {
      id: 3,
      name: "Urban Art Space",
      location: "Chicago, IL",
      price: 120,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500",
      type: "Art Studio",
      capacity: 15,
      amenities: ["Natural Light", "Art Supplies", "Gallery Space"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StudioSpace
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Studios</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <Button 
              variant="outline" 
              onClick={() => setIsLoginOpen(true)}
              className="hover:bg-blue-50 border-blue-200"
            >
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Sign Up
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Book Creative Studios
            <br />
            <span className="text-4xl md:text-6xl">Anywhere, Anytime</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover and book professional studios for music recording, photography, 
            art creation, and more. Connect with creative spaces that inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setIsLoginOpen(true)}
              className="px-8 py-4 text-lg hover:bg-blue-50 border-blue-200"
            >
              Login to Account
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Studios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
              <div className="text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Categories */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Explore Studio Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Music Studios</h3>
                <p className="text-gray-600 mb-6">Professional recording and rehearsal spaces with top-tier equipment</p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">150+ Studios</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Photo Studios</h3>
                <p className="text-gray-600 mb-6">Fully equipped photography studios with professional lighting</p>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">200+ Studios</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Art Studios</h3>
                <p className="text-gray-600 mb-6">Creative spaces for painting, sculpture, and mixed media art</p>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">100+ Studios</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Studios */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Studios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudios.map((studio) => (
              <StudioCard key={studio.id} studio={studio} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of creators who trust StudioSpace for their projects
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={() => setIsLoginOpen(true)}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">StudioSpace</h3>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Connecting creators with professional studio spaces worldwide
            </p>
          </div>
          <div className="text-gray-400">
            <p>&copy; 2024 StudioSpace. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Index;
