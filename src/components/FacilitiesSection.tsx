
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, FlaskConical, Dumbbell, Music, Globe, Car } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Interactive digital boards and modern teaching technology",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500"
    },
    {
      title: "Science Labs",
      description: "Well-equipped physics, chemistry, and biology laboratories",
      icon: FlaskConical,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500"
    },
    {
      title: "Sports Complex",
      description: "Multi-sport facilities including basketball, tennis, and swimming",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500"
    },
    {
      title: "Music & Arts",
      description: "Dedicated spaces for music, dance, and creative arts programs",
      icon: Music,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500"
    },
    {
      title: "Language Lab",
      description: "Advanced language learning with audio-visual aids",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500"
    },
    {
      title: "Transportation",
      description: "Safe and reliable school bus service with GPS tracking",
      icon: Car,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          World-Class Facilities
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          State-of-the-art infrastructure designed to provide the best learning environment 
          for comprehensive development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white overflow-hidden">
                <div className="relative">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
