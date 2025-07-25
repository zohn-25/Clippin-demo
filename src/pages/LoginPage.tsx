import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Mail, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !role) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and select your role.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful!",
        description: `Welcome back! Redirecting to your ${role.toLowerCase()} dashboard.`,
      });

      // Redirect based on role
      if (role === 'business') {
        navigate('/business-dashboard');
      } else {
        navigate('/creator-dashboard');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Welcome Back
            </CardTitle>
            <p className="text-muted-foreground">
              Sign in to your CreatorConnect account
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium">
                  I am a
                </Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business">Business Owner</SelectItem>
                    <SelectItem value="creator">Content Creator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full" 
                variant="gradient" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Demo Login Options */}
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setEmail('demo@business.com');
                    setPassword('demo123');
                    setRole('business');
                  }}
                  className="text-sm"
                >
                  Demo Business
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setEmail('demo@creator.com');
                    setPassword('demo123');
                    setRole('creator');
                  }}
                  className="text-sm"
                >
                  Demo Creator
                </Button>
              </div>
            </div>

            <div className="text-center space-y-2">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot your password?
              </a>
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <a href="#" className="text-primary hover:underline">
                  Sign up here
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Access Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Quick access to dashboards:
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/business-dashboard">
              <Button variant="outline" size="sm">
                Business Dashboard
              </Button>
            </Link>
            <Link to="/creator-dashboard">
              <Button variant="outline" size="sm">
                Creator Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;