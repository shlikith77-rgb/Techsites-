import { Project, ServiceItem, PricingPlan, AutomationPlan, IndustryCategory, Testimonial, FaqItem } from '../types';

export const AGENCY_INFO = {
  brandName: 'TECHSITES',
  tagline: 'Premium Websites That Make Businesses Look Bigger.',
  subline: 'We design modern, high-performance websites and WhatsApp automation systems that help businesses build trust, attract customers and grow online.',
  trustStatement: 'Professional Website Development • WhatsApp Automation • Bengaluru',
  founder: 'Aarush Kumar',
  role: 'Founder & Principal Lead',
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 9448319903',
  phoneDisplay: '+91 94483 19903',
  email: 'shlikith77@gmail.com',
  whatsappUrl: 'https://wa.me/919448319903?text=Hi%20Aarush,%20I%20am%20interested%20in%20a%20premium%20website%20for%20my%20business.',
  hours: 'Mon – Sat: 9:00 AM – 8:00 PM IST',
};

export const TRUST_PILLARS = [
  { id: '1', title: 'Premium Design', desc: 'Custom bespoke aesthetics, never generic templates' },
  { id: '2', title: 'Responsive Websites', desc: 'Flawless presentation on mobile, tablet & desktop' },
  { id: '3', title: 'Business-Focused', desc: 'Architected to capture leads and drive real inquiries' },
  { id: '4', title: 'WhatsApp Automation', desc: 'Instant client response & qualification workflows' },
  { id: '5', title: 'Transparent Pricing', desc: 'Zero hidden fees with clear project milestones' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Premium Website Development',
    subtitle: 'Bespoke, High-Performance Web Architecture',
    tagline: 'Turn casual visitors into loyal high-ticket clients with an imposing digital presence.',
    description:
      'We build high-quality premium professional websites for businesses of all types — from local businesses and service providers to restaurants, hotels, salons, gyms, real estate companies and growing brands.',
    features: [
      'Premium custom design tailored to your industry aesthetic',
      'Mobile-first responsive architecture tested on all viewports',
      'Ultra-fast page loads (< 1.2s) for highest SEO ranking',
      'Professional UI/UX with deliberate visual hierarchy',
      'Business-focused structure optimized for conversion',
      'Direct contact, quote request and enquiry integration',
      'One-tap WhatsApp chat & call triggers',
      'SEO-friendly semantic metadata and Schema.org markup',
      'Smooth subtle animations with zero interface bloat',
      'Complete cloud deployment and secure domain setup',
    ],
    metrics: [
      { label: 'Avg. PageSpeed Score', value: '98+' },
      { label: 'Mobile Conversion Lift', value: '2.4x' },
    ],
  },
  {
    id: 'whatsapp-automation',
    number: '02',
    title: 'WhatsApp Business Automation',
    subtitle: 'Interactive Lead Capture & Instant Engagement',
    tagline: 'Never miss a customer inquiry, day or night.',
    description:
      'Turn WhatsApp into a powerful business communication and lead-generation system. Connect your website visitors directly into intelligent messaging flows that capture client details, answer FAQs, and qualify bookings in seconds.',
    features: [
      'Automated 24/7 customer greeting and intelligent reply flows',
      'Structured business enquiry and service selection menus',
      'Frictionless lead collection sent straight to your phone',
      'Pre-qualifying customer budget, timing and requirements',
      'Instant service/product information and digital catalogs',
      'Contact information collection without lengthy forms',
      'WhatsApp-based enquiry handling with staff notification',
      'Custom automation logic crafted around your daily workflow',
      'Direct CRM / Google Sheets lead logging capability',
    ],
    metrics: [
      { label: 'Response Time', value: '< 5 sec' },
      { label: 'Lead Capture Rate', value: '3.1x' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'misco-and-ember',
    name: 'Misco and Ember',
    category: 'Restaurant',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85',
    description:
      'An opulent digital dining experience created for a luxury contemporary restaurant in Mumbai, featuring an immersive digital menu, private dining reservation system, and table inquiry routing.',
    highlight: 'Atmospheric typography, dark brass accents, and 1-tap table booking integration.',
    deliverables: [
      'Bespoke culinary visual identity',
      'Interactive digital cocktail & dining menu',
      'Direct WhatsApp VIP table booking flow',
      'Private dining enquiry form',
      'Mobile-optimized chef story showcase',
    ],
    clientQuote: 'Techsites transformed our digital front door. Our private dining and weekend table reservations via WhatsApp doubled in the first month.',
    results: ['2.8x increase in weekend bookings', 'Sub-second mobile menu loading', 'Zero dropped table inquiries'],
    tags: ['Culinary Experience', 'Menu UI', 'Instant Reservations'],
  },
  {
    id: 'casya-aranya',
    name: 'Casya Aranya',
    category: 'Hotel / Hospitality',
    location: 'Coorg & Bengaluru Gateways',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
    description:
      'A serene luxury resort portal showcasing eco-luxury villas nestled between Coorg rainforests and Bengaluru city getaways, with panoramic room previews and seasonal package inquiries.',
    highlight: 'Warm botanical luxury palette, villa walkthrough galleries, and direct villa booking triggers.',
    deliverables: [
      'High-resolution villa architectural gallery',
      'Seasonal package itinerary showcase',
      'Instant WhatsApp concierge connection',
      'Automated weekend retreat inquiry flow',
      'Full bilingual mobile optimization',
    ],
    clientQuote: 'The website captures the quiet luxury of our rainforest property. Guests frequently remark on how effortless it was to explore our villas.',
    results: ['45% reduction in booking bounce rate', 'Instant concierge response via automation', 'Direct weekend bookings up 62%'],
    tags: ['Eco Luxury', 'Hospitality Portal', 'Direct Bookings'],
  },
  {
    id: 'studio-unisex-salon',
    name: 'Studio Unisex Salon',
    category: 'Salon & Beauty',
    location: 'Bengaluru',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=85',
    description:
      'A sleek, high-fashion web presence for a premier Bengaluru styling studio. Features haircut and color lookbooks, stylist profiles, and one-tap WhatsApp appointment scheduling.',
    highlight: 'Clean aesthetic mirrors, polished typography, and zero-friction stylist appointment selector.',
    deliverables: [
      'Curated style lookbook & treatment pricing',
      'Stylist portfolio and specialization index',
      'Interactive WhatsApp appointment selector',
      'Google Maps & salon direction integration',
      'Mobile client before/after showcase',
    ],
    clientQuote: 'Clients love browsing our lookbook on mobile and tapping one button to confirm their appointment on WhatsApp with our reception.',
    results: ['Over 300+ monthly online appointments', 'Instant service discovery', '100% responsive styling'],
    tags: ['Beauty & Grooming', 'Appointment Flow', 'Lookbook UI'],
  },
  {
    id: 'north-line-real-estate',
    name: 'North Line Real Estate',
    category: 'Real Estate',
    location: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    description:
      'A commanding, investor-grade property portal showcasing premium residential towers and luxury villas across Hyderabad prime corridors, featuring interactive floor plans and brochure downloads.',
    highlight: 'Architectural minimalism, high-net-worth lead qualification flow, and brochure gate.',
    deliverables: [
      'Interactive master layout & unit floor plans',
      'Gated WhatsApp brochure delivery system',
      'Site visit scheduling with calendar integration',
      'Location connectivity & infrastructure map',
      'High-net-worth investor inquiry filter',
    ],
    clientQuote: 'Techsites gave our properties the prestige they deserve. Investors can review floor plans and request private site walkthroughs seamlessly.',
    results: ['Qualified property leads up 78%', 'Instant brochure dispatch over WhatsApp', 'Zero loading lag with high-res photos'],
    tags: ['Luxury Estates', 'Property Showcase', 'Investor Leads'],
  },
  {
    id: 'axiom-club-gym',
    name: 'Axiom Club Gym',
    category: 'Fitness / Gym',
    location: 'Maharashtra',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=85',
    description:
      'A dynamic, performance-driven digital hub for a state-of-the-art fitness and wellness facility in Maharashtra, highlighting high-end imported equipment, trainer rosters, and membership tiers.',
    highlight: 'Bold athletic typography, facility walkthrough, and free 1-day pass claim on WhatsApp.',
    deliverables: [
      'Equipment & training zone walkthrough',
      'Trainer credentials and specialization roster',
      'Free 1-Day Trial Pass generation flow',
      'Membership tier comparison module',
      'WhatsApp quick-joining consultation',
    ],
    clientQuote: 'Our website feels like a world-class athlete facility. The 1-Day pass generation via WhatsApp brings eager prospects through our doors every day.',
    results: ['210+ trial passes generated in 30 days', 'Clear membership tier conversion', '100% mobile perfection'],
    tags: ['Elite Performance', 'Trial Pass Flow', 'Membership Portal'],
  },
];

export const CATEGORIES: IndustryCategory[] = [
  {
    id: 'restaurants',
    name: 'Restaurants & Cafés',
    subtitle: 'Table reservations, digital menus, private dining',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    tags: ['Digital Menus', 'Direct Reservations', 'Culinary Story'],
  },
  {
    id: 'hospitality',
    name: 'Hotels & Resorts',
    subtitle: 'Room walkthroughs, seasonal packages, direct booking',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    tags: ['Villa Tours', 'Commission-Free', 'Concierge Bot'],
  },
  {
    id: 'beauty',
    name: 'Salons & Beauty',
    subtitle: 'Service lookbooks, stylist portfolios, appointment triggers',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
    tags: ['Lookbooks', 'Stylist Booking', 'Package Offers'],
  },
  {
    id: 'fitness',
    name: 'Gyms & Fitness',
    subtitle: 'Equipment showcases, trial passes, membership tiers',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    tags: ['Trial Pass', 'Trainer Showcase', 'Class Schedule'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    subtitle: 'Property walkthroughs, brochures, site visit booking',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    tags: ['Floor Plans', 'Brochures', 'Investor Inquiries'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    subtitle: 'Doctor credentials, patient consultation booking, clinic info',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    tags: ['Doctor Profiles', 'Consultations', 'Clinic Timings'],
  },
  {
    id: 'professional',
    name: 'Professional Services',
    subtitle: 'Law firms, financial consultancies, architecture studios',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tags: ['Case Studies', 'Consultation', 'Credibility'],
  },
  {
    id: 'local-business',
    name: 'Local Businesses',
    subtitle: 'Showrooms, service centers, specialty retail stores',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Store Location', 'Catalog', 'Direct Calls'],
  },
  {
    id: 'startups',
    name: 'Startups & Tech',
    subtitle: 'Product showcases, launch waitlists, investor decks',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tags: ['Product Demos', 'Waitlists', 'SaaS Onboarding'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Brands',
    subtitle: 'D2C brand stores, product catalogs, customer retention',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    tags: ['D2C Storefront', 'Checkout Flow', 'Catalog Sync'],
  },
  {
    id: 'service-businesses',
    name: 'Service Businesses',
    subtitle: 'Contractors, interior designers, repair & maintenance',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    tags: ['Quote Request', 'Portfolio', 'Service Areas'],
  },
  {
    id: 'and-more',
    name: 'And More',
    subtitle: 'Educational academies, events, luxury personal brands',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    tags: ['Custom Solutions', 'Fast Turnaround', 'Growth Focus'],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Discover',
    tagline: 'Strategic Foundation',
    desc: 'We understand your business, customers, goals and requirements. We analyze your competitors and clarify what will make your brand stand out.',
    deliverable: 'Project scope, visual direction & content outline',
  },
  {
    step: '02',
    name: 'Design',
    tagline: 'Visual Architecture',
    desc: 'We create a premium visual direction and user experience tailored to your business, with generous whitespace and high-converting typography.',
    deliverable: 'Bespoke UI mockups & responsive screen designs',
  },
  {
    step: '03',
    name: 'Build',
    tagline: 'Precision Engineering',
    desc: 'We develop a responsive, fast and professional website optimized for modern devices, integrating WhatsApp chat triggers and seamless forms.',
    deliverable: 'High-speed, production-grade clean code',
  },
  {
    step: '04',
    name: 'Launch',
    tagline: 'Deployment & Growth',
    desc: 'Your website is tested, deployed and prepared for your customers with complete domain setup, SEO tags, and WhatsApp lead flow verification.',
    deliverable: 'Live website, hosting setup & owner guidance',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter-1page',
    name: 'Premium 1-Page Website',
    tagline: 'Essential digital presence for small businesses & individuals',
    price: '₹99',
    suitableFor: 'Small businesses, individuals, local businesses and simple business websites looking for an immediate high-trust web address.',
    highlight: 'Starter Entry Package',
    features: [
      'Premium 1-page website',
      'Professional modern design',
      'Mobile responsive design',
      'Business introduction',
      'Services section',
      'About section',
      'Contact section',
      'WhatsApp integration',
      'Direct call button',
      'Hosting included',
      'Domain name charges are extra (optional)',
      'Turnaround in 2–3 business days',
    ],
    ctaText: 'Get 1-Page Website (₹99)',
  },
  {
    id: 'growth-multipage',
    name: 'Premium Multi Page Business Website',
    tagline: 'Complete brand portal for established commercial operations',
    price: '₹599',
    suitableFor: 'Clinics, restaurants, salons, real estate agencies, hotels, and businesses needing dedicated pages for different services.',
    highlight: 'Most Popular for Businesses',
    popular: true,
    features: [
      'Complete multi-page premium business website',
      'Dedicated Service / Menu / Project detail pages',
      'Professional modern UI/UX design',
      'Mobile & tablet responsive architecture',
      'Business introduction & team/about showcase',
      'Advanced enquiry & quotation forms',
      'WhatsApp Business integration & Call button',
      'Google Maps & local search optimization',
      'Hosting included',
      'Domain name charges are extra (optional)',
      'Turnaround in 3–5 business days',
    ],
    ctaText: 'Get Multi-Page Website (₹599)',
  },
  {
    id: 'ecommerce-store',
    name: 'Premium E-commerce Website',
    tagline: 'Full-featured online storefront for D2C brands & retail',
    price: '₹1,299',
    suitableFor: 'D2C brands, boutique shops, product sellers, supermarkets, and fashion stores seeking direct digital orders.',
    highlight: 'High-Converting Online Store',
    features: [
      'Complete premium online store & catalog showcase',
      'Product catalog with high-res galleries & categories',
      'Direct WhatsApp order & instant checkout flow',
      'Mobile-first frictionless shopping experience',
      'Product variations (sizes, colors, pricing tiers)',
      'Customer enquiry & order notification triggers',
      'Hosting included',
      'Domain name charges are extra (optional)',
      'Turnaround in 5–7 business days',
    ],
    ctaText: 'Get E-commerce Store (₹1,299)',
  },
];

export const WHATSAPP_AUTOMATION_PLANS: AutomationPlan[] = [
  {
    id: 'automation-sme',
    name: 'Small & Medium Scale Business',
    tagline: '24/7 Automated lead qualification & greeting engine',
    price: '₹999',
    suitableFor: 'Local businesses, clinics, cafes, salons, consultants, solo entrepreneurs, and service providers.',
    popular: true,
    highlight: 'Essential for Local Growth',
    features: [
      '24/7 Automated customer greeting & welcome message',
      'Interactive service & product menu buttons',
      'Instant lead capture (Name, Requirement, Timing)',
      'Automated business hours, address & FAQ replies',
      'Direct instant notification to business owner mobile',
      'Custom chat workflow mapped to your daily operations',
      'Zero technical maintenance required from your end',
    ],
    ctaText: 'Get SME Automation (₹999)',
  },
  {
    id: 'automation-enterprise',
    name: 'Large Scale Business',
    tagline: 'Enterprise-grade conversational CRM & multi-tier automation',
    price: '₹2,999',
    suitableFor: 'High-volume brands, real estate builders, multi-outlet restaurant chains, hospitality resorts, and corporate operations.',
    highlight: 'Advanced Multi-Tier Flow',
    features: [
      'Advanced multi-level interactive menu flows & branching logic',
      'Automated high-intent lead qualification & priority filtering',
      'Multi-department routing (Sales, Support, Booking, Management)',
      'Automated digital catalog & PDF brochure instant dispatch',
      'Google Sheets / CRM automated lead sync integration',
      'High-volume customer enquiry handling & broadcast setup',
      'Dedicated priority support & custom workflow revisions',
    ],
    ctaText: 'Get Large Scale Automation (₹2,999)',
  },
];

export const PRICING_GUARANTEES = [
  'Hosting included with all packages',
  'Domain name charges are extra (optional)',
  'This is lifetime charges and not yearly recurring charges',
  'No hidden charges fully transparent pricing',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Vikramaditya Sengupta',
    role: 'Managing Partner',
    company: 'Misco and Ember Hospitality',
    location: 'Mumbai',
    quote:
      'Working with Aarush at Techsites was an eye-opener. Most agencies take months and produce cookie-cutter sites. Techsites captured our dining atmosphere precisely. Our WhatsApp reservations are at an all-time high.',
    rating: 5,
    projectRef: 'Misco and Ember',
  },
  {
    id: '2',
    author: 'Sunil Rao',
    role: 'Founder & Director',
    company: 'Casya Aranya Resorts',
    location: 'Coorg & Bengaluru',
    quote:
      'The attention to detail is world-class. The typography, the generous spacing, the way photos breathe — it makes our boutique resort look twice as prestigious. Techsites delivers true luxury design.',
    rating: 5,
    projectRef: 'Casya Aranya',
  },
  {
    id: '3',
    author: 'Ananya Deshmukh',
    role: 'Creative Director',
    company: 'Studio Unisex Salon',
    location: 'Bengaluru',
    quote:
      'We wanted a website that looked like an international fashion studio, not a typical neighborhood salon. Techsites nailed the aesthetic. Clients constantly compliment the lookbook and book via WhatsApp.',
    rating: 5,
    projectRef: 'Studio Unisex Salon',
  },
  {
    id: '4',
    author: 'Rajesh Varma',
    role: 'Managing Director',
    company: 'North Line Real Estate',
    location: 'Hyderabad',
    quote:
      'In high-end real estate, trust is everything. Techsites built us a pristine portal that investors respect. The automated WhatsApp brochure delivery saves our sales executives hours every single day.',
    rating: 5,
    projectRef: 'North Line Real Estate',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Pricing & Packages',
    question: 'Are there any recurring monthly or yearly charges?',
    answer:
      'No. All our website packages (₹99 for 1-Page, ₹599 for Multi-Page Business, ₹1,299 for E-commerce) and WhatsApp Automation services (₹999 for SME, ₹2,999 for Large Scale) are one-time lifetime charges. There are zero yearly recurring maintenance fees or hidden charges.',
  },
  {
    category: 'Pricing & Packages',
    question: 'Is hosting included, and what about domain names?',
    answer:
      'Yes, secure high-speed cloud hosting is fully included with all our website packages. Domain name charges (.com, .in, etc.) are extra and optional: if you already own a domain, we connect it for free. If you need a new domain, we will help you purchase it directly at actual registrar cost.',
  },
  {
    category: 'Pricing & Packages',
    question: 'Is the ₹99 price for the 1-page website real?',
    answer:
      'Yes, absolutely. Our ₹99 starter package is our signature introductory offer designed specifically to help small businesses, professionals, and local entrepreneurs launch an authentic, premium web presence without heavy upfront costs. We handle the complete initial build, mobile responsiveness, WhatsApp integration, and essential sections so your business immediately looks established online.',
  },
  {
    category: 'Timeline',
    question: 'How fast can our website be designed and live?',
    answer:
      'For our 1-page website, standard turnaround is 2 to 3 business days once your business information and assets are provided. Multi-page and custom automation projects typically launch within 3 to 5 business days. We move fast without compromising on high-end craft.',
  },
  {
    category: 'WhatsApp Automation',
    question: 'How does WhatsApp Business Automation help my business?',
    answer:
      'When potential customers visit your website, they rarely want to fill out a 10-field form and wait days for an email. With WhatsApp automation (₹999 for SME, ₹2,999 for Large Scale), a single tap opens WhatsApp where an automated assistant instantly greets them, presents your service menu, collects their contact information, and routes high-priority requests straight to your phone so you can close deals immediately.',
  },
  {
    category: 'Revisions & Quality',
    question: 'Will the website look like a template?',
    answer:
      'No. We adhere to a strict luxury agency design philosophy: generous whitespace, elegant typography, subtle micro-interactions, and custom color alignment. We never use tacky neon templates or cluttered layouts.',
  },
  {
    category: 'Payment & Communication',
    question: 'How do we communicate during the project?',
    answer:
      'We believe in direct, frictionless communication. You will have direct access to founder Aarush Kumar via WhatsApp and phone (+91 9448319903) for instant updates, preview links, and feedback.',
  },
];
