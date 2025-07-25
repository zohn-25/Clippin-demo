import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Video, TrendingUp, Star, CheckCircle, DollarSign, Clock, Target } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HomePage = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Connect & Collaborate",
      description: "Bridge the gap between businesses and talented content creators"
    },
    {
      icon: <Video className="h-8 w-8 text-accent" />,
      title: "Quality Content",
      description: "Get high-quality videos that resonate with your target audience"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-success" />,
      title: "Performance Based",
      description: "Pay based on actual results and engagement metrics"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Post Your Requirements",
      description: "Business owners post detailed ad requirements with budget and timeline",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Creators Apply",
      description: "Talented creators review and apply to projects that match their skills",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Submit & Get Paid",
      description: "Creators submit videos and earn based on performance metrics",
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      content: "CreatorConnect helped us find amazing creators who delivered content that exceeded our expectations.",
      rating: 5
    },
    {
      name: "Alex Chen",
      role: "Content Creator",
      company: "250K Followers",
      content: "I've earned over $15,000 through the platform. The payment system is transparent and reliable.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Small Business Owner",
      company: "Local Cafe Chain",
      content: "The clipper model helped our videos go viral. We saw a 300% increase in foot traffic.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-secondary/30 to-accent/20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Connect
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Businesses </span>
                  with
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Creators</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The ultimate platform where businesses post ad requirements and content creators deliver viral videos. 
                  Get paid based on performance and grow together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/business-dashboard">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Continue as Business Owner
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/creator-dashboard">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 hover:bg-primary/5">
                    Continue as Content Creator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>10,000+ Active Creators</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>5,000+ Businesses</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="CreatorConnect Platform" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose CreatorConnect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make it easy for businesses and creators to collaborate and succeed together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-secondary/30">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to start your creator journey or find the perfect content for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center p-8 h-full border-0 bg-card shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-primary to-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mx-auto">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/login">
              <Button variant="gradient" size="lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied businesses and creators who've found success on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-to-br from-card to-secondary/20 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join the platform that's revolutionizing how businesses and creators collaborate. 
            Start earning or finding amazing content today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Start as Business Owner
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Join as Creator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;