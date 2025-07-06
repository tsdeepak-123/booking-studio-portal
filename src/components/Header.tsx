
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onLoginClick: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white/90 backdrop-blur-md border-b border-white/20 sticky top-0">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Excellence Academy
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Admissions</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Faculty</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          <Button 
            variant="outline" 
            onClick={onLoginClick}
            className="hover:bg-blue-50 border-blue-200"
          >
            Parent Portal
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Apply Now
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Admissions</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Faculty</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <Button 
              variant="outline" 
              onClick={onLoginClick}
              className="w-full justify-center"
            >
              Parent Portal
            </Button>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
              Apply Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
