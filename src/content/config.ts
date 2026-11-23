import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const studio = defineCollection({
  loader: glob({ base: "./src/content/studio", pattern: "*.json" }),
  schema: z.object({
    brand: z.object({
      name: z.string(),
      displayName: z.string(),
      owner: z.string(),
      descriptor: z.string(),
      tagline: z.string(),
      description: z.string().optional(),
    }),
    contact: z.object({
      whatsappNumber: z.string(),
      phoneDisplay: z.string(),
      email: z.string(),
      address: z.object({
        street: z.string(),
        postalCode: z.string(),
        locality: z.string(),
        province: z.string(),
      }),
      openingHours: z.string(),
      web3FormsAccessKey: z.string(),
    }),
    social: z.object({
      instagramUrl: z.string(),
      instagramHandle: z.string(),
      mapsSearchUrl: z.string(),
      mapsEmbedUrl: z.string(),
    }),
    navigation: z.array(z.object({ label: z.string(), href: z.string() })),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string().optional(),
      primaryAction: z.string(),
      secondaryAction: z.string(),
      imageAlt: z.string(),
      imageLabel: z.string(),
      image: z.string().optional(),
      heroVideo: z.string().optional(),
      heroPoster: z.string().optional(),
    }),
    about: z.object({
      eyebrow: z.string(),
      title: z.string(),
      image: z.string().optional(),
      paragraphs: z.array(z.string()).optional(),
    }),
    stats: z.array(
      z.object({
        label: z.string(),
        value: z.number().nullable().optional(),
        suffix: z.string().optional(),
      }),
    ),
    giftCards: z.object({
      amounts: z.array(z.number()),
      note: z.string().optional(),
    }),
    mediaPlaceholders: z.array(
      z.object({
        label: z.string(),
        alt: z.string(),
        category: z.string(),
      }),
    ),
    media: z.object({
      studioVideo: z.object({
        src: z.string().optional(),
        poster: z.string(),
        alt: z.string(),
      }),
    }),
    conversion: z.object({
      title: z.string(),
      description: z.string().optional(),
      buttonLabel: z.string(),
      instagramTitle: z.string(),
      instagramDescription: z.string().optional(),
    }),
    footer: z.object({
      note: z.string().optional(),
      privacyLabel: z.string(),
      cookiesLabel: z.string(),
    }),
  }),
});

const treatments = defineCollection({
  loader: glob({ base: "./src/content/treatments", pattern: "*.json" }),
  schema: z.object({
    slug: z.string(),
    order: z.number().optional(),
    name: z.string(),
    navLabel: z.string().optional(),
    shortDescription: z.string().optional(),
    description: z.string().optional(),
    duration: z.string().optional(),
    benefits: z.array(z.string()).optional(),
    faqs: z.array(z.object({
      question: z.string().optional(),
      answer: z.string().optional(),
    })).optional(),
    imageAlt: z.string().optional(),
    placeholderLabel: z.string().optional(),
    image: z.string().optional(),
  }),
});

const primaEDopo = defineCollection({
  loader: glob({ base: "./src/content/prima-e-dopo", pattern: "*.json" }),
  schema: z.object({
    id: z.string(),
    order: z.number().optional(),
    category: z.enum([
      "pmu",
      "microblading",
      "lentiggini",
      "laminazione",
      "piercing",
      "gemme-dentali",
    ]),
    format: z.enum(["photo", "video"]),
    title: z.string().optional(),
    description: z.string().optional(),
    beforeSrc: z.string().optional(),
    afterSrc: z.string().optional(),
    videoSrc: z.string().optional(),
    poster: z.string().optional(),
    alt: z.string().optional(),
  }),
});

const courses = defineCollection({
  loader: glob({ base: "./src/content/courses", pattern: "*.json" }),
  schema: z.object({
    slug: z.string(),
    order: z.number().optional(),
    title: z.string(),
    description: z.string().optional(),
    audience: z.string().optional(),
    duration: z.string().optional(),
    programme: z.array(z.string()).optional(),
    kit: z.string().optional(),
    status: z.string().optional(),
    certificateImage: z.string().optional(),
  }),
});

const products = defineCollection({
  loader: glob({ base: "./src/content/products", pattern: "*.json" }),
  schema: z.object({
    slug: z.string(),
    order: z.number().optional(),
    name: z.string(),
    description: z.string().optional(),
    benefits: z.array(z.string()).optional(),
    indicativePrice: z.string().optional(),
    imageAlt: z.string().optional(),
    image: z.string().optional(),
  }),
});

const reviews = defineCollection({
  loader: glob({ base: "./src/content/reviews", pattern: "*.json" }),
  schema: z.object({
    slug: z.string(),
    order: z.number().optional(),
    name: z.string(),
    treatment: z.string().optional(),
    text: z.string().optional(),
    rating: z.number().int().min(1).max(5).optional(),
  }),
});

export const collections = {
  studio,
  treatments,
  "prima-e-dopo": primaEDopo,
  courses,
  products,
  reviews,
};
