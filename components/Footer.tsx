import React from 'react';
import { BookOpen, Github, Twitter, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl">NovelFull</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Your premier destination for online novel reading. Discover thousands of stories across all genres and connect with a vibrant reading community.
            </p>
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wider">Browse</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Popular Novels</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Latest Updates</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Completed Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Top Rated</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Random Novel</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Fantasy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Romance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sci-Fi</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Mystery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Historical</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wider">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get notified about new releases and featured novels.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-input-background"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              DMCA
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2025 NovelFull. All rights reserved.</span>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>support@novelfull.net</span>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About Us</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Help Center</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Community Guidelines</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Author Guidelines</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Report Content</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">API Documentation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}