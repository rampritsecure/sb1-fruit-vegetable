'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Sweet and juicy fruits from local farms',
  },
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Crisp and nutritious vegetables',
  },
  {
    id: 'organic',
    name: 'Organic Produce',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Certified organic fruits and vegetables',
  },
  {
    id: 'seasonal',
    name: 'Seasonal Items',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Best picks of the season',
  },
];

export default function FeaturedCategories() {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/categories/${category.id}`}>
              <Card className="group cursor-pointer overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                </div>
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-white/80">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}