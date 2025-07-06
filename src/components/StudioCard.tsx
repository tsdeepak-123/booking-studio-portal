
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Heart } from "lucide-react";
import { useState } from "react";

interface Studio {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  type: string;
  capacity: number;
  amenities: string[];
}

interface StudioCardProps {
  studio: Studio;
}

const StudioCard = ({ studio }: StudioCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white overflow-hidden">
      <div className="relative">
        <img 
          src={studio.image} 
          alt={studio.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'} transition-colors`} 
          />
        </button>
        <Badge 
          className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white"
        >
          {studio.type}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {studio.name}
            </h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {studio.location}
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center mb-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="font-semibold text-gray-900">{studio.rating}</span>
              <span className="text-gray-600 text-sm ml-1">({studio.reviews})</span>
            </div>
          </div>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-4">
          <Users className="w-4 h-4 mr-1" />
          <span>Up to {studio.capacity} people</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {studio.amenities.slice(0, 2).map((amenity, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
              {amenity}
            </Badge>
          ))}
          {studio.amenities.length > 2 && (
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
              +{studio.amenities.length - 2} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-gray-900">${studio.price}</span>
            <span className="text-gray-600 ml-1">/hour</span>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudioCard;
