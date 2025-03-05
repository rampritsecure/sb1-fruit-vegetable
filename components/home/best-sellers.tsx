'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';
import { Heart } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Organic Bananas',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'fruits',
    description: 'Fresh organic bananas from Ecuador',
  },
  {
    id: '2',
    name: 'Fresh Strawberries',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'fruits',
    description: 'Sweet and juicy strawberries',
  },
  {
    id: '3',
    name: 'Organic Avocados',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'fruits',
    description: 'Ripe and ready to eat',
  },
  {
    id: '4',
    name: 'Fresh Tomatoes',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'vegetables',
    description: 'Locally grown tomatoes',
  },
];

export default function BestSellers() {
  const { addToCart, toggleWishlist, wishlist } = useStore();

  return (
    <section className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Best Sellers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <div className="aspect-square relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={() => toggleWishlist(product)}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      wishlist.some((item) => item.id === product.id)
                        ? 'fill-primary text-primary'
                        : ''
                    }`}
                  />
                </Button>
              </div>
              <CardContent className="flex-grow p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}