import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const objects = defineCollection({
  loader: glob({ base: './src/content/objects', pattern: '**/*.{md,mdx,mdoc}' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Vessels', 'Tableware', 'Lighting']).default('Vessels'),
    priceEur: z.number().int().default(180),
    priceLabel: z.string().default('€180'),
    dimensions: z.string().default('20 × 14 cm'),
    clayBody: z.string().default('Speckled Buff Stoneware'),
    firingTemp: z.string().default('1,260°C Reduction'),
    availability: z.string().default('In Stock · Ships in 3 days'),
    careNotes: z.string().default('Hand wash recommended for unglazed exterior rims; food-safe interior glaze.'),
    summary: z.string(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    hoverImage: z.string().optional(),
    hoverAlt: z.string().optional(),
    glazes: z
      .array(
        z.object({
          name: z.string(),
          hex: z.string(),
          finish: z.string(),
        })
      )
      .default([]),
    gallery: z
      .array(
        z.object({
          image: z.string(),
          alt: z.string(),
        })
      )
      .default([]),
    order: z.number().int().default(1),
    featured: z.boolean().default(true),
    gridSpan: z.enum(['wide', 'compact', 'full']).default('wide'),
  }),
});

const studio = defineCollection({
  loader: glob({ base: './src/content/studio', pattern: '**/*.json' }),
  schema: z.object({
    brandName: z.string(),
    headline: z.string(),
    subline: z.string(),
    kilnBatch: z.string(),
    location: z.string(),
    hours: z.string(),
    email: z.string(),
    disclosure: z.string(),
    craftStages: z
      .array(
        z.object({
          step: z.string(),
          title: z.string(),
          temperatureOrDuration: z.string(),
          description: z.string(),
          details: z.array(z.string()).default([]),
        })
      )
      .default([]),
  }),
});

export const collections = { objects, studio };
