import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, BookOpen, MoreHorizontal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecentlyViewed() {
  const recentBooks = [
    {
      id: 1,
      title: "The Dragon's Legacy",
      author: "Marcus Vale",
      genre: "Fantasy",
      lastRead: "2 hours ago",
      progress: 78,
      currentChapter: 145,
      totalChapters: 186,
      image: "https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgxODA2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Coffee & Chronicles",
      author: "Luna Hart",
      genre: "Romance",
      lastRead: "1 day ago",
      progress: 45,
      currentChapter: 67,
      totalChapters: 149,
      image: "https://images.unsplash.com/photo-1706195546790-688005392bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9vayUyMGNvZmZlZXxlbnwxfHx8fDE3NTgxODA2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Quantum Paradox",
      author: "Dr. Elena Vasquez",
      genre: "Sci-Fi",
      lastRead: "3 days ago",
      progress: 92,
      currentChapter: 234,
      totalChapters: 255,
      image: "https://images.unsplash.com/photo-1660511715450-49e05710b1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcmVhZGluZyUyMHRhYmxldHxlbnwxfHx8fDE3NTgxODA2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "Ancient Mysteries",
      author: "Professor William Stone",
      genre: "Historical",
      lastRead: "1 week ago",
      progress: 23,
      currentChapter: 34,
      totalChapters: 148,
      image: "https://images.unsplash.com/photo-1622490836804-4069f1f6df53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3MlMjBzdGFja3xlbnwxfHx8fDE3NTgwNzQ3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl">Recently Viewed</h2>
              <p className="text-muted-foreground">Continue reading where you left off</p>
            </div>
            <Button variant="outline">
              View All
            </Button>
          </div>

          {/* Recently Viewed Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentBooks.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative">
                  <ImageWithFallback
                    src={book.image}
                    alt={book.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Button size="icon" variant="secondary" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-medium line-clamp-1">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {book.genre}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{book.lastRead}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span>{book.progress}%</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <BookOpen className="h-3 w-3" />
                      <span>Chapter {book.currentChapter} of {book.totalChapters}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="sm">
                    Continue Reading
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center justify-center space-x-4 pt-4">
            <Button variant="outline">
              Clear History
            </Button>
            <Button variant="outline">
              Export Reading List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}