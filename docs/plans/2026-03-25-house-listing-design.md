# 18 Whitburn Avenue - Listing Page Design

## Overview

Single-page property listing site for private sale of 18 Whitburn Avenue, Halswell, Christchurch.

## Property Details

| Spec | Value |
|------|-------|
| Address | 18 Whitburn Avenue, Halswell, Christchurch |
| Bedrooms | 4 (3 large doubles + 1 large single) |
| Bathrooms | 2 |
| Floor Area | 209 m² |
| Land Area | 607 m² |
| Garages | 2 |
| Location | Milns Park, Halswell |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Lightbox:** yet-another-react-lightbox
- **Images:** Cloudinary CDN (already uploaded)
- **Hosting:** Vercel (free tier)
- **Content:** Config file (no CMS)

## Design Direction

**Modern/bold** - matching the house's architectural presence:

- Dark charcoal exterior, strong gable rooflines, contemporary finishes
- Website should reflect that confidence, not undersell with soft/minimal styling

### Color Tokens

```css
--charcoal: #2D3436
--navy: #1E3A5F
--white: #FFFFFF
--warm-gray: #F5F5F4
--timber: #8B7355
```

### Typography

- Single font family: Inter (or similar clean sans-serif)
- Headings: Bold weight
- Body: Regular weight

## Page Structure

### 1. Hero Section
- Full viewport height
- Front exterior photo as background (1020.jpg)
- Dark gradient overlay from bottom for text readability
- Large bold address: "18 Whitburn Avenue"
- Suburb below in lighter weight
- Price prominently displayed
- Subtle scroll indicator at bottom

### 2. Navigation
- Minimal sticky header (appears after scrolling past hero)
- Address on left, "Enquire" button on right
- Transparent initially, solid when scrolled

### 3. Key Details Bar
- Warm gray background
- Horizontal row of stats with icons:
  - 4 Bedrooms
  - 2 Bathrooms
  - 2 Living Areas
  - 2 Car Garage
  - 607 m² Land
  - 209 m² Floor
- Mobile: 2x3 grid

### 4. Photo Gallery
- 3 columns desktop, 2 tablet, 1 mobile
- First image spans 2 columns (hero gallery image)
- Hover: subtle 1.02 scale zoom
- Click opens lightbox:
  - Swipe/arrow navigation
  - Close button
  - Counter (e.g., "3 / 21")
  - Dark backdrop

### 5. Features Section
- Two-column layout on desktop
- Left: "Property Highlights" bullet list
- Right: Standout photo (indoor-outdoor alfresco shot)

**Features list:**
- 4 bedrooms (3 double, 1 single)
- 2 modern bathrooms including ensuite
- 209m² floor / 607m² land
- Corner site with all-day sun
- Ducted heat pump + DVS ventilation
- Wood burner in living room
- Hot tub
- Double garage with internal access

### 6. Contact Section
- Dark charcoal background
- Heading: "Interested?" or "Arrange a Viewing"
- Display contact details (name, phone, email)
- No contact form for now

## Config File Structure

```typescript
// config/listing.ts
export const listing = {
  address: "18 Whitburn Avenue",
  suburb: "Halswell",
  city: "Christchurch",
  price: "Price by Negotiation",

  stats: {
    bedrooms: 4,
    bathrooms: 2,
    livingAreas: 2,
    garages: 2,
    floorArea: 209,
    landArea: 607,
  },

  features: [
    "Corner site with all-day sun",
    "Ducted heat pump throughout",
    "DVS ventilation system",
    "Wood burner in living room",
    "Indoor-outdoor flow to covered alfresco",
    "Hot tub off master bedroom",
    "Walk-in pantry",
    "Double garage with internal access",
  ],

  contact: {
    name: "Your Name",
    phone: "021 XXX XXXX",
    email: "you@email.com",
  },

  images: [
    { src: "https://res.cloudinary.com/...", alt: "Front exterior" },
    // ... 21 images total
  ],
}
```

## File Structure

```
18whitburn/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── StatsBar.tsx
│   ├── Gallery.tsx
│   ├── Features.tsx
│   └── Contact.tsx
├── config/
│   └── listing.ts
├── public/
│   └── (any local assets if needed)
├── tailwind.config.ts
├── package.json
└── next.config.js
```

## Deployment

1. Initialize git repo
2. Push to GitHub
3. Connect to Vercel
4. Get subdomain: `18whitburn.vercel.app` (or similar)

## Image Order (suggested)

1. Front exterior (hero)
2. Rear exterior / outdoor entertaining
3. Living room with fire
4. Open plan living to outdoors
5. Kitchen
6. Dining area with gable window
7. Alfresco / covered deck
8. Second living room
9. Master bedroom
10. Master bedroom (alternate angle)
11. Ensuite
12. Bedroom 2
13. Bedroom 3
14. Bedroom 4
15. Main bathroom
16. Laundry
17. Hot tub area
18. Entry walkway
19. Additional exterior shots
