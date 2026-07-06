import React from "react";

// 🌟 Mock Slide Data Array - Swap paths out with your actual .webp asset assets as needed
const HERO_SLIDES = [
    {
        id: 'slide-1',
        title: "Luxury Hair Collections",
        subtitle: "Premium 100% Remy human hair bundles, lace fronts, and heat-safe styles.",
        image: "https://unsplash.com", 
        badge: "New Arrival"
    },
    {
        id: 'slide-2',
        title: "Flawless Radiant Skincare",
        subtitle: "Achieve glowing skin with dermatologist-approved vitamins and serums.",
        image: "https://unsplash.com",
        badge: "20% OFF Hub"
    },
    {
        id: 'slide-3',
        title: "Vibrant Makeup Lounge",
        subtitle: "Express your true canvas with richly pigmented palettes and bases.",
        image: "https://unsplash.com",
        badge: "Trending"
    }
];

function HeroSlides() {
  return HERO_SLIDES;
}

export default HeroSlides;