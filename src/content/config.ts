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
      description: z.string(),
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
      description: z.string(),
      primaryAction: z.string(),
      secondaryAction: z.string(),
      imageAlt: z.string(),
      imageLabel: z.string(),
      image: z.string(),
    }),
    about: z.object({
      eyebrow: z.string(),
      title: z.string(),
      image: z.string(),
      paragraphs: z.array(z.string()),
    }),
    stats: z.array(
      z.object({
        label: z.string(),
        value: z.number().nullable().optional(),
        suffix: z.string(),
      }),
    ),
    giftCards: z.object({
      amounts: z.array(z.number()),
      note: z.string(),
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
        src: z.string(),
        poster: z.string(),
        alt: z.string(),
      }),
    }),
    conversion: z.object({
      title: z.string(),
      description: z.string(),
      buttonLabel: z.string(),
      instagramTitle: z.string(),
      instagramDescription: z.string(),
    }),
    footer: z.object({
      note: z.string(),
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
    navLabel: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    duration: z.string(),
    benefits: z.array(z.string()),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    imageAlt: z.string(),
    placeholderLabel: z.string(),
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
    title: z.string(),
    description: z.string(),
    beforeSrc: z.string().optional(),
    afterSrc: z.string().optional(),
    videoSrc: z.string().optional(),
    poster: z.string().optional(),
    alt: z.string(),
  }),
});

const courses = defineCollection({
  loader: glob({ base: "./src/content/courses", pattern: "*.json" }),
  schema: z.object({
    slug: z.string(),
    order: z.number().optional(),
    title: z.string(),
    description: z.string(),
    audience: z.string(),
    duration: z.string(),
    programme: z.array(z.string()),
    kit: z.string(),
    status: z.string(),
    certificateImage: z.string().optional(),
  }),
});

const products = defineCollection({
  loader: glob({ base: "./src/content/products", pattern: "*.json" }),
  schema: z.object({
    slug: z.string(),
    order: z.number().optional(),
    name: z.string(),
    description: z.string(),
    benefits: z.array(z.string()),
    indicativePrice: z.string(),
    imageAlt: z.string(),
    image: z.string().optional(),
  }),
});

const reviews = defineCollection({
  loader: glob({ base: "./src/content/reviews", pattern: "*.json" }),
  schema: z.object({
    slug: z.string(),
    order: z.number().optional(),
    name: z.string(),
    treatment: z.string(),
    text: z.string(),
    rating: z.number().int().min(1).max(5),
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
