import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { getProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import HeroSlides from '../data/HeroSlides';

const HERO_SLIDES = HeroSlides();

export default function HomePage() {
    const products = getProducts();
    const [currentSlide, setCurrentSlide] = useState(0);
    const catalogRef = useRef(null); // Reference to track down scroll target anchor

    // 🔄 Automatic Slide Interval Loop (Changes slide every 5 seconds)
    useEffect(() => {
        const slideTimer = setInterval(() => {
            handleNextSlide();
        }, 5000);
        return () => clearInterval(slideTimer); // Clear memory block on unmount
    }, [currentSlide]);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    };

    // 🎯 Native Smooth Page Scroll Anchor Handler
    const scrollToCatalog = () => {
        catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='page home-page-container'>
            {/* 🔮 CINEMATIC HERO SLIDEDECK CAROUSEL */}
            <div className="hero-carousel-wrapper">
                {HERO_SLIDES.map((slide, index) => (
                    <div 
                        className={`carousel-slide-item ${index === currentSlide ? 'slide-active' : ''}`}
                        key={slide.id}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Ambient Deep Dark Tint Layer protection for text readabilities */}
                        <div className="slide-overlay-tint"></div>
                        
                        <div className="slide-content-box">
                            {slide.badge && <span className="slide-promo-badge">{slide.badge}</span>}
                            <h1 className='home-title'>{slide.title}</h1>
                            <p className='home-subtitle'>{slide.subtitle}</p>
                        </div>
                    </div>
                ))}

                {/* 🎛️ NAVIGATION SLIDE ARROWS CORES */}
                <button type="button" className="carousel-arrow arrow-left" onClick={handlePrevSlide} aria-label="Previous Slide">
                    ‹
                </button>
                <button type="button" className="carousel-arrow arrow-right" onClick={handleNextSlide} aria-label="Next Slide">
                    ›
                </button>

                {/* ⏬ ANIMATED SCROLL DOWN ACCENT CAP */}
                <button type="button" className="scroll-down-anchor-btn" onClick={scrollToCatalog} aria-label="Scroll to catalog">
                    <span className="scroll-arrow-icon">↓</span>
                </button>
            </div>
            
            {/* 📦 THE PRODUCT CATALOG OVERVIEW SECTION */}
            <div className='container catalog-section-anchor' ref={catalogRef}>
                <h2 className='page-title'>Our Products</h2>
                <div className='product-grid'>
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
