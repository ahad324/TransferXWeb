export default function sitemap() {
    const baseUrl = "https://transferx.netlify.app";
    const currentDate = new Date();

    const routes = [
        { url: "", priority: 1, changeFrequency: "weekly" },
        { url: "/download", priority: 0.9, changeFrequency: "monthly" },
        { url: "/how-transferx-works", priority: 0.8, changeFrequency: "weekly" },
        { url: "/solutions", priority: 0.8, changeFrequency: "weekly" },
        { url: "/about", priority: 0.7, changeFrequency: "weekly" },
        { url: "/contact", priority: 0.7, changeFrequency: "weekly" },
        { url: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" },
        { url: "/docs/installer-error-codes", priority: 0.5, changeFrequency: "yearly" },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
