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
    {
        slug: "lakeview-school-campus",
        name: "Lakeview School Campus",
        type: "Education / 2022",
        note:
            "A large school design that organizes learning clusters around shaded courts and outdoor study terraces.",
        summary:
            "A multi-building campus with classrooms, labs, and shared commons arranged to maximize daylight and cross ventilation. The master plan creates walkable courtyards that support community gatherings and outdoor learning.",
        location: "Hawassa, Ethiopia",
        year: "2022",
        area: "9,600 m2",
        image: "/architect8.jpg",
        images: ["/architect8.jpg"],
    },
    {
        slug: "city-corridor-masterplan",
        name: "City Corridor Masterplan",
        type: "Urban / 2021",
        note:
            "A city corridor plan linking transit, mixed-use blocks, and public greenways into a coherent spine.",
        summary:
            "A strategic urban corridor that connects transit stops, civic plazas, and mixed-use buildings through a continuous pedestrian-friendly spine. The plan balances density with green infrastructure and shaded public space.",
        location: "Dire Dawa, Ethiopia",
        year: "2021",
        area: "14 km spine",
        image: "/architect10.jpg",
        images: ["/architect10.jpg"],
    },
    {
        slug: "mercy-general-hospital",
        name: "Mercy General Hospital",
        type: "Healthcare / 2020",
        note:
            "A hospital project focused on calm patient flow, daylight-rich wards, and efficient clinical zoning.",
        summary:
            "A healthcare campus with clear patient pathways, modular wards, and daylight-filled recovery spaces. The layout optimizes clinical adjacencies while keeping family areas comfortable and calm.",
        location: "Adama, Ethiopia",
        year: "2020",
        area: "12,400 m2",
        image: "/architect11.jpg",
        images: ["/architect11.jpg"],
    },
];
