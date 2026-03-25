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
    "Wood burner in second lounge",
    "Indoor-outdoor flow",
    "Covered alfresco entertaining",
    "Hot tub off master suite",
    "Walk-in pantry",
    "Double garage with internal access",
    "High-spec fixtures throughout",
    "Established landscaping",
    "Sought-after Milns Park location",
  ],

  contact: {
    name: "Karen Davies",
    phone: "027 482 2359",
    email: "karendaviesnz@gmail.com",
  },

  heroImage: {
    src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428232/1001_lvdyrn.jpg",
    alt: "18 Whitburn Avenue - Rear exterior with outdoor entertaining",
  },

  sections: [
    {
      id: "outdoor-living",
      title: "Indoor-Outdoor Flow",
      subtitle: "Alfresco Living",
      description:
        "The heart of this home is where inside meets outside. Bifold doors open completely to the covered entertaining area, featuring a striking timber-lined cathedral ceiling that creates a seamless extension of your living space.",
      layout: "full" as const,
      images: [
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428234/1007_1_qipzqq.jpg",
          alt: "Covered alfresco area with timber ceiling",
        },
      ],
    },
    {
      id: "main-living",
      title: "Light-Filled Spaces",
      subtitle: "Main Living",
      description:
        "Generous proportions and considered orientation deliver a main living area bathed in natural light. Floor-to-ceiling glazing frames garden views while the open-plan design creates effortless flow between living, dining and kitchen.",
      layout: "left" as const,
      images: [
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428235/1008_ozcbvz.jpg",
          alt: "Main lounge with outdoor flow",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428234/1009_jnhaur.jpg",
          alt: "Main lounge and kitchen",
        },
      ],
    },
    {
      id: "second-living",
      title: "A Retreat Within",
      subtitle: "Second Living",
      description:
        "A separate lounge offers flexibility for family living — a cosy retreat with wood burner for winter evenings, or a peaceful space away from the main entertaining areas.",
      layout: "right" as const,
      images: [
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428232/1002_zdrx7f.jpg",
          alt: "Second lounge with wood burner",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428232/1003_tbgc9i.jpg",
          alt: "Second lounge opening to deck",
        },
      ],
    },
    {
      id: "kitchen",
      title: "Designed for Living",
      subtitle: "Kitchen & Dining",
      description:
        "A well-appointed kitchen anchored by a feature wall in deep navy, with stone benchtops, quality appliances, and a walk-in pantry. The breakfast bar and open layout make this the natural gathering point of the home.",
      layout: "grid" as const,
      images: [
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428232/1004_kmovyt.jpg",
          alt: "Kitchen and living area",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428232/1005_nywoxv.jpg",
          alt: "Kitchen with breakfast bar",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428234/1007_y89wxb.jpg",
          alt: "Dining area with gable window",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428233/1006_qz31bi.jpg",
          alt: "Dining and kitchen",
        },
      ],
    },
    {
      id: "master",
      title: "Private Sanctuary",
      subtitle: "Master Suite",
      description:
        "The master suite is positioned for privacy with its own access to the outdoor spa area. A spacious ensuite and walk-in wardrobe complete this parent's retreat.",
      layout: "left" as const,
      images: [
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428234/1010_fhmicm.jpg",
          alt: "Master bedroom with ensuite access",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428234/1011_tqzil6.jpg",
          alt: "Master bedroom",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428235/1012_hrdd5c.jpg",
          alt: "Master ensuite",
        },
      ],
    },
    {
      id: "bedrooms",
      title: "Room for Everyone",
      subtitle: "Bedrooms",
      description:
        "Three additional bedrooms — all generously sized doubles — provide comfortable accommodation for family or guests. Each enjoys good natural light and built-in storage.",
      layout: "grid" as const,
      images: [
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428235/1013_fo5xaz.jpg",
          alt: "Second bedroom",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428235/1014_gl3x0i.jpg",
          alt: "Third bedroom",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428235/1015_ldgygy.jpg",
          alt: "Fourth bedroom",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428235/1016_n18gl8.jpg",
          alt: "Main bathroom",
        },
      ],
    },
    {
      id: "exterior",
      title: "Street Appeal",
      subtitle: "The Setting",
      description:
        "Commanding presence on a corner site with established landscaping, the contemporary dark-clad exterior and timber entry deck make an immediate impression. The private rear garden includes a hot tub area off the master suite.",
      layout: "right" as const,
      images: [
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428232/1020_gcy49b.jpg",
          alt: "Street view",
        },
        {
          src: "https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774428236/1018_ptmkhn.jpg",
          alt: "Hot tub area",
        },
      ],
    },
  ],
};
