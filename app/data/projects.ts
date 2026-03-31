export type Project = {
    slug: string;
    name: string;
    category: string;
    type: string;
    note: string;
    summary: string;
    location: string;
    year: string;
    area: string;
    image: string;
    images: string[];
};

export const projects: Project[] = [
    {
        slug: "meksiko-pavilion",
        name: "Meksiko pavilion",
        category: "Pavilion",
        type: "Civic / 2025",
        note:
            "A layered brick-and-light concept that frames public gathering around courtyards and shaded passages.",
        summary:
            " The pavilion concept is developed as an urban pause, providing a shaded resting space where users can observe the dynamic life of the city while being protected from sun and noise.",
        location: "Addis Ababa, Ethiopia",
        year: "2025",
        area: "4,200 m2",
        image: "/pavilion.png",
        images: ["/pavilion.png", "/pavilion2.png"],
    },
    {
        slug: "kirkos-low-cost-residential",
        name: "Low Cost Residential Project - Kirkos",
        category: "Residential",
        type: "Residential / 2023",
        note: "Affordable housing with efficient unit layouts and shared courtyards around Kirkos.",
        summary:
            "A low-cost housing scheme that balances density with shared outdoor space, daylight access, and efficient circulation.",
        location: "Kirkos, Addis Ababa",
        year: "2023",
        area: "5,400 m2",
        image: "/residential.png",
        images: ["/residential.png"],
    },
    {
        slug: "gplus3-kera-low-cost-house",
        name: "G+3 Low Cost House - Kera",
        category: "Residential",
        type: "Residential / 2022",
        note: "A compact G+3 housing block with optimized cores and cost-aware structure.",
        summary:
            "A mid-rise low-cost residential block featuring stacked unit layouts and simplified construction systems.",
        location: "Kera, Addis Ababa",
        year: "2022",
        area: "3,900 m2",
        image: "/residential2.png",
        images: ["/residential2.png"],
    },
    {
        slug: "gplus4-kera-low-cost-house",
        name: "G+4 Low Cost House - Kera",
        category: "Residential",
        type: "Residential / 2021",
        note: "A G+4 housing project designed for efficient vertical circulation and shared amenities.",
        summary:
            "A cost-sensitive G+4 residential block with shared terraces and a durable structural grid.",
        location: "Kera, Addis Ababa",
        year: "2021",
        area: "4,600 m2",
        image: "/residential3.png",
        images: ["/residential3.png"],
    },
    {
        slug: "gplus4-bole-low-cost-house",
        name: "G+4 Low Cost House - Bole",
        category: "Residential",
        type: "Residential / 2020",
        note: "A G+4 housing block in Bole with clear zoning for families and shared circulation.",
        summary:
            "A compact mid-rise housing scheme prioritizing daylight, ventilation, and clear access routes.",
        location: "Bole, Addis Ababa",
        year: "2020",
        area: "4,800 m2",
        image: "/residential4.png",
        images: ["/residential4.png"],
    },
    {
        slug: "gplus1-cmc-low-cost-house",
        name: "G+1 Low Cost House - CMC",
        category: "Residential",
        type: "Residential / 2019",
        note: "A low-rise housing project emphasizing simple construction and walkable site planning.",
        summary:
            "A G+1 low-cost residential layout with adaptable units and shaded outdoor connections.",
        location: "CMC, Addis Ababa",
        year: "2019",
        area: "2,200 m2",
        image: "/residential5.png",
        images: ["/residential5.png"],
    },
    {
        slug: "werayekatit-school",
        name: "Werayekatit School",
        category: "School",
        type: "Education / 2023",
        note: "A community-first school focused on shaded courtyards and flexible classroom clusters.",
        summary:
            "A campus plan that balances compact classroom blocks with outdoor learning courts and covered walkways to support year-round use.",
        location: "Addis Ababa, Ethiopia",
        year: "2023",
        area: "6,800 m2",
        image: "/school.png",
        images: ["/school.png"],
    },
    {
        slug: "atse-tewodros-school",
        name: "Atse Tewodros School",
        category: "School",
        type: "Education / 2024",
        note: "A daylight-first campus with clear circulation and dedicated science and arts wings.",
        summary:
            "A school layout that separates noisy and quiet zones while keeping a shared central forum for assemblies and study.",
        location: "Gondar, Ethiopia",
        year: "2024",
        area: "5,900 m2",
        image: "/school2.png",
        images: ["/school2.png"],
    },
    {
        slug: "hamle-01-school",
        name: "Hamle 01 School",
        category: "School",
        type: "Education / 2020",
        note: "A compact urban school designed around a multi-use courtyard and shaded edges.",
        summary:
            "An efficient plan that maximizes classroom daylight while reserving the courtyard for sports and community events.",
        location: "Addis Ababa, Ethiopia",
        year: "2020",
        area: "4,700 m2",
        image: "/school3.png",
        images: ["/school3.png"],
    },
    {
        slug: "beherawi-school",
        name: "Beherawi School",
        category: "School",
        type: "Education / 2020",
        note: "A regional school with modular classroom blocks and cross-ventilated study halls.",
        summary:
            "A scalable campus that uses repeated classroom modules and shaded verandas to support future expansion.",
        location: "Addis Ababa, Ethiopia",
        year: "2020",
        area: "7,200 m2",
        image: "/school4.png",
        images: ["/school4.png"],
    },
    {
        slug: "kirkos-playing-ground",
        name: "Kirkos Playing Ground",
        category: "Corridor",
        type: "Public Space / 2022",
        note: "A neighborhood play ground and public space upgrade along the Kirkos corridor.",
        summary:
            "A community-focused corridor intervention with sports fields, shaded seating, and safe pedestrian connections.",
        location: "Kirkos, Addis Ababa",
        year: "2022",
        area: "1.6 ha",
        image: "/coridor.png",
        images: ["/coridor.png"],
    },
    {
        slug: "mesholekiya-health-center",
        name: "Mesholekiya Health Center",
        category: "Hospital",
        type: "Healthcare / 2022",
        note: "A primary health center focused on efficient patient flow and daylight-rich clinics.",
        summary:
            "A compact health center with clear wayfinding, outpatient clinics, and shaded waiting areas for community care.",
        location: "Mesholekiya,Addis Ababa, Ethiopia",
        year: "2022",
        area: "2,900 m2",
        image: "/health.png",
        images: ["/health.png"],
    },
    {
        slug: "urban-agriculture-project",
        name: "Urban Agriculture Project",
        category: "Urban Agriculture",
        type: "Landscape / 2021",
        note: "An urban agriculture pilot with greenhouse pods, community plots, and training zones.",
        summary:
            "A productive landscape strategy that combines community farming, water harvesting, and local food training spaces.",
        location: "Addis Ababa, Ethiopia",
        year: "2021",
        area: "3.4 ha",
        image: "/urbenagriculture.png",
        images: ["/urbenagriculture.png"],
    },
    {
        slug: "galan-church",
        name: "Galan Church",
        category: "Church",
        type: "Religious / 2021",
        note: "A worship hall with clear axial procession, calm daylight, and flexible gathering space.",
        summary:
            "A church project designed around a central nave, with acoustic balance, natural light, and a welcoming forecourt for community gatherings.",
        location: "Galan, Ethiopia",
        year: "2021",
        area: "3,200 m2",
        image: "/church.png",
        images: ["/church.png"],
    },
];
