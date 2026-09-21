// Case studies for /design. Add entries here; the page renders them in order.
// `image` should be a wide screenshot or composition (around 16:10 works best).
// Optional `video` (mp4) plays muted on loop with `image` as its poster.
export const design = {
  statement: 'Interfaces, identities, and the systems behind them.',
  availability: 'Available for freelance and contract work.',
  email: 'matthewtran.jobs@gmail.com',
  services: [
    {
      title: 'Product design',
      body: 'Flows, layouts, and finished screens. From a brief to something a team can build.',
    },
    {
      title: 'Websites',
      body: 'Marketing sites, storefronts, portfolios, and web apps, designed and built end-to-end. Fast, accessible, easy to update.',
    },
    {
      title: 'Design systems',
      body: 'Type, colour, spacing, and components that hold together across a product as it grows.',
    },
  ],
  studies: [
    {
      slug: 'cove',
      title: 'Cove',
      client: 'Personal',
      year: '2026',
      role: 'Design and build',
      summary:
        'A macOS menu-bar app that turns the MacBook notch into a Dynamic Island: now playing, calendar, timer, and volume. Most of the design work is in the motion, from the springs and morphs to the way the shape puffs on hover.',
      image: '/design/cove.webp',
      video: '/design/cove.mp4',
      href: 'https://github.com/tran28/notch-app',
      tags: ['Swift', 'SwiftUI', 'macOS', 'Motion design'],
    },
    {
      slug: 'nice-hair-salon',
      title: 'Nice Hair Salon',
      client: 'Nice Hair Salon',
      year: '2024',
      role: 'Design and build',
      summary:
        'A storefront site for a local salon. Warm type, a simple booking path, and photography that does most of the talking. Designed directly in the browser and built in Next.js.',
      image: 'https://matthew-tran-portfolio.s3.us-east-2.amazonaws.com/image_nicehairsalon.png',
      href: 'https://nicehairsalon.ca/',
      tags: ['Next.js', 'Tailwind'],
    },
    {
      slug: 'notif',
      title: 'no•tif',
      client: 'Personal',
      year: '2024',
      role: 'Product design',
      summary:
        'SMS discount alerts for small retailers. The design covered the dashboard, the onboarding flow, and a small component set, worked out before any code.',
      image: '/design/notif.png',
      href: 'https://www.figma.com/file/ynjeCPct7udkLBg1YJBxmu/NotifProject?type=design&node-id=0-1&mode=design',
      tags: ['Product design', 'React', 'Tailwind'],
    },
  ],
};
