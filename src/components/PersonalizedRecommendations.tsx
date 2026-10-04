import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, BookOpen, Clock, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PersonalizedRecommendations() {
  const recommendations = [
    {
      id: 1,
      title: "The Midnight Chronicles",
      author: "Sarah Matthews",
      genre: "Fantasy",
      rating: 4.8,
      chapters: 245,
      status: "Ongoing",
      description: "A magical journey through realms unknown, where ancient powers clash with modern heroes.",
      image: "https://images.unsplash.com/photo-1755543832265-aa4a6b8c1414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXJzJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NTgxODA3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Magic", "Adventure", "Romance"]
    },
    {
      id: 2,
      title: "Digital Hearts",
      author: "Alex Chen",
      genre: "Sci-Fi Romance",
      rating: 4.6,
      chapters: 182,
      status: "Completed",
      description: "In a world where love transcends the digital divide, two souls find each other across virtual realms.",
      image: "https://images.unsplash.com/photo-1660511715450-49e05710b1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcmVhZGluZyUyMHRhYmxldHxlbnwxfHx8fDE3NTgxODA2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Technology", "Romance", "Future"]
    },
    {
      id: 3,
      title: "Vintage Secrets",
      author: "Emma Richardson",
      genre: "Historical Mystery",
      rating: 4.7,
      chapters: 156,
      status: "Ongoing",
      description: "Unraveling mysteries hidden within the pages of antique books, where every clue leads deeper into the past.",
      image: "https://images.unsplash.com/photo-1622490836804-4069f1f6df53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3MlMjBzdGFja3xlbnwxfHx8fDE3NTgwNzQ3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mystery", "Historical", "Suspense"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl">Recommended for You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Based on your reading history and preferences, we've curated these novels just for you
            </p>
          </div>

          {/* Recommendations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <ImageWithFallback
                    src={book.image}
                    alt={book.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge 
                    variant={book.status === 'Completed' ? 'default' : 'secondary'} 
                    className="absolute bottom-3 left-3"
                  >
                    {book.status}
                  </Badge>
                </div>
                
                <CardHeader className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="line-clamp-1">{book.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{book.genre}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{book.rating}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {book.description}
                  </p>

                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-3 w-3" />
                      <span>{book.chapters} chapters</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>~{Math.floor(book.chapters * 5 / 60)}h read</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {book.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button className="flex-1">Read Now</Button>
                    <Button variant="outline" size="icon">
                      <BookOpen className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center pt-8">
            <Button variant="outline" size="lg">
              View All Recommendations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}