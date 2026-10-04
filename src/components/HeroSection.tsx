import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, TrendingUp, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background via-accent/30 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl leading-tight">
                Discover Your Next
                <span className="text-primary block">Favorite Novel</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Explore thousands of novels across all genres. From fantasy epics to contemporary romance, find your perfect read.
              </p>
            </div>

            {/* Search bar */}
            <div className="space-y-4">
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for novels, authors, genres..." 
                  className="pl-12 h-12 bg-input-background"
                />
                <Button className="absolute right-2 top-2 h-8">
                  Search
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">50K+ Novels</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Daily Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Community Rated</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8">
                Start Reading
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Browse Categories
              </Button>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660606422278-ec5aa459fb99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzU4MTgwNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern library with books"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-lg border max-w-48">
                <div className="flex items-center space-x-3">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgxODA2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Fantasy novel cover"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-sm">Trending Now</p>
                    <p className="text-xs text-muted-foreground">The Dragon's Legacy</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">4.8</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg border max-w-48">
                <div className="flex items-center space-x-3">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1706195546790-688005392bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9vayUyMGNvZmZlZXxlbnwxfHx8fDE3NTgxODA2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Reading book with coffee"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-sm">Recently Added</p>
                    <p className="text-xs text-muted-foreground">Coffee & Chronicles</p>
                    <p className="text-xs text-muted-foreground">Chapter 15 • 2h ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}