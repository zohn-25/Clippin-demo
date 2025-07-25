import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Video, Upload, TrendingUp, Eye, DollarSign, Clock, Users, Star, Play } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ClipperPage = () => {
  const [isSubmittingClip, setIsSubmittingClip] = useState(false);
  const [clipSubmission, setClipSubmission] = useState({
    videoLink: '',
    originalVideo: ''
  });

  const heroStats = [
    { label: 'Active Clippers', value: '2.3K+' },
    { label: 'Clips Created', value: '45K+' },
    { label: 'Total Payouts', value: '$280K+' },
    { label: 'Avg. Earnings', value: '$85/clip' }
  ];

  const availableProjects = [
    {
      id: 1,
      creator: 'MrTechReviews',
      followers: '2.3M',
      videoTitle: 'iPhone 15 Pro Max Complete Review',
      duration: '25:30',
      uploaded: '2 days ago',
      requirements: 'Create 30-60 second highlight clips focusing on camera features',
      paymentPerClip: '$50-120',
      clipsNeeded: 5,
      deadline: '3 days'
    },
    {
      id: 2,
      creator: 'FoodieAdventures',
      followers: '1.8M',
      videoTitle: 'Trying 100 Different Street Foods',
      duration: '18:45',
      uploaded: '1 day ago',
      requirements: 'Short clips (15-30s) of the most interesting food reactions',
      paymentPerClip: '$30-80',
      clipsNeeded: 8,
      deadline: '2 days'
    },
    {
      id: 3,
      creator: 'FitnessWithSara',
      followers: '1.2M',
      videoTitle: 'Full Body Workout Routine',
      duration: '32:15',
      uploaded: '4 hours ago',
      requirements: 'Exercise demonstration clips (45-90s) with motivational moments',
      paymentPerClip: '$40-100',
      clipsNeeded: 6,
      deadline: '5 days'
    }
  ];

  const myClips = [
    {
      originalVideo: 'iPhone 15 Pro Review',
      creator: 'MrTechReviews',
      clipTitle: 'Mind-blowing Camera Quality',
      submitted: '2024-01-15',
      status: 'Viral',
      views: '1.2M',
      engagement: '8.5%',
      earnings: '$150'
    },
    {
      originalVideo: 'Street Food Challenge',
      creator: 'FoodieAdventures',
      clipTitle: 'Spiciest Food Reaction Ever',
      submitted: '2024-01-12',
      status: 'Popular',
      views: '450K',
      engagement: '12.3%',
      earnings: '$85'
    },
    {
      originalVideo: 'Gaming Setup Tour',
      creator: 'TechGuru',
      clipTitle: 'Ultimate RGB Setup',
      submitted: '2024-01-10',
      status: 'Under Review',
      views: '25K',
      engagement: '6.2%',
      earnings: 'Pending'
    },
    {
      originalVideo: 'Workout Motivation',
      creator: 'FitnessWithSara',
      clipTitle: 'Before & After Transformation',
      submitted: '2024-01-08',
      status: 'Approved',
      views: '89K',
      engagement: '9.1%',
      earnings: '$45'
    }
  ];

  const handleSubmitClip = () => {
    if (!clipSubmission.videoLink || !clipSubmission.originalVideo) {
      toast({
        title: "Missing Information",
        description: "Please provide both the clip link and select the original video.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Clip Submitted Successfully!",
      description: "Your clip has been submitted for review. You'll be notified about approval and payment.",
    });

    setClipSubmission({ videoLink: '', originalVideo: '' });
    setIsSubmittingClip(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              The Clipper Model
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Turn viral moments into earnings. Large creators share their long-form content, 
              and talented editors create engaging short clips that go viral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isSubmittingClip} onOpenChange={setIsSubmittingClip}>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Upload className="mr-2 h-5 w-5" />
                    Submit Your Clip
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Submit Your Clip</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="originalVideo">Original Video Project</Label>
                      <select 
                        className="w-full p-2 border border-input rounded-md bg-background"
                        value={clipSubmission.originalVideo}
                        onChange={(e) => setClipSubmission({...clipSubmission, originalVideo: e.target.value})}
                      >
                        <option value="">Select a project</option>
                        {availableProjects.map((project) => (
                          <option key={project.id} value={project.videoTitle}>
                            {project.videoTitle} - {project.creator}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clipLink">Your Clip Link</Label>
                      <Input
                        id="clipLink"
                        placeholder="https://youtu.be/your-clip-link"
                        value={clipSubmission.videoLink}
                        onChange={(e) => setClipSubmission({...clipSubmission, videoLink: e.target.value})}
                      />
                    </div>
                    <Button onClick={handleSubmitClip} className="w-full" variant="gradient">
                      Submit Clip
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn How It Works
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* How It Works */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            How the Clipper Model Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">1. Browse Projects</h3>
                <p className="text-muted-foreground">
                  Large creators upload their long-form videos and set requirements for clips they need
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-8 space-y-4">
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Upload className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">2. Create & Submit</h3>
                <p className="text-muted-foreground">
                  Create engaging short clips from their content and submit them for approval
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-8 space-y-4">
                <div className="bg-success/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">3. Earn from Performance</h3>
                <p className="text-muted-foreground">
                  Get paid based on clip performance - the more viral your clip, the more you earn
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Available Projects */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Available Clipping Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {availableProjects.map((project) => (
                <div key={project.id} className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-foreground">{project.videoTitle}</h3>
                        <Badge variant="outline">{project.duration}</Badge>
                        <Badge variant="secondary">{project.uploaded}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.creator} • {project.followers}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {project.deadline} left
                        </div>
                      </div>
                      <p className="text-muted-foreground">{project.requirements}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1 text-success">
                          <DollarSign className="h-4 w-4" />
                          {project.paymentPerClip} per clip
                        </div>
                        <div>
                          <span className="text-primary font-medium">{project.clipsNeeded} clips needed</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview Video
                      </Button>
                      <Button variant="gradient" size="sm" onClick={() => setIsSubmittingClip(true)}>
                        Start Clipping
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Clip Stats */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>My Clip Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Original Video</TableHead>
                  <TableHead>Creator</TableHead>
                  <TableHead>Clip Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Earnings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {myClips.map((clip, index) => (
                  <TableRow key={index}>
                    <TableCell>{clip.originalVideo}</TableCell>
                    <TableCell>{clip.creator}</TableCell>
                    <TableCell className="font-medium">{clip.clipTitle}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          clip.status === 'Viral' ? 'default' : 
                          clip.status === 'Popular' || clip.status === 'Approved' ? 'secondary' : 
                          clip.status === 'Under Review' ? 'outline' :
                          'destructive'
                        }
                      >
                        {clip.status === 'Viral' && <Star className="mr-1 h-3 w-3" />}
                        {clip.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{clip.views}</TableCell>
                    <TableCell>{clip.engagement}</TableCell>
                    <TableCell className="font-medium text-success">{clip.earnings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Earning Potential */}
        <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Ready to Start Earning?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators who are earning money by creating viral clips. 
              The average clipper earns $85 per clip, with top performers making $200+ per viral clip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" onClick={() => setIsSubmittingClip(true)}>
                Submit Your First Clip
              </Button>
              <Button variant="outline" size="lg">
                View Success Stories
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClipperPage;