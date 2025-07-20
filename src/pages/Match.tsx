import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Clock, Users, Zap, Code, Palette, BarChart3 } from "lucide-react";
import SDGBadge from "@/components/sdg/SDGBadge";
import Header from "@/components/navigation/Header";

const skillCategories = [
  {
    name: "Development",
    icon: Code,
    skills: ["Frontend Development", "Backend Development", "Mobile Apps", "Web Design", "Database Management"]
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["UI/UX Design", "Graphic Design", "Brand Design", "Video Editing", "Content Creation"]
  },
  {
    name: "Data & Analytics",
    icon: BarChart3,
    skills: ["Data Analysis", "Machine Learning", "Research", "Statistics", "Visualization"]
  },
  {
    name: "Other",
    icon: Zap,
    skills: ["Project Management", "Marketing", "Communication", "Teaching", "Translation"]
  }
];

const timeCommitments = [
  "1-2 hours/week",
  "3-5 hours/week", 
  "6-10 hours/week",
  "10+ hours/week"
];

const regions = [
  "Africa",
  "Asia", 
  "Europe",
  "North America",
  "South America",
  "Oceania",
  "Remote/Online"
];

const Match = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedSDGs, setSelectedSDGs] = useState<number[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [showMatches, setShowMatches] = useState(false);

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSDGToggle = (sdgId: number) => {
    setSelectedSDGs(prev => 
      prev.includes(sdgId)
        ? prev.filter(id => id !== sdgId)
        : [...prev, sdgId]
    );
  };

  const handleRegionToggle = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };

  const mockMatches = [
    {
      id: 1,
      title: "Education Platform Development",
      organization: "Global Learning Initiative",
      match: 95,
      location: "Remote",
      commitment: "5-8 hours/week",
      sdgs: [4, 10],
      skills: ["Frontend Development", "UI/UX Design"],
      description: "Build a learning platform for underserved communities"
    },
    {
      id: 2,
      title: "Climate Data Visualization",
      organization: "Earth Analytics Hub",
      match: 88,
      location: "Europe",
      commitment: "3-5 hours/week", 
      sdgs: [13, 14],
      skills: ["Data Analysis", "Visualization"],
      description: "Create interactive dashboards for climate research"
    },
    {
      id: 3,
      title: "Healthcare Access App",
      organization: "MedReach Foundation",
      match: 82,
      location: "Africa",
      commitment: "6-10 hours/week",
      sdgs: [3, 10],
      skills: ["Mobile Apps", "Backend Development"],
      description: "Mobile app connecting patients with healthcare services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Find Your Perfect Match
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your skills and interests, and we'll match you with impactful projects that need your expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Matching Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills Selection */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Your Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div key={category.name}>
                      <Label className="text-base font-medium flex items-center mb-3">
                        <Icon className="h-4 w-4 mr-2" />
                        {category.name}
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {category.skills.map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox
                              id={skill}
                              checked={selectedSkills.includes(skill)}
                              onCheckedChange={() => handleSkillToggle(skill)}
                            />
                            <Label htmlFor={skill} className="text-sm">
                              {skill}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* SDG Interests */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  SDG Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((sdgId) => (
                    <div
                      key={sdgId}
                      onClick={() => handleSDGToggle(sdgId)}
                      className={`cursor-pointer transition-all ${
                        selectedSDGs.includes(sdgId) 
                          ? 'ring-2 ring-primary ring-offset-2 scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      <SDGBadge goalId={sdgId} size="sm" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Time Commitment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {timeCommitments.map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <Checkbox
                        id={time}
                        checked={selectedTime === time}
                        onCheckedChange={() => setSelectedTime(time)}
                      />
                      <Label htmlFor={time} className="text-sm">
                        {time}
                      </Label>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Preferred Regions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {regions.map((region) => (
                    <div key={region} className="flex items-center space-x-2">
                      <Checkbox
                        id={region}
                        checked={selectedRegions.includes(region)}
                        onCheckedChange={() => handleRegionToggle(region)}
                      />
                      <Label htmlFor={region} className="text-sm">
                        {region}
                      </Label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Button 
              onClick={() => setShowMatches(true)}
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={selectedSkills.length === 0}
            >
              Find My Matches
            </Button>
          </div>

          {/* Matches Results */}
          <div className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">Skills</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">SDG Focus</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedSDGs.map((sdgId) => (
                      <SDGBadge key={sdgId} goalId={sdgId} size="sm" showIcon={false} />
                    ))}
                  </div>
                </div>

                {selectedTime && (
                  <div>
                    <Label className="text-sm font-medium">Time</Label>
                    <p className="text-sm text-muted-foreground">{selectedTime}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {showMatches && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Top Matches</h3>
                {mockMatches.map((match) => (
                  <Card key={match.id} className="shadow-card hover:shadow-glow transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{match.title}</h4>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {match.match}% match
                        </Badge>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-2">
                        {match.organization}
                      </p>
                      
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        {match.location}
                        <Clock className="h-3 w-3 ml-3 mr-1" />
                        {match.commitment}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        {match.sdgs.map((sdgId) => (
                          <SDGBadge key={sdgId} goalId={sdgId} size="sm" showIcon={false} />
                        ))}
                      </div>
                      
                      <Button variant="collaborate" size="sm" className="w-full">
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;