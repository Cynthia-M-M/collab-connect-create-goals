import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, Clock, Heart } from "lucide-react";
import SDGBadge from "@/components/sdg/SDGBadge";
import Header from "@/components/navigation/Header";

// Mock project data
const mockProjects = [
  {
    id: 1,
    title: "Digital Literacy for Rural Schools",
    description: "Teaching essential digital skills to students in remote areas to bridge the education gap.",
    organization: "EduTech Global",
    location: "Kenya, East Africa",
    sdgGoals: [4, 10],
    volunteersNeeded: 15,
    volunteersJoined: 8,
    timeCommitment: "3-6 months",
    skills: ["Teaching", "Technology", "Content Creation"],
    impact: "Reached 500+ students across 12 schools",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
  },
  {
    id: 2,
    title: "Clean Water Monitoring System",
    description: "Developing IoT sensors to monitor water quality in rural communities.",
    organization: "WaterWatch Initiative",
    location: "India, South Asia",
    sdgGoals: [6, 9],
    volunteersNeeded: 8,
    volunteersJoined: 3,
    timeCommitment: "6-12 months",
    skills: ["Engineering", "IoT", "Data Analysis"],
    impact: "Monitoring 25 water sources, serving 10,000+ people",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800",
  },
  {
    id: 3,
    title: "Urban Farming Education Platform",
    description: "Creating an app to teach sustainable urban farming techniques.",
    organization: "GreenCity Collective",
    location: "Brazil, South America",
    sdgGoals: [2, 11, 12],
    volunteersNeeded: 12,
    volunteersJoined: 7,
    timeCommitment: "4-8 months",
    skills: ["App Development", "Agriculture", "UX/UI Design"],
    impact: "800+ users, 50+ community gardens established",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800",
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSDG, setSelectedSDG] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSDG = !selectedSDG || project.sdgGoals.includes(parseInt(selectedSDG));
    const matchesLocation = !selectedLocation || project.location.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesSearch && matchesSDG && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Discover Impactful Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hands with NGOs and changemakers worldwide to tackle the most pressing challenges of our time.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Search projects, skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="col-span-1 md:col-span-2"
            />
            <Select value={selectedSDG} onValueChange={setSelectedSDG}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by SDG" />
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border z-50">
                <SelectItem value="">All SDGs</SelectItem>
                <SelectItem value="1">SDG 1: No Poverty</SelectItem>
                <SelectItem value="2">SDG 2: Zero Hunger</SelectItem>
                <SelectItem value="3">SDG 3: Good Health</SelectItem>
                <SelectItem value="4">SDG 4: Quality Education</SelectItem>
                <SelectItem value="6">SDG 6: Clean Water</SelectItem>
                <SelectItem value="9">SDG 9: Innovation</SelectItem>
                <SelectItem value="11">SDG 11: Sustainable Cities</SelectItem>
                <SelectItem value="13">SDG 13: Climate Action</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Region" />
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border z-50">
                <SelectItem value="">All Regions</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="america">Americas</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                  {project.sdgGoals.map(goalId => (
                    <SDGBadge key={goalId} goalId={goalId} size="sm" />
                  ))}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-primary" />
                    <span>{project.volunteersJoined}/{project.volunteersNeeded} volunteers</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-primary" />
                    <span>{project.timeCommitment}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 mr-1 text-secondary" />
                  <span className="font-medium">{project.impact}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="collaborate" size="sm" className="flex-1">
                    Learn More
                  </Button>
                  <Button variant="sdg" size="sm" className="flex-1">
                    Join Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;