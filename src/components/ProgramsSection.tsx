
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Trophy, Palette } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Pre-Primary (Nursery - KG)",
      description: "Play-based learning with focus on foundational skills development",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      badgeColor: "bg-pink-100 text-pink-800",
      ages: "Ages 3-5"
    },
    {
      title: "Primary (Grades 1-5)",
      description: "Strong academic foundation with English medium instruction",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      badgeColor: "bg-blue-100 text-blue-800",
      ages: "Ages 6-10"
    },
    {
      title: "Secondary (Grades 6-10)",
      description: "Comprehensive curriculum preparing for board examinations",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      badgeColor: "bg-green-100 text-green-800",
      ages: "Ages 11-15"
    },
    {
      title: "Higher Secondary (Grades 11-12)",
      description: "Specialized streams in Science, Commerce, and Humanities",
      icon: Trophy,
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      badgeColor: "bg-purple-100 text-purple-800",
      ages: "Ages 16-18"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Academic Programs
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive education programs designed to nurture every child's potential 
          from early years through higher secondary education
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br ${program.bgColor}`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{program.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  <Badge variant="secondary" className={`${program.badgeColor} text-xs`}>
                    {program.ages}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
