'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, Clock, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Free delivery for orders over $50',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Fresh and high-quality produce',
  },
  {
    icon: Clock,
    title: 'Same Day Delivery',
    description: 'Order before 2 PM for same day delivery',
  },
  {
    icon: Leaf,
    title: 'Organic Options',
    description: 'Wide selection of organic produce',
  },
];

export default function Benefits() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <benefit.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}