export const client = {
  // Business Details
  name: "Warren Garden Services",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Guildford.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07961 030120",
  email: "",
  website: "",

  // Location
  address: "Guildford",
  city: "Guildford",
  county: "",
  postcode: "",
  basedIn: "Guildford",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Michael Hughes", rating: 5, text: "We had Warren Garden Services come out to completely transform our back garden and we couldn't be happier. They listened to exactly what we wanted and delivered beyond our expectations. The attention to detail was incredible — every edge, every pl...", date: "5 months ago" },
    { name: "Phil E.", rating: 5, text: "Would give Warren Garden Services 10 stars if I could. They transformed our tired-looking garden into a beautiful, functional space. The team were a pleasure to deal with and the price was very competitive for Guildford.", date: "a year ago" },
    { name: "Scott Wright", rating: 5, text: "Just had Warren Garden Services finish our garden project in Guildford. What a difference! The team were lovely to have around — respectful of our property, cleaned up after themselves, and produced an amazing result.", date: "2 months ago" },
    { name: "Emma M.", rating: 5, text: "Absolutely delighted with the work Warren Garden Services did on our garden. From the initial consultation to the finished result, everything was handled professionally. The team were punctual, tidy, and the quality of workmanship was outstanding....", date: "5 months ago" },
    { name: "Georgia Harvey", rating: 5, text: "Had a wonderful experience with Warren Garden Services. From the design phase right through to the final clean-up, everything was handled brilliantly. The new patio and planting scheme look amazing.", date: "2 years ago" },
    { name: "Tom T.", rating: 5, text: "We found Warren Garden Services online and after reading about their work, decided to give them a call. So glad we did — the garden has been completely transformed. Professional from start to finish.", date: "a year ago" },
    { name: "Jake T.", rating: 5, text: "We've used several landscapers over the years and Warren Garden Services are by far the best. Quality materials, expert installation, and they genuinely care about getting it right. Our patio and borders look fantastic.", date: "8 months ago" },
    { name: "Mel Young", rating: 5, text: "From start to finish, working with Warren Garden Services was a pleasure. They arrived when they said they would, worked efficiently, and the end result is stunning. Several friends have commented on how good the garden looks now.", date: "3 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Warren Garden Services | Landscaper in Guildford",
    description: "Professional landscaper in Guildford. 5.0-star rated on Google. Call for a free quote.",
  },
};
