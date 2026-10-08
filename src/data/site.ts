/**
 * Every piece of business copy lives here. Edit this file to change the site —
 * phone numbers, services, testimonials and headlines all read from it.
 */

// Digits only, country code first. Used to build wa.me and tel: links.
const phoneDigits = "971556106648";

export const site = {
  name: "Nisar Ahmed Landscape & Gardening",
  shortName: "Nisar Ahmed Landscape",
  tagline: "Landscaping & garden care across Dubai",
  description:
    "Nisar Ahmed Landscape & Gardening designs, builds and maintains gardens across Dubai — artificial grass, pergolas, paving, planting, irrigation and regular garden maintenance.",
  city: "Dubai",
  country: "United Arab Emirates",
  serviceAreas: [
    "Dubai Hills",
    "Arabian Ranches",
    "Damac Hills",
    "Jumeirah",
    "Town Square",
    "Tilal Al Ghaf",
    "Mudon",
    "The Villa",
  ],
  hours: "Saturday to Thursday, 8:00am - 7:00pm",
  email: "",

  phone: {
    display: "+971 55 610 6648",
    tel: `tel:+${phoneDigits}`,
  },

  whatsapp: {
    // Pre-filled message the customer sees when WhatsApp opens.
    link: `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
      "Hi Nisar, I found your website and I'd like a quote for my garden."
    )}`,
    plain: `https://wa.me/${phoneDigits}`,
  },
} as const;

export const services = [
  {
    title: "Artificial Grass",
    icon: "grass",
    blurb:
      "Premium UV-stable turf laid over a properly compacted and levelled base, so it stays flat and drains cleanly through Dubai summers.",
  },
  {
    title: "Pergolas & Shades",
    icon: "pergola",
    blurb:
      "Hardwood and aluminium pergolas, shade sails and seating areas built to make your outdoor space usable all year round.",
  },
  {
    title: "Paving & Tiling",
    icon: "paving",
    blurb:
      "Porcelain paving, stepping-stone pathways, driveways and pool surrounds set on solid foundations with accurate falls.",
  },
  {
    title: "Planting & Soft Landscaping",
    icon: "plant",
    blurb:
      "Planter beds, trees, hedging and seasonal flowers chosen to suit the climate, the soil and how much sun your garden gets.",
  },
  {
    title: "Irrigation Systems",
    icon: "water",
    blurb:
      "Automatic drip and sprinkler systems with timers, installed neatly below the surface and tuned to keep planting healthy.",
  },
  {
    title: "Garden Maintenance",
    icon: "shears",
    blurb:
      "Weekly or monthly visits covering mowing, pruning, weeding, fertilising and pest treatment on a schedule that suits you.",
  },
] as const;

export const whyUs = [
  {
    title: "Over a decade in Dubai gardens",
    body: "We know which plants survive the heat, how turf behaves on sand, and what the developers' community rules allow.",
  },
  {
    title: "Clear, fixed pricing",
    body: "You get an itemised quote before we start. No surprise charges once the work is underway.",
  },
  {
    title: "Tidy, respectful crews",
    body: "We sheet up, keep walkways clear while we work, and leave the site swept and spotless every evening.",
  },
  {
    title: "Work that is guaranteed",
    body: "Installations are backed by a workmanship guarantee, and we come back if anything needs putting right.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Send us a message",
    body: "Message us on WhatsApp with a few photos of your garden and a rough idea of what you want.",
  },
  {
    step: "02",
    title: "Free site visit",
    body: "We visit, measure up, talk through options and materials, then send a written quote.",
  },
  {
    step: "03",
    title: "We build it",
    body: "Our crew arrives on the agreed date and completes the work to schedule, keeping you updated.",
  },
  {
    step: "04",
    title: "Aftercare",
    body: "We hand over care instructions and can keep the garden looking its best on a maintenance plan.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Nisar's team transformed the side yard with artificial grass in two days. Clean edges, perfectly level, and they tidied everything before leaving.",
    name: "Sarah M.",
    location: "Dubai Hills Estate",
  },
  {
    quote:
      "We had a pergola built over the terrace. Great quality timber, honest pricing, and the finish is better than the villa's original joinery.",
    name: "Ahmed K.",
    location: "Damac Hills",
  },
  {
    quote:
      "They have maintained our garden for over a year now. Always on time, always thorough, and the planting has never looked healthier.",
    name: "Priya R.",
    location: "Arabian Ranches",
  },
] as const;
