import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Eye, TrendingUp, Users, DollarSign, Wallet, ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BusinessDashboard = () => {
  const [isPostingAd, setIsPostingAd] = useState(false);
  const [newAd, setNewAd] = useState({
    title: '',
    description: '',
    platform: '',
    budget: '',
    deadline: ''
  });

  const stats = [
    { title: 'Total Views', value: '2.4M', change: '+12%', icon: <Eye className="h-5 w-5" /> },
    { title: 'Active Campaigns', value: '8', change: '+2', icon: <TrendingUp className="h-5 w-5" /> },
    { title: 'Total Creators', value: '156', change: '+23', icon: <Users className="h-5 w-5" /> },
    { title: 'Amount Spent', value: '$12,400', change: '-5%', icon: <DollarSign className="h-5 w-5" /> },
  ];

  const myAds = [
    {
      id: 1,
      title: 'Summer Fashion Collection',
      platform: 'Instagram',
      budget: '$2,000',
      status: 'Active',
      applications: 12,
      submitted: 5
    },
    {
      id: 2,
      title: 'Tech Product Review',
      platform: 'YouTube',
      budget: '$3,500',
      status: 'Active',
      applications: 8,
      submitted: 3
    },
    {
      id: 3,
      title: 'Food Delivery App Promo',
      platform: 'TikTok',
      budget: '$1,500',
      status: 'Completed',
      applications: 15,
      submitted: 8
    }
  ];

  const submissions = [
    {
      creator: 'Emma Johnson',
      campaign: 'Summer Fashion Collection',
      video: 'https://youtu.be/sample1',
      views: '125K',
      engagement: '8.5%',
      status: 'Approved',
      payment: '$450'
    },
    {
      creator: 'Alex Chen',
      campaign: 'Tech Product Review',
      video: 'https://youtu.be/sample2',
      views: '89K',
      engagement: '12.3%',
      status: 'Under Review',
      payment: 'Pending'
    },
    {
      creator: 'Maria Santos',
      campaign: 'Summer Fashion Collection',
      video: 'https://youtu.be/sample3',
      views: '67K',
      engagement: '6.2%',
      status: 'Rejected',
      payment: '-'
    }
  ];

  const transactions = [
    { date: '2024-01-15', description: 'Campaign Payment - Summer Fashion', amount: '-$450', status: 'Completed' },
    { date: '2024-01-14', description: 'Wallet Top-up', amount: '+$2,000', status: 'Completed' },
    { date: '2024-01-12', description: 'Campaign Payment - Tech Review', amount: '-$320', status: 'Completed' },
    { date: '2024-01-10', description: 'Refund - Cancelled Campaign', amount: '+$150', status: 'Completed' }
  ];

  const handlePostAd = () => {
    if (!newAd.title || !newAd.description || !newAd.platform || !newAd.budget) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Ad Posted Successfully!",
      description: "Your ad has been posted and is now visible to creators.",
    });

    setNewAd({ title: '', description: '', platform: '', budget: '', deadline: '' });
    setIsPostingAd(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah!</h1>
            <p className="text-muted-foreground">Manage your campaigns and track performance</p>
          </div>
          <Dialog open={isPostingAd} onOpenChange={setIsPostingAd}>
            <DialogTrigger asChild>
              <Button variant="gradient" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Post New Ad
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Campaign</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Campaign Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Summer Fashion Collection"
                    value={newAd.title}
                    onChange={(e) => setNewAd({...newAd, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your campaign requirements..."
                    value={newAd.description}
                    onChange={(e) => setNewAd({...newAd, description: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Select value={newAd.platform} onValueChange={(value) => setNewAd({...newAd, platform: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget ($)</Label>
                    <Input
                      id="budget"
                      placeholder="2000"
                      value={newAd.budget}
                      onChange={(e) => setNewAd({...newAd, budget: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={newAd.deadline}
                      onChange={(e) => setNewAd({...newAd, deadline: e.target.value})}
                    />
                  </div>
                </div>
                <Button onClick={handlePostAd} className="w-full" variant="gradient">
                  Post Campaign
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
          {/* My Ads */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  My Active Campaigns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myAds.map((ad) => (
                    <div key={ad.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{ad.title}</h3>
                        <Badge variant={ad.status === 'Active' ? 'default' : 'secondary'}>
                          {ad.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {ad.platform}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {ad.budget}
                        </div>
                        <div>{ad.applications} Applications</div>
                        <div>{ad.submitted} Submitted</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Wallet */}
          <div>
            <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Available Balance</p>
                  <p className="text-3xl font-bold text-foreground">$8,450</p>
                </div>
                <Button variant="gradient" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Funds
                </Button>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Recent Transactions</h4>
                  {transactions.slice(0, 3).map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <div>
                        <p className="text-foreground">{transaction.description}</p>
                        <p className="text-muted-foreground">{transaction.date}</p>
                      </div>
                      <span className={transaction.amount.startsWith('+') ? 'text-success' : 'text-destructive'}>
                        {transaction.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Submissions Table */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Video Submissions & Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Creator</TableHead>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{submission.creator}</TableCell>
                    <TableCell>{submission.campaign}</TableCell>
                    <TableCell>{submission.views}</TableCell>
                    <TableCell>{submission.engagement}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          submission.status === 'Approved' ? 'default' : 
                          submission.status === 'Under Review' ? 'secondary' : 
                          'destructive'
                        }
                      >
                        {submission.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{submission.payment}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
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

export default BusinessDashboard;