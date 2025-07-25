import { Link } from 'react-router-dom';
import { Zap, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-foreground">CreatorConnect</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting businesses with talented content creators for impactful collaborations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm">How It Works</Link></li>
              <li><Link to="/clipper" className="text-muted-foreground hover:text-primary transition-colors text-sm">Clipper Model</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Success Stories</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Help Center</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Creator Guidelines</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Business Resources</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">API Documentation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Press</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CreatorConnect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;