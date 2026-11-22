import { getCollection, getEntry } from "astro:content";

export async function getStudio() {
  const entry = await getEntry("studio", "settings");
  if (!entry) {
    throw new Error('Missing required studio settings entry: "studio/settings.json".');
  }
  return entry.data;
}

export async function getTreatments() {
  const entries = await getCollection("treatments");
  return entries.map(({ data }) => data).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getGallery() {
  const entries = await getCollection("prima-e-dopo");
  return entries.map(({ data }) => data).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getCourses() {
  const entries = await getCollection("courses");
  return entries.map(({ data }) => data).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getProducts() {
  const entries = await getCollection("products");
  return entries.map(({ data }) => data).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getReviews() {
  const entries = await getCollection("reviews");
  return entries.map(({ data }) => data).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getWhatsAppUrl(
  studio: Awaited<ReturnType<typeof getStudio>>,
  message = "Ciao Marylin, vorrei ricevere informazioni sui trattamenti di MAR STUDIO.",
): string | undefined {
  const phone = studio.contact.whatsappNumber.replace(/\D/g, "");
  if (!phone) return undefined;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
