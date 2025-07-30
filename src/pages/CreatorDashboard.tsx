import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Video, DollarSign, TrendingUp, Eye, Upload, Calendar, MapPin, Users, ArrowUpRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CreatorDashboard = () => {
  const [isSubmittingVideo, setIsSubmittingVideo] = useState(false);
  const [selectedAd, setSelectedAd] = useState<any>(null);
  const [videoSubmission, setVideoSubmission] = useState({
    videoLink: '',
    note: ''
  });

  const stats = [
    { title: 'Videos Submitted', value: '24', change: '+3', icon: <Video className="h-5 w-5" /> },
    { title: 'Total Views', value: '1.2M', change: '+15%', icon: <Eye className="h-5 w-5" /> },
    { title: 'Total Earnings', value: '₹3,450', change: '+₹420', icon: <DollarSign className="h-5 w-5" /> },
    { title: 'Success Rate', value: '85%', change: '+5%', icon: <TrendingUp className="h-5 w-5" /> },
  ];

  const availableAds = [
    {
      id: 1,
      title: 'Fitness App Promotion',
      company: 'FitLife Pro',
      platform: 'Instagram',
      budget: '₹500-800',
      deadline: '2024-02-15',
      requirements: 'Create a 30-second reel showcasing workout routines using our app',
      followers: '10K+'
    },
    {
      id: 2,
      title: 'Coffee Brand Review',
      company: 'Brew Masters',
      platform: 'YouTube',
      budget: '₹1200-1800',
      deadline: '2024-02-20',
      requirements: 'Honest review video (8-10 minutes) featuring our premium coffee collection',
      followers: '50K+'
    },
    {
      id: 3,
      title: 'Fashion Haul',
      company: 'Urban Trends',
      platform: 'TikTok',
      budget: '₹300-500',
      deadline: '2024-02-12',
      requirements: 'Try-on haul featuring our latest spring collection',
      followers: '5K+'
    },
    {
      id: 4,
      title: 'Tech Product Unboxing',
      company: 'GadgetZone',
      platform: 'YouTube',
      budget: '₹800-1200',
      deadline: '2024-02-25',
      requirements: 'Unboxing and first impressions of our latest smartphone accessories',
      followers: '25K+'
    }
  ];

  const myApplications = [
    {
      campaign: 'Summer Fashion Collection',
      company: 'StyleHub',
      appliedDate: '2024-01-10',
      status: 'Accepted',
      budget: '₹450',
      dueDate: '2024-01-20'
    },
    {
      campaign: 'Skincare Routine',
      company: 'GlowCare',
      appliedDate: '2024-01-12',
      status: 'Under Review',
      budget: '₹320',
      dueDate: '2024-01-25'
    },
    {
      campaign: 'Gaming Setup Tour',
      company: 'GameCorp',
      appliedDate: '2024-01-08',
      status: 'Rejected',
      budget: '₹600',
      dueDate: '2024-01-18'
    },
    {
      campaign: 'Food Delivery App',
      company: 'QuickEats',
      appliedDate: '2024-01-14',
      status: 'Pending',
      budget: '₹280',
      dueDate: '2024-01-30'
    }
  ];

  const earningsData = [
    { month: 'Oct', earnings: 820 },
    { month: 'Nov', earnings: 1150 },
    { month: 'Dec', earnings: 980 },
    { month: 'Jan', earnings: 1500 },
  ];

  const handleApply = (ad: any) => {
    toast({
      title: "Application Submitted!",
      description: `You've successfully applied for "${ad.title}". You'll hear back within 24-48 hours.`,
    });
  };

  const handleSubmitVideo = () => {
    if (!videoSubmission.videoLink) {
      toast({
        title: "Missing Video Link",
        description: "Please provide a video link to submit.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Video Submitted Successfully!",
      description: "Your video has been submitted for review. Payment will be processed after approval.",
    });

    setVideoSubmission({ videoLink: '', note: '' });
    setIsSubmittingVideo(false);
    setSelectedAd(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex!</h1>
            <p className="text-muted-foreground">Track your applications and earnings</p>
          </div>
          <Dialog open={isSubmittingVideo} onOpenChange={setIsSubmittingVideo}>
            <DialogTrigger asChild>
              <Button variant="gradient" size="lg">
                <Upload className="mr-2 h-5 w-5" />
                Submit Video
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Submit Your Video</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="videoLink">Video Link</Label>
                  <Input
                    id="videoLink"
                    placeholder="https://youtu.be/your-video-link"
                    value={videoSubmission.videoLink}
                    onChange={(e) => setVideoSubmission({...videoSubmission, videoLink: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="note">Additional Notes (Optional)</Label>
                  <Textarea
                    id="note"
                    placeholder="Any additional information about your video..."
                    value={videoSubmission.note}
                    onChange={(e) => setVideoSubmission({...videoSubmission, note: e.target.value})}
                  />
                </div>
                <Button onClick={handleSubmitVideo} className="w-full" variant="gradient">
                  Submit Video
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm flex items-center ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Available Ads */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Available Campaigns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableAds.map((ad) => (
                    <div key={ad.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{ad.title}</h3>
                          <p className="text-sm text-muted-foreground">{ad.company}</p>
                        </div>
                        <Badge variant="outline">{ad.platform}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{ad.requirements}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {ad.budget}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Due {ad.deadline}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {ad.followers} required
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleApply(ad)}
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        Apply Now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Earnings Overview */}
          <div>
            <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Earnings Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-3xl font-bold text-foreground">₹1,500</p>
                  <p className="text-sm text-success">+23% from last month</p>
                </div>
                <div className="space-y-3">
                  {earningsData.map((data, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{data.month}</span>
                      <span className="font-medium text-foreground">₹{data.earnings}</span>
                    </div>
                  ))}
                </div>
                <Button variant="gradient" className="w-full">
                  Request Payout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* My Applications */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>My Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Due Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {myApplications.map((application, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{application.campaign}</TableCell>
                    <TableCell>{application.company}</TableCell>
                    <TableCell>{application.appliedDate}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          application.status === 'Accepted' ? 'default' : 
                          application.status === 'Under Review' || application.status === 'Pending' ? 'secondary' : 
                          'destructive'
                        }
                      >
                        {application.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{application.budget}</TableCell>
                    <TableCell>{application.dueDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatorDashboard;