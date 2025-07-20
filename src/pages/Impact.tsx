import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Users, Target, Calendar, Award, MapPin, Heart } from "lucide-react";
import SDGBadge from "@/components/sdg/SDGBadge";
import Header from "@/components/navigation/Header";

const Impact = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("year");

  const impactMetrics = {
    totalProjects: 47,
    totalVolunteers: 1240,
    totalBeneficiaries: 125000,
    completedProjects: 32,
    activeProjects: 15,
    averageRating: 4.8
  };

  const sdgProgress = [
    { id: 1, name: "No Poverty", progress: 75, projects: 8, impact: "15,000 people supported" },
    { id: 3, name: "Good Health", progress: 82, projects: 12, impact: "25,000 lives improved" },
    { id: 4, name: "Quality Education", progress: 90, projects: 15, impact: "50,000 students reached" },
    { id: 6, name: "Clean Water", progress: 65, projects: 6, impact: "8,000 people with access" },
    { id: 13, name: "Climate Action", progress: 71, projects: 9, impact: "500 tons CO2 reduced" },
    { id: 16, name: "Peace & Justice", progress: 58, projects: 4, impact: "20 communities empowered" }
  ];

  const recentMilestones = [
    {
      id: 1,
      title: "Education Platform Launch",
      date: "2024-01-15",
      impact: "Reached 10,000 students in first month",
      sdg: 4,
      organization: "Global Learning Initiative"
    },
    {
      id: 2,
      title: "Clean Water Sensors Deployed",
      date: "2024-01-10",
      impact: "Monitoring 50 water sources across 3 countries", 
      sdg: 6,
      organization: "WaterWatch Initiative"
    },
    {
      id: 3,
      title: "Climate App Beta Release",
      date: "2024-01-05",
      impact: "5,000 users tracking carbon footprint",
      sdg: 13,
      organization: "EcoTracker Foundation"
    }
  ];

  const topContributors = [
    { name: "Sarah Chen", projects: 8, hours: 320, expertise: "Frontend Development" },
    { name: "Miguel Rodriguez", projects: 6, hours: 280, expertise: "Data Science" },
    { name: "Amara Okafor", projects: 7, hours: 250, expertise: "UI/UX Design" },
    { name: "Kai Tanaka", projects: 5, hours: 200, expertise: "Backend Development" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Impact Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track the real-world impact of our collaborative efforts across all Sustainable Development Goals.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{impactMetrics.totalProjects}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold text-foreground">{impactMetrics.totalVolunteers.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Volunteers</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-sdg-health" />
              <div className="text-2xl font-bold text-foreground">{(impactMetrics.totalBeneficiaries / 1000).toFixed(0)}K</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-accent-foreground" />
              <div className="text-2xl font-bold text-foreground">{impactMetrics.completedProjects}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{impactMetrics.activeProjects}</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold text-foreground">{impactMetrics.averageRating}</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sdg-progress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="sdg-progress">SDG Progress</TabsTrigger>
            <TabsTrigger value="milestones">Recent Milestones</TabsTrigger>
            <TabsTrigger value="contributors">Top Contributors</TabsTrigger>
          </TabsList>

          <TabsContent value="sdg-progress" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  SDG Progress Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sdgProgress.map((sdg) => (
                    <div key={sdg.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <SDGBadge goalId={sdg.id} size="sm" />
                        <span className="text-sm font-medium">{sdg.progress}%</span>
                      </div>
                      <Progress value={sdg.progress} className="h-2" />
                      <div className="text-sm text-muted-foreground">
                        <div>{sdg.projects} active projects</div>
                        <div className="font-medium text-foreground">{sdg.impact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Recent Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMilestones.map((milestone) => (
                    <div key={milestone.id} className="border-l-4 border-primary pl-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{milestone.title}</h4>
                        <SDGBadge goalId={milestone.sdg} size="sm" />
                      </div>
                      <p className="text-sm text-muted-foreground">{milestone.organization}</p>
                      <p className="text-sm font-medium text-secondary">{milestone.impact}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(milestone.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contributors" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Top Contributors This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={contributor.name} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium">{contributor.name}</h4>
                          <p className="text-sm text-muted-foreground">{contributor.expertise}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{contributor.projects} projects</div>
                        <div className="text-sm text-muted-foreground">{contributor.hours}h contributed</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-hero text-primary-foreground shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Increase Your Impact?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join new projects and help us reach even more people in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Explore Projects
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Share Your Story
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impact;