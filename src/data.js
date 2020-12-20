import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpg";
import room4 from "./images/details-4.jpg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "master bed room",
      slug: "master-bed",
      type: "single",
      price: "mb",
      size: 400,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "This is master bed room with walk-in closet, attached bath.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, toiletries",
        "Adequate safety/security/privacy",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "guest room",
      slug: "guest-room",
      type: "single",
      price: "gs",
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description: "This is a guest bed room",
      extras: [
        "Plush pillows and breathable bed linens",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "kids room",
      slug: "kids-room",
      type: "single",
      price: "kids",
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description: "This is kids room.",
      extras: [
        "Adequate safety/security",
        "Internet",
        "Toys",
        "Study table",
        "Comfortable bed",
      ],
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "kitchen",
      slug: "kitchen",
      type: "single",
      price: "kitchen",
      size: 400,
      capacity: 4,
      pets: false,
      breakfast: true,
      featured: false,
      description: "This is L shaped kitchen & pantry zone.",
      extras: [
        "Pantry",
        "modular kitchen",
        "Refrigerator",
        "Microwave",
        "Dish Washer",
        "4 Cook tops",
        "Wash basin",
      ],
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },

  {
    sys: {
      id: "8",
    },
    fields: {
      name: "Entrance",
      slug: "entrace",
      type: "double",
      price: "3 Floors",
      size: 2200,
      capacity: 6,
      pets: false,
      breakfast: true,
      featured: true,
      description:
        "The best value, new construction townhome in the desirable Monroe Township School District with NJ transit onsite for easy commuting to downtown and New York City. Gateway at Monroe is a commuters dream - both the New Jersey Turnpike and Route 133 are just 2 miles away. The community also boasts a NJ Transit bus stop at the entrance, providing you access to Downtown & Port Authority in New York City. Being located just 11 miles from the Freehold Mall and 13 miles from Palmer Square in Princeton, this gives home  a variety of shopping, dining and entertainment options. Move in to this home with complete confidence knowing your house is built with top-quality craftsmanship and materials, and access to the most current energy efficient products to ensure top savings when it comes to your monthly bills.",
      extras: ["Adequate safety/security", "Internet", "Comfortable place"],
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },

  {
    sys: {
      id: "12",
    },
    fields: {
      name: "master guest room",
      slug: "family-deluxe",
      type: "family",
      price: "Spacious",
      size: 400,
      capacity: 1,
      pets: false,
      breakfast: true,
      featured: true,
      description:
        "This is a private studio guest room, spacious with attached batch. on the level 1.",
      extras: ["Adequate safety/security", "Internet", "Comfortable place"],
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "13",
    },
    fields: {
      name: "Living room",
      slug: "living-room",
      type: "living",
      price: "Square",
      size: 600,
      capacity: 5,
      pets: false,
      breakfast: true,
      featured: true,
      description: "This is the living area.",
      extras: [
        "Adequate safety/security",
        "TV",
        "Home theatre",
        "Internet",
        "Comfortable place",
      ],
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
];
