'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: '10 Benefits of Eating Seasonal Fruits',
    excerpt: 'Discover why eating fruits in season is better for your health and the environment.',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'Guide to Storing Vegetables',
    excerpt: 'Learn the best practices for keeping your vegetables fresh for longer.',
    image: 'https://images.unsplash.com/photo-1466551773709-5673c29c8dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-12',
  },
  {
    id: 3,
    title: 'Organic vs. Conventional Produce',
    excerpt: 'Understanding the differences and making informed choices for your health.',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10',
  },
];

export default function LatestPosts() {
  return (
    <section className="container">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
        <Button variant="outline" asChild>
          <Link href="/blog">View All Posts</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
              </div>
              <CardContent className="flex-grow p-6">
                <time className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="font-semibold text-lg mt-2 mb-3">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}