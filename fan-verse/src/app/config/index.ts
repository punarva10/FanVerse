export const PRODUCT_CATEGORIES = [
  {
    label: "Fandom",
    value: "fandom" as const,
    featured: [
      {
        name: "RCB",
        href: `/products?category=fandom`,
        imageSrc: "/nav/fandom/rcb.png",
      },
      {
        name: "Taylor Swift",
        href: "/products?category=fandom",
        imageSrc: "/nav/fandom/taylor-swift.png",
      },
      {
        name: "Anime",
        href: "/products?category=fandom",
        imageSrc: "/nav/fandom/anime.jpeg",
      },
    ],
  },
  {
    label: "Category",
    value: "category" as const,
    featured: [
      {
        name: "Favorite Merch Picks",
        href: `/products?category=category`,
        imageSrc: "/nav/category/picks.jpeg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=category",
        imageSrc: "/nav/category/new.jpeg",
      },
      {
        name: "Bestselling Merch",
        href: "/products?category=category",
        imageSrc: "/nav/category/bestsellers.jpeg",
      },
    ],
  },
];
