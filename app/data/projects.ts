export type Project = {
    slug: string;
    name: string;
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
        slug: "abyssinia-cultural-pavilion",
        name: "Abyssinia Cultural Pavilion",
        type: "Civic / 2025",
        note:
            "A layered brick-and-light concept that frames public gathering around courtyards and shaded passages.",
        summary:
            "A civic pavilion that uses nested courtyards, shadow corridors, and a brick lattice to create a calm public commons. The project organizes museum spaces, workshops, and a community forum around a protected heart that stays cool in the afternoon light.",
        location: "Addis Ababa, Ethiopia",
        year: "2025",
        area: "4,200 m2",
        image: "/architect1.jpg",
        images: ["/architect1.jpg"],
    },
    {
        slug: "ridge-house-compound",
        name: "Ridge House Compound",
        type: "Residential / 2024",
        note:
            "Terraced living spaces embedded into slope geometry with passive cooling and framed valley views.",
        summary:
            "A family compound embedded into a hillside with three stepped living platforms. The plan prioritizes cross-ventilation, shaded exterior rooms, and a sheltered inner court that ties the family spaces together.",
        location: "Entoto Ridge, Ethiopia",
        year: "2024",
        area: "1,850 m2",
        image: "/architect2.jpg",
        images: ["/architect2.jpg"],
    },
    {
        slug: "addis-work-loft",
        name: "Addis Work Loft",
        type: "Commercial / 2023",
        note:
            "Adaptive reuse of an industrial shell into a collaborative studio with daylight-first interior planning.",
        summary:
            "A converted warehouse into a daylight studio and exhibition loft. New skylights, flexible partitions, and a long communal table establish a warm yet efficient work environment.",
        location: "Bole, Addis Ababa",
        year: "2023",
        area: "1,100 m2",
        image: "/architect3.jpg",
        images: ["/architect3.jpg"],
    },
];
