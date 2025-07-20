import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Users, Target, BarChart3, Heart, Lightbulb, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/navigation/Header";
import SDGBadge from "@/components/sdg/SDGBadge";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Project Matching",
      description: "Connect with SDG-aligned projects that match your skills and passion for change.",
      color: "text-sdg-education",
    },
    {
      icon: Users,
      title: "Volunteer Network",
      description: "Join a global community of developers, NGOs, and youth leaders working for impact.",
      color: "text-primary",
    },
    {
      icon: BarChart3,
      title: "Impact Tracking",
      description: "Measure and visualize the real-world impact of your collaborative efforts.",
      color: "text-secondary",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Work on projects spanning all continents, addressing diverse challenges.",
      color: "text-sdg-climate",
    },
  ];

  const stats = [
    { number: "150+", label: "Active Projects", icon: Target },
    { number: "2,500+", label: "Volunteers", icon: Users },
    { number: "50+", label: "Countries", icon: Globe },
    { number: "1M+", label: "Lives Impacted", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-accent/20 text-primary border-primary/20">
              🌍 Building a Sustainable Future Together
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Collaborate
              </span>
              <br />
              <span className="text-foreground">for the SDGs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect developers, NGOs, and youth leaders worldwide to tackle the UN Sustainable Development Goals through innovative technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/projects">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="collaborate" 
                size="lg" 
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/match">
                  Find Your Match
                  <Handshake className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Featured SDG Goals */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {[1, 4, 6, 13, 16].map(goalId => (
                <SDGBadge key={goalId} goalId={goalId} size="md" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering <span className="bg-gradient-hero bg-clip-text text-transparent">Collaboration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform brings together diverse talents and organizations to create meaningful impact on global challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50 hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:animate-glow-pulse`}>
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Lightbulb className="h-16 w-16 mx-auto mb-6 animate-glow-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of changemakers already collaborating on projects that matter. Your skills can help solve the world's most pressing challenges.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/signup">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
