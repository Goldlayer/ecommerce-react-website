import React from "react";
import blackToYellow from "../assets/images/12-inch-Black-to-yellow.webp";
import brownBodyWave from "../assets/images/18-Inch-Highlighted-Brown-Body-Wave-Lace.webp";
import boneStraightBrazillianVirgin from '../assets/images/Bone-Straight-Brazillian-Virgin-Human-Hair.webp'
import bouncingSmallKinky from "../assets/images/Bouncing-Small-kinky-Glueless-Wig.jpg";
import brazillianHuman from "../assets/images/Brazillian-Human-Hair-Wig.webp";
import chocolateBrownShort from "../assets/images/Chocolate-Brown-Short-Straight-Bob-Wig.webp";
import frontalLaceHdBob from "../assets/images/Frontal-Lace-hd-Bob-Wig.webp";
import jerryCurlyBob from "../assets/images/Jerry-Curly-Bob-Wig.webp";
import qualityHighlightBodyWaveBob from "../assets/images/Quality-Highlight-Body-Wave-Bob-Wig-Human-Hair.webp";
import uniqueShortStraight from "../assets/images/Unique-Short-Straight-Bob-Wig.webp";

// products.js
// Array of 30 products with realistic image URLs across different categories

const products = [
  // === HAIR PRODUCTS (10 products - synthetic, blend, human hair) ===
  {
    id: 1,
    name: "Synthetic Straight Wig - Silky Touch",
    price: 89.99,
    image: blackToYellow,
    description: "High-quality synthetic straight wig with natural silky texture. Heat-resistant up to 350°F.",
    category: "hair",
    stockCount: 45,
    rating: 4.2
  },
  {
    id: 2,
    name: "Human Hair Curly Bundle - 100% Remy",
    price: 249.99,
    image: brownBodyWave,
    description: "Premium 100% Remy human hair curly bundle. Virgin hair, cuticle intact, tangle-free.",
    category: "hair",
    stockCount: 18,
    rating: 4.8
  },
  {
    id: 3,
    name: "Synthetic Bob Wig - Heat Friendly",
    price: 69.99,
    image: boneStraightBrazillianVirgin,
    description: "Chic synthetic bob wig with heat-friendly fibers. Can be styled with low heat tools.",
    category: "hair",
    stockCount: 32,
    rating: 4.0
  },
  {
    id: 4,
    name: "Human Hair Lace Front Wig - Straight",
    price: 389.99,
    image: bouncingSmallKinky,
    description: "Luxury human hair lace front wig with natural hairline. 100% virgin Remy hair.",
    category: "hair",
    stockCount: 12,
    rating: 4.9
  },
  {
    id: 5,
    name: "Synthetic Kinky Curly Wig",
    price: 79.99,
    image: brazillianHuman,
    description: "Voluminous kinky curly synthetic wig. Perfect for natural-looking textured styles.",
    category: "hair",
    stockCount: 28,
    rating: 4.3
  },
  {
    id: 6,
    name: "Blend Hair Water Wave Wig (Human/Synthetic Mix)",
    price: 159.99,
    image: chocolateBrownShort,
    description: "Beautiful water wave blend wig combining human and synthetic fibers for a natural look.",
    category: "hair",
    stockCount: 22,
    rating: 4.5
  },
  {
    id: 7,
    name: "Human Hair Deep Wave Bundles",
    price: 299.99,
    image: frontalLaceHdBob,
    description: "Beautiful deep wave human hair bundles. 100% Remy, no shedding, long-lasting.",
    category: "hair",
    stockCount: 15,
    rating: 4.7
  },
  {
    id: 8,
    name: "Synthetic Pixie Cut Wig",
    price: 59.99,
    image: jerryCurlyBob,
    description: "Short and sassy synthetic pixie cut wig. Lightweight and comfortable for daily wear.",
    category: "hair",
    stockCount: 40,
    rating: 4.1
  },
  {
    id: 9,
    name: "Blend Hair Ombre Lace Wig",
    price: 189.99,
    image: qualityHighlightBodyWaveBob,
    description: "Ombre blend hair lace wig. Combines natural human hair with high-quality synthetic.",
    category: "hair",
    stockCount: 20,
    rating: 4.4
  },
  {
    id: 10,
    name: "Human Hair Closure - 4x4 Silk Base",
    price: 179.99,
    image: uniqueShortStraight,
    description: "4x4 silk base human hair closure. Natural parting space, pre-plucked hairline.",
    category: "hair",
    stockCount: 25,
    rating: 4.6
  },

  // === SKINCARE PRODUCTS (10 products) ===
  {
    id: 11,
    name: "Vitamin C Brightening Serum",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Powerful Vitamin C serum with hyaluronic acid. Brightens skin and reduces dark spots.",
    category: "skincare",
    stockCount: 55,
    rating: 4.7
  },
  {
    id: 12,
    name: "Hyaluronic Acid Moisturizer",
    price: 38.50,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Hydrating moisturizer with hyaluronic acid and ceramides. Plumps and smooths skin.",
    category: "skincare",
    stockCount: 40,
    rating: 4.5
  },
  {
    id: 13,
    name: "Retinol Night Cream",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Retinol-infused night cream for anti-aging. Reduces fine lines and wrinkles.",
    category: "skincare",
    stockCount: 30,
    rating: 4.8
  },
  {
    id: 14,
    name: "Niacinamide & Zinc Face Serum",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Balancing serum with niacinamide and zinc. Minimizes pores and controls sebum.",
    category: "skincare",
    stockCount: 48,
    rating: 4.6
  },
  {
    id: 15,
    name: "SPF 50 Sunscreen Lotion",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Broad-spectrum SPF 50 sunscreen. Lightweight, non-greasy, and water-resistant.",
    category: "skincare",
    stockCount: 62,
    rating: 4.4
  },
  {
    id: 16,
    name: "Glycolic Acid Toner",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Glycolic acid toner for gentle exfoliation. Brightens and evens skin tone.",
    category: "skincare",
    stockCount: 37,
    rating: 4.3
  },
  {
    id: 17,
    name: "Under-Eye Brightening Cream",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Targeted eye cream with caffeine and vitamin K. Reduces dark circles and puffiness.",
    category: "skincare",
    stockCount: 33,
    rating: 4.2
  },
  {
    id: 18,
    name: "Rosewater Facial Mist",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Refreshing rosewater mist. Soothes, hydrates, and calms irritated skin.",
    category: "skincare",
    stockCount: 50,
    rating: 4.1
  },
  {
    id: 19,
    name: "Salicylic Acid Acne Treatment",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Salicylic acid acne spot treatment. Clears breakouts and prevents future acne.",
    category: "skincare",
    stockCount: 42,
    rating: 4.5
  },
  {
    id: 20,
    name: "Peptide Firming Moisturizer",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Peptide-rich moisturizer for firming and lifting. Boosts collagen production.",
    category: "skincare",
    stockCount: 28,
    rating: 4.7
  },

  // === MAKEUP PRODUCTS (10 products) ===
  {
    id: 21,
    name: "Matte Liquid Foundation",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "Long-wear matte liquid foundation with full coverage. Oil-free and transfer-resistant.",
    category: "makeup",
    stockCount: 58,
    rating: 4.6
  },
  {
    id: 22,
    name: "Nude Eyeshadow Palette",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "12-shade nude eyeshadow palette with matte and shimmer finishes. Highly pigmented.",
    category: "makeup",
    stockCount: 35,
    rating: 4.8
  },
  {
    id: 23,
    name: "Volumizing Mascara",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "Volumizing mascara with collagen-infused formula. Adds dramatic volume and length.",
    category: "makeup",
    stockCount: 60,
    rating: 4.4
  },
  {
    id: 24,
    name: "Cream Blush Stick",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "Buildable cream blush stick with a dewy finish. Easy to blend and long-lasting.",
    category: "makeup",
    stockCount: 44,
    rating: 4.3
  },
  {
    id: 25,
    name: "Highlighter Palette",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "4-shade highlighter palette with blinding shimmer finishes. Suitable for all skin tones.",
    category: "makeup",
    stockCount: 38,
    rating: 4.7
  },
  {
    id: 26,
    name: "Matte Liquid Lipstick",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "Transfer-proof matte liquid lipstick with intense pigment. Long-wearing up to 12 hours.",
    category: "makeup",
    stockCount: 52,
    rating: 4.5
  },
  {
    id: 27,
    name: "Brow Pencil & Spoolie",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "Dual-ended brow pencil with spoolie. Fills and shapes brows naturally.",
    category: "makeup",
    stockCount: 48,
    rating: 4.2
  },
  {
    id: 28,
    name: "Setting Spray - Dewy Finish",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "Dewy finish setting spray. Locks makeup in place for up to 16 hours.",
    category: "makeup",
    stockCount: 41,
    rating: 4.6
  },
  {
    id: 29,
    name: "Concealer - Full Coverage",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "Full coverage concealer with hydrating formula. Covers dark circles and blemishes.",
    category: "makeup",
    stockCount: 56,
    rating: 4.7
  },
  {
    id: 30,
    name: "Bronzer & Contour Duo",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&h=500&fit=crop",
    description: "Two-in-one bronzer and contour powder duo. Sculpts and warms the complexion.",
    category: "makeup",
    stockCount: 34,
    rating: 4.4
  }
];

export function getProducts() {
  return products;
}

export function getProductsById(id) {
  return products.find((p) => p.id === Number(id));
}