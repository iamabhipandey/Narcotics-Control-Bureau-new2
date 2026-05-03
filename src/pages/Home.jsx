import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
} from 'chart.js';
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';

// Register ChartJS modules
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
);

// Importing slider images
import slider1 from "../assets/slider/slider1.jpg";
import slider2 from "../assets/slider/slider2.png";
import slider3 from "../assets/slider/slider3.jpg";
import slider4 from "../assets/slider/apexncord.jpg";
import dgProfile from "../assets/profile.jpeg";

import coordination1 from "../assets/updates/coordination_1.png";
import raid1 from "../assets/updates/raid_1.png";
import seizure1 from "../assets/updates/seizure_1.png";

// Importing Gallery Images
import g1 from "../assets/gallary-img/10trainee-bsf.jpeg";
import g2 from "../assets/gallary-img/11apppa-51batch.jpeg";
import g3 from "../assets/gallary-img/12induction-training-si.jpeg";
import g4 from "../assets/gallary-img/1mou-ncb-capt-bprd.jpeg";
import g5 from "../assets/gallary-img/2mou-ncb-bprdcapt.jpeg";
import g6 from "../assets/gallary-img/3mou-ncb-capt.jpeg";
import g7 from "../assets/gallary-img/3ncbdg.jpeg";
import g8 from "../assets/gallary-img/4antf.jpeg";
import g9 from "../assets/gallary-img/4ncbadg.jpeg";
import g10 from "../assets/gallary-img/5martime.jpeg";
import g11 from "../assets/gallary-img/8trainee-bsf.jpeg";
import g12 from "../assets/gallary-img/9trainee-iis.jpeg";

// Portal Logos
import manasLogo from "../assets/link-img/MANAS_LogoE.jpeg";
import pmnrfLogo from "../assets/link-img/PMNRF.png";
import dataGovLogo from "../assets/link-img/data-gov.png";
import goLogo from "../assets/link-img/go.png";
import iigLogo from "../assets/link-img/iig.png";
import indiaGovLogo from "../assets/link-img/india-gov.png";
import myGovLogo from "../assets/link-img/mygov.png";
import nidaanLogo from "../assets/link-img/niddan.png";
import swachhLogo from "../assets/link-img/swach-bharat.png";
import ncbLogo from "../assets/logo.svg";

// Wanted Criminals Profiles
import c1 from "../assets/criminal/c1.png";
import c2 from "../assets/criminal/c2.png";
import c3 from "../assets/criminal/c3.png";


const slides = [
    {
        id: 1,
        image: slider1,
        title: "Securing the Nation from Narcotics",
        description: "The Narcotics Control Bureau is committed to a drug-free India through persistent enforcement and awareness."
    },
    {
        id: 2,
        image: slider2,
        title: "Modern Intelligence & Enforcement",
        description: "Utilizing state-of-the-art technology and intelligence networks to dismantle global drug trafficking rings."
    },
    {
        id: 3,
        image: slider3,
        title: "Awareness & Community Engagement",
        description: "Empowering the youth and communities to resist drug abuse through nationwide educational programs."
    },
    {
        id: 4,
        image: slider4,
        title: "Strategic Cooperation & NCORD",
        description: "Strengthening the institutional mechanism for multi-agency coordination in drug law enforcement."
    }
];

const Counter = ({ target, duration = 4000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);

            // Ease Out Quint: 1 - pow(1 - progress, 5)
            // This starts even faster and slows down much more towards the end
            const easedProgress = 1 - Math.pow(1 - progress, 5);

            setCount(Math.floor(easedProgress * target));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isVisible, target, duration]);

    return (
        <span ref={countRef}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isTickerPaused, setIsTickerPaused] = useState(false);

    const [activeOfferTab, setActiveOfferTab] = useState("Most Wanted");
    const [isNewsPlaying, setIsNewsPlaying] = useState(true);
    const [isPressPlaying, setIsPressPlaying] = useState(true);
    const [isActivityPlaying, setIsActivityPlaying] = useState(true);

    // Visibility states for triggering chart animations
    const [enforcementInView, setEnforcementInView] = useState(false);
    const enforcementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setEnforcementInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (enforcementRef.current) {
            observer.observe(enforcementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Hover states for scrolling boxes
    const [isNewsHovered, setIsNewsHovered] = useState(false);
    const [isPressHovered, setIsPressHovered] = useState(false);
    const [isActivityHovered, setIsActivityHovered] = useState(false);

    // Refs for scroll containers
    const newsScrollRef = useRef(null);
    const pressScrollRef = useRef(null);
    const activityScrollRef = useRef(null);
    const portalsScrollRef = useRef(null);
    const socialScrollRef = useRef(null);

    // Dynamic refs for real-time hover status in animation loops
    const newsHoverRef = useRef(false);
    const pressHoverRef = useRef(false);
    const activityHoverRef = useRef(false);

    // Draggable Portals Slider Logic
    const [isPortalsDragging, setIsPortalsDragging] = useState(false);
    const [isPortalsHovered, setIsPortalsHovered] = useState(false);
    const [isPortalsPlaying, setIsPortalsPlaying] = useState(true);
    const [portalsStartX, setPortalsStartX] = useState(0);
    const [portalsScrollLeft, setPortalsScrollLeft] = useState(0);

    // Latest Updates Slider State
    const [newsIndex, setNewsIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const newsUpdates = [
        { id: 1, image: seizure1, date: "14 - 04 - 2026", title: "NCB dismantles major drug syndicate, arrests 15, recovers...", excerpt: "- Operations across multiple states lead to massive recovery of synthetic drugs and proceeds..." },
        { id: 2, image: raid1, date: "12 - 04 - 2026", title: "NCB raids 3 illicit warehouses in Mumbai, recovers...", excerpt: "- We'll continue to degrade the financial base of trafficking networks and dismantle their..." },
        { id: 3, image: coordination1, date: "10 - 04 - 2026", title: "NCB, Customs commit to strengthening inter-agency sy...", excerpt: "- Collaborative effort to secure borders and prevent cross-border smuggling of psychotropic..." },
        { id: 4, image: seizure1, date: "08 - 04 - 2026", title: "International cooperation leads to high-seas seizure...", excerpt: "- Joint operation with Sri Lankan Navy results in interception of 300kg heroin..." },
        { id: 5, image: raid1, date: "05 - 04 - 2026", title: "NCB busts clandestine laboratory in outskirts of Delhi...", excerpt: "- Specialized chemicals and manufacturing equipment seized along with finished products..." }
    ];

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth <= 600) setCardsToShow(1);
            else if (window.innerWidth <= 992) setCardsToShow(2);
            else setCardsToShow(3);
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const handlePrevNews = () => {
        setNewsIndex((prev) => (prev === 0 ? Math.max(0, newsUpdates.length - cardsToShow) : prev - 1));
    };

    const handleNextNews = () => {
        setNewsIndex((prev) => (prev >= newsUpdates.length - cardsToShow ? 0 : prev + 1));
    };

    // Enforcement Dashboard Data - Multi-Drug Timeline Analysis
    const drugArrestData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Heroin',
                data: [450, 620, 480, 750, 520, 810, 640, 720],
                fill: true,
                backgroundColor: 'rgba(67, 56, 202, 0.1)',
                borderColor: '#4338ca',
                tension: 0.4,
                pointRadius: 3,
                borderWidth: 2,
            },
            {
                label: 'Ganja',
                data: [820, 1100, 950, 1400, 1200, 1650, 1300, 1550],
                fill: true,
                backgroundColor: 'rgba(129, 140, 248, 0.1)',
                borderColor: '#818cf8',
                tension: 0.4,
                pointRadius: 3,
                borderWidth: 2,
            },
            {
                label: 'Cocaine',
                data: [150, 280, 210, 390, 250, 420, 310, 380],
                fill: true,
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderColor: '#6366f1',
                tension: 0.4,
                pointRadius: 3,
                borderWidth: 2,
            },
            {
                label: 'Opium',
                data: [320, 450, 380, 510, 420, 630, 480, 590],
                fill: true,
                backgroundColor: 'rgba(165, 180, 252, 0.1)',
                borderColor: '#a5b4fc',
                tension: 0.4,
                pointRadius: 3,
                borderWidth: 2,
            },
            {
                label: 'Synthetic',
                data: [280, 520, 410, 680, 450, 790, 520, 710],
                fill: true,
                backgroundColor: 'rgba(199, 210, 254, 0.1)',
                borderColor: '#c7d2fe',
                tension: 0.4,
                pointRadius: 3,
                borderWidth: 2,
            }
        ],
    };

    const drugArrestOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                    color: '#475569',
                    font: { size: 12, weight: '600' }
                }
            },
            tooltip: {
                mode: 'nearest',
                intersect: true,
                backgroundColor: '#ffffff',
                titleColor: '#0f172a',
                bodyColor: '#475569',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                bodyFont: { size: 13, weight: '500' }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                border: { display: false },
                grid: { color: '#f1f5f9' },
                ticks: {
                    color: '#94a3b8',
                    padding: 10,
                    font: { size: 11 }
                }
            },
            x: {
                border: { display: false },
                grid: { display: false },
                ticks: {
                    color: '#94a3b8',
                    font: { size: 11, weight: '500' },
                    padding: 10
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'xy',
            intersect: true,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        animation: {
            duration: 3000,
            easing: 'easeOutQuart'
        }
    };

    const personTypeData = {
        labels: ['Dealers', 'Users', 'Smugglers', 'Couriers'],
        datasets: [
            {
                data: [45, 30, 15, 10],
                backgroundColor: [
                    '#4338ca', // Deep Navy
                    '#6366f1', // Indigo
                    '#818cf8', // Medium Blue
                    '#c7d2fe', // Light Blue
                ],
                hoverBackgroundColor: [
                    '#3730a3',
                    '#4f46e5',
                    '#6366f1',
                    '#a5b4fc',
                ],
                borderWidth: 2,
                borderColor: '#ffffff',
                hoverOffset: 12,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                    color: '#475569',
                    font: { size: 12, weight: '500' }
                }
            },
            tooltip: {
                backgroundColor: '#ffffff',
                titleColor: '#0f172a',
                bodyColor: '#475569',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 12,
            }
        },
        animation: {
            animateRotate: true,
            animateScale: true,
            duration: 3000,
            easing: 'easeOutBack'
        }
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                titleColor: '#f8fafc',
                bodyColor: '#e2e8f0',
                padding: 14,
                cornerRadius: 8,
                displayColors: false,
                bodyFont: { family: "'Inter', sans-serif", size: 14, weight: 'bold' },
                titleFont: { family: "'Outfit', sans-serif", size: 13 }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    color: '#ffffff', // Pure white for perfect visibility
                    font: { family: "'Inter', sans-serif", size: 13, weight: '700' } // Larger, bolder
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.15)', // Slightly more visible gridlines
                    drawBorder: false,
                    borderDash: [5, 5],
                },
                ticks: {
                    color: '#ffffff', // Pure white for perfect visibility
                    font: { family: "'Inter', sans-serif", size: 13, weight: '700' }, // Larger, bolder
                    padding: 10,
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeOutQuart'
        }
    };

    const doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%', // Modern thin ring
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 25,
                    color: '#ffffff', // Pure white for perfect visibility
                    font: { family: "'Inter', sans-serif", size: 14, weight: '700' } // Larger, bolder
                }
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                titleColor: '#f8fafc',
                bodyColor: '#e2e8f0',
                padding: 16,
                cornerRadius: 10,
                bodyFont: { family: "'Inter', sans-serif", size: 15, weight: 'bold' },
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true,
            duration: 2200,
            easing: 'easeOutExpo'
        }
    };

    const wantedCriminals = [
        {
            id: 1,
            photo: c1,
            name: "Khalid",
            crime: "Drug Trafficking",
            location: "Mumbai, Maharashtra",
            reward: "₹ 10,00,000",
            status: "High Alert"
        },
        {
            id: 2,
            photo: c2,
            name: "Zoya Ibrahim",
            crime: "Narcotics Mfg",
            location: "Indore, Madhya Pradesh",
            reward: "₹ 5,00,000",
            status: "Wanted"
        },
        {
            id: 3,
            photo: c3,
            name: "Omar",
            crime: "Border Smuggling",
            location: "Amritsar, Punjab",
            reward: "₹ 7,50,000",
            status: "Fugitive"
        }
    ];

    const handleExternalLink = (e, url) => {
        e.preventDefault();
        const confirmExit = window.confirm("You are being redirected to an external website. Do you want to continue?");
        if (confirmExit) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    const handlePortalsMouseDown = (e) => {
        setIsPortalsDragging(true);
        setPortalsStartX(e.pageX - portalsScrollRef.current.offsetLeft);
        setPortalsScrollLeft(portalsScrollRef.current.scrollLeft);
    };

    const handlePortalsMouseMove = (e) => {
        if (!isPortalsDragging) return;
        e.preventDefault();
        const x = e.pageX - portalsScrollRef.current.offsetLeft;
        const walk = (x - portalsStartX) * 2; // Drag speed multiplier
        portalsScrollRef.current.scrollLeft = portalsScrollLeft - walk;
    };

    const stopPortalsDragging = () => {
        setIsPortalsDragging(false);
    };

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        document.title = "Home | Narcotics Control Bureau, Government of India";
    }, []);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, nextSlide]);


    // JS Scroll Animation Effect
    useEffect(() => {
        let animationFrameId;
        const scrollStep = 1.5; // Optimized for a clear, fluid sliding effect that is reliable across browsers

        const performScroll = () => {
            const boxes = [
                { ref: newsScrollRef, playing: isNewsPlaying, hovered: newsHoverRef.current },
                { ref: pressScrollRef, playing: isPressPlaying, hovered: pressHoverRef.current },
                { ref: activityScrollRef, playing: isActivityPlaying, hovered: activityHoverRef.current }
            ];

            boxes.forEach(box => {
                const container = box.ref.current;
                if (container && box.playing && !box.hovered) {
                    const scrollHeight = container.scrollHeight;
                    const clientHeight = container.clientHeight;

                    if (scrollHeight > clientHeight + 5) {
                        container.scrollTop += 0.8;

                        if (container.scrollTop >= (scrollHeight / 2)) {
                            container.scrollTop = 0;
                        }
                    }
                }
            });

            // Horizontal scroll for portals
            if (portalsScrollRef.current && !isPortalsDragging && !isPortalsHovered && isPortalsPlaying) {
                const container = portalsScrollRef.current;
                container.scrollLeft += 0.8; // Portals speed
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }

            animationFrameId = requestAnimationFrame(performScroll);
        };

        animationFrameId = requestAnimationFrame(performScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isNewsPlaying, isPressPlaying, isActivityPlaying, isPortalsHovered, isPortalsDragging, isPortalsPlaying]);

    // GALLERY CAROUSEL LOGIC
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [isGalleryPlaying, setIsGalleryPlaying] = useState(true);
    const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

    const nextGallery = useCallback(() => {
        setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, [galleryImages.length]);

    const prevGallery = () => {
        setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    useEffect(() => {
        let interval;
        if (isGalleryPlaying) {
            interval = setInterval(nextGallery, 3000);
        }
        return () => clearInterval(interval);
    }, [isGalleryPlaying, nextGallery]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const handleSocialPrev = () => {
        if (socialScrollRef.current) {
            const card = socialScrollRef.current.querySelector('.social-card');
            const cardWidth = card.getBoundingClientRect().width + 20; // card width + gap
            socialScrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    };

    const handleSocialNext = () => {
        if (socialScrollRef.current) {
            const card = socialScrollRef.current.querySelector('.social-card');
            const cardWidth = card.getBoundingClientRect().width + 20; // card width + gap
            socialScrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className="home-container">
            {/* Hero Slider Section */}
            <section className="hero-slider" aria-label="Hero Image Slider">
                <div className="slider-track"
                    style={{ "--current-slide": currentIndex }} >
                    {slides.map((slide) => (
                        <div key={slide.id} className="slide">
                            {/* Blurred Background Layer to fill space */}
                            <div className="slide-bg-blur">
                                <img src={slide.image} alt="" aria-hidden="true" />
                            </div>
                            <div className="slide-image-container">
                                <img src={slide.image} alt={slide.title} className="foreground-img" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Navigation Controls - Matching Screenshot (Black blocks) */}
                <button
                    className="slider-control prev-btn"
                    onClick={prevSlide}
                    aria-label="Previous Slide" >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    className="slider-control next-btn"
                    onClick={nextSlide}
                    aria-label="Next Slide" >
                    <i className="bi bi-chevron-right"></i>
                </button>

                {/* Dot Indicators & Play/Pause - Positioned Right bottom as in screenshot */}
                <div className="slider-utility-row">
                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === currentIndex ? "true" : "false"}
                            />
                        ))}
                    </div>
                    <button className={`slider-play-pause ${isPlaying ? "playing" : "paused"}`}
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                    >
                        {isPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                    </button>
                </div>
            </section>

            <section className="meity-announcement-ticker">
                <div className="container ticker-flex" data-aos="fade-up" data-aos-duration="2000">
                    <div className="ticker-label">
                        Announcements
                    </div>
                    <div className="ticker-scroll-field">
                        <div className={`ticker-track ${isTickerPaused ? "paused" : ""}`}>
                            <p><strong>Latest Update:</strong> Submission of Expression of Interest (EoI) for Transfer of Technology (ToT) under the <strong>Ministry of Electronics and Information Technology</strong> programs. <span className="sep">|</span> <strong>Narcotics Control Bureau:</strong> Commitment to a <strong>Drug-Free India</strong> through multi-agency coordination (NCORD). <span className="sep">|</span> <strong>Help Desk Numbers:</strong> 011-26761000, 26761144.</p>
                        </div>
                    </div>
                    <button className="ticker-action-btn" aria-label={isTickerPaused ? "Play" : "Pause"} onClick={() => setIsTickerPaused(!isTickerPaused)}>
                        {isTickerPaused ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>}
                    </button>
                </div>
            </section>

            <section className="dg-message-portal-section-new">
                <div className="container dg-portal-flex-new" data-aos="fade-up" data-aos-duration="2000">
                    <div className="dg-message-card-container">

                        {/* Left Profile Card */}
                        <div className="dg-image-column-new">
                            <div className="dg-profile-card">
                                <div className="dg-profile-image-wrap">
                                    <img src={dgProfile} alt="Shri Anurag Garg, IPS" />
                                </div>
                                <div className="dg-profile-title-block">
                                    <span className="dg-designation-small">DIRECTOR GENERAL</span>
                                    <span className="dg-name-bold">Shri Anurag Garg, IPS</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content Column */}
                        <div className="dg-text-column-new">
                            <div className="dg-badge-modern">
                                <i className="bi bi-shield-check"></i> LEADERSHIP MESSAGE
                            </div>

                            <h2 className="dg-headline-modern">
                                Securing our <span>Nation's</span> Future
                            </h2>

                            <div className="dg-quote-box-modern">
                                <div className="dg-quote-icon-badge">
                                    <i className="bi bi-quote"></i>
                                </div>
                                <p className="dg-quote-text-modern">
                                    The Narcotics Control Bureau is the guardian of our nation's future,
                                    protecting youth and families from the scourge of drugs through intelligence
                                    and coordination. We are committed to a drug-free India through persistent
                                    enforcement, strict adherence to the law, and nationwide community
                                    awareness.
                                </p>
                            </div>

                            <div className="dg-action-row">
                                <button className="dg-read-full-btn">
                                    READ FULL MESSAGE <span className="btn-icon-circle"><i className="bi bi-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="ncb-live-enforcement-section dark-mode" ref={enforcementRef}>
                <div className="container" data-aos="fade-up" data-aos-duration="2000">
                    <div className="perfect-section-header dark">
                        <span className="live-pulse-dot"></span>
                        <h2 className="gateway-title text-white">Live <span className="text-accent">Enforcement Analytics</span></h2>
                    </div>

                    {/* Dashboard Layout Container - Top Grid, Bottom Charts */}
                    <div className="dashboard-grid-layout">
                        {/* Top: 6 KPI Cards Grid */}
                        <div className="enforcement-kpi-grid">

                            <div className="kpi-stat-card dark-card has-blue-glow">
                                <div className="kpi-icon-box blue">
                                    <i className="bi bi-box-seam"></i>
                                </div>
                                <div className="kpi-info">
                                    <span className="kpi-label">Total Seizures in 2026</span>
                                    <h3 className="kpi-value text-white"><Counter target={12450} /> <small>KG</small></h3>
                                    <div className="kpi-trend up"><i className="bi bi-arrow-up-right"></i> +14%</div>
                                </div>
                            </div>

                            <div className="kpi-stat-card dark-card has-blue-glow">
                                <div className="kpi-icon-box blue">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <div className="kpi-info">
                                    <span className="kpi-label">Total Seizures by NCB</span>
                                    <h3 className="kpi-value text-white"><Counter target={35820} /> <small>KG</small></h3>
                                    <div className="kpi-trend up"><i className="bi bi-arrow-up-right"></i> +8%</div>
                                </div>
                            </div>

                            <div className="kpi-stat-card dark-card has-indigo-glow">
                                <div className="kpi-icon-box indigo">
                                    <i className="bi bi-file-earmark-medical"></i>
                                </div>
                                <div className="kpi-info">
                                    <span className="kpi-label">Cases Registered in 2026</span>
                                    <h3 className="kpi-value text-white"><Counter target={1245} /></h3>
                                    <div className="kpi-trend up"><i className="bi bi-arrow-up-right"></i> +5%</div>
                                </div>
                            </div>

                            <div className="kpi-stat-card dark-card has-indigo-glow">
                                <div className="kpi-icon-box indigo">
                                    <i className="bi bi-journal-check"></i>
                                </div>
                                <div className="kpi-info">
                                    <span className="kpi-label">Cases Registered by NCB</span>
                                    <h3 className="kpi-value text-white"><Counter target={4892} /></h3>
                                    <div className="kpi-trend up"><i className="bi bi-arrow-up-right"></i> +11%</div>
                                </div>
                            </div>

                            <div className="kpi-stat-card dark-card has-cyan-glow">
                                <div className="kpi-icon-box cyan">
                                    <i className="bi bi-person-exclamation"></i>
                                </div>
                                <div className="kpi-info">
                                    <span className="kpi-label">Total Arrests in 2026</span>
                                    <h3 className="kpi-value text-white"><Counter target={3120} /></h3>
                                    <div className="kpi-trend up"><i className="bi bi-arrow-up-right"></i> +18%</div>
                                </div>
                            </div>

                            <div className="kpi-stat-card dark-card has-cyan-glow">
                                <div className="kpi-icon-box cyan">
                                    <i className="bi bi-people"></i>
                                </div>
                                <div className="kpi-info">
                                    <span className="kpi-label">Total Arrests by NCB</span>
                                    <h3 className="kpi-value text-white"><Counter target={12854} /></h3>
                                    <div className="kpi-trend up"><i className="bi bi-arrow-up-right"></i> +9%</div>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Side: Charts Grid */}
                        <div className="enforcement-charts-main mt-4">
                            <div className="chart-panel-card dark-panel wide-panel">
                                <div className="chart-header">
                                    <h3 className="text-white">Drug-wise Arrest Statistics</h3>
                                    <p className="text-center text-white">Analysis of arrests categorized by substance and timeline.</p>
                                </div>
                                <div className="chart-canvas-container">
                                    {enforcementInView && <Line data={drugArrestData} options={drugArrestOptions} />}
                                </div>
                            </div>

                            <div className="chart-panel-card dark-panel narrow-panel">
                                <div className="chart-header">
                                    <h3 className="text-white">Classification of Arrests</h3>
                                    <p className="text-center text-white">Percentage distribution by trafficking role.</p>
                                </div>
                                <div className="chart-canvas-container">
                                    {enforcementInView && <Pie data={personTypeData} options={pieOptions} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* <section className="about-meity-section" id="about-us">
                <div className="container">
                    <div className="perfect-section-header">
                        <h2 className="gateway-title">
                            <i className="bi bi-diagram-3-fill meity-icon"></i>
                            About <span>Narcotics Control Bureau</span>
                        </h2>
                    </div>

                    <div className="about-meity-grid">
                        <div className="about-meity-left">

                        <div className="meity-description">
                            <p>
                                The Narcotics Control Bureau (NCB), under <strong>Ministry of Home Affairs</strong>, is the nodal agency responsible for coordinating drug law enforcement throughout the country. It is rooted in <strong>Article 47</strong> of the Indian Constitution, directing the State to endeavour to bring about prohibition of the consumption of intoxicating drugs injurious to health.
                            </p>
                            <p>
                                As the Central Authority, NCB dismantles illicit networks and coordinates with international conventions including the 1961 Single Convention on Narcotic Drugs and the 1971 Convention on Psychotropic Substances.
                            </p>
                        </div>

                        <div className="meity-quick-boxes">
                            <div className="meity-box">
                                <i className="bi bi-people-fill"></i>
                                <span>Our Team</span>
                            </div>
                            <div className="meity-box">
                                <i className="bi bi-grid-3x3-gap-fill"></i>
                                <span>Legislative Policy</span>
                            </div>
                            <div className="meity-box">
                                <i className="bi bi-bar-chart-fill"></i>
                                <span>Our Performance</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-meity-right">
                        <div className="meity-profile-card">
                            <div className="profile-img-box">
                                <div className="placeholder-emblem">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                            </div>
                            <div className="profile-info">
                                <span className="profile-name">Zero Tolerance</span>
                                <span className="profile-designation">DRUG-FREE INDIA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

            <section className="ncb-values-section">
                <div className="container" data-aos="fade-up" data-aos-duration="2000">
                    <div className="values-grid">
                        <div className="values-left-col">
                            <div className="value-card horizontal">
                                <div className="value-icon-box">
                                    <i className="bi bi-rocket-takeoff-fill"></i>
                                </div>
                                <div className="value-content">
                                    <h3>Our Mission</h3>
                                    <p>Prevent and combat abuse and illicit traffic of drugs through strategic enforcement and multi-agency coordination.</p>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className="value-card horizontal">
                                <div className="value-icon-box">
                                    <i className="bi bi-eye-fill"></i>
                                </div>
                                <div className="value-content">
                                    <h3>Vision</h3>
                                    <p>To endeavour for a drug free society and protect the nation from the menace of narcotics.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Motto/Goal */}
                        <div className="values-right-col">
                            <div className="value-card vertical">
                                <div className="value-icon-box">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <div className="value-content">
                                    <h3>Our Motto</h3>
                                    <p>Intelligence, Enforcement, Coordination.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Motto, Mission & Vision Section - IMMERSIVE REDESIGN (COMMENTED OUT FOR FUTURE USE)
            <section className="ncb-values-section-dark">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                
                <div className="container">
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="card-sparkle"></div>
                            <div className="value-icon-box">
                                <i className="bi bi-rocket-takeoff-fill"></i>
                            </div>
                            <div className="value-content">
                                <h3>Our Mission</h3>
                                <p>Prevent and combat abuse and illicit traffic of drugs through strategic enforcement and multi-agency coordination.</p>
                            </div>
                        </div>

                        <div className="value-card">
                            <div className="card-sparkle"></div>
                            <div className="value-icon-box">
                                <i className="bi bi-eye-fill"></i>
                            </div>
                            <div className="value-content">
                                <h3>Vision</h3>
                                <p>To endeavour for a drug free society and protect the nation from the menace of narcotics.</p>
                            </div>
                        </div>

                        <div className="value-card">
                            <div className="card-sparkle"></div>
                            <div className="value-icon-box">
                                <i className="bi bi-shield-check"></i>
                            </div>
                            <div className="value-content">
                                <h3>Our Motto</h3>
                                <p>Intelligence, Enforcement, Coordination.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            */}
            {/* Key Offerings & What's New Section - MeitY / CDAC Exact Design */}
            <section className="key-offerings-news-section dark-mode">
                <div className="container-fluid" data-aos="fade-up" data-aos-duration="2000">
                    <div className="row offerings-news-grid">
                        {/* Left Side: Key Offerings with Tabs */}
                        <div className="col-lg-8 mb-4">
                            <div className="key-offerings-column">
                                <div className="offering-header-flex">
                                    <i className="bi bi-clipboard2-check offering-main-icon"></i>
                                    <h2>Digital Initiatives</h2>
                                </div>

                                <div className="offerings-tab-container">
                                    <div className="offerings-tabs-wrapper">
                                        <div className="offerings-tabs-row">
                                            {/* <button className={`offer-tab ${activeOfferTab === "Legal Judgments" ? "active" : ""}`} onClick={() => setActiveOfferTab("Legal Judgments")}>
                                                <i className="bi bi-gavel"></i> Legal Judgments
                                            </button> */}
                                            <button className={`offer-tab ${activeOfferTab === "Most Wanted" ? "active" : ""}`} onClick={() => setActiveOfferTab("Most Wanted")}>
                                                <i className="bi bi-person-badge"></i> Most Wanted
                                            </button>
                                            <button className={`offer-tab ${activeOfferTab === "Community Outreach" ? "active" : ""}`} onClick={() => setActiveOfferTab("Community Outreach")}>
                                                <i className="bi bi-people"></i> Community Outreach
                                            </button>
                                        </div>
                                        <div className={`tab-indicator-active pos-${activeOfferTab.toLowerCase().replace(' ', '-')}`}></div>
                                    </div>

                                    <div className="offerings-tab-content-wrapper" key={activeOfferTab}>
                                        <div className="offerings-tab-content">
                                            {/* {activeOfferTab === "Legal Judgments" && (
                                                <div className="legal-table-tab-container">


                                                    <div className="table-responsive-wrapper">
                                                        <table className="legal-minimal-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>CASE TITLE</th>
                                                                    <th>COURT</th>
                                                                    <th>DATE</th>
                                                                    <th className="text-center">VIEW JUDGMENT</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="case-title">Cybercrime Investigation Case</td>
                                                                    <td>Supreme Court</td>
                                                                    <td>12-Mar-2026</td>
                                                                    <td className="text-center"><button className="table-view-btn"><i className="bi bi-file-earmark-text"></i> View</button></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="case-title">Digital Privacy Rights Case</td>
                                                                    <td>Delhi HC</td>
                                                                    <td>05-Mar-2026</td>
                                                                    <td className="text-center"><button className="table-view-btn"><i className="bi bi-file-earmark-text"></i> View</button></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="case-title">Drug Trafficking Case</td>
                                                                    <td>Punjab HC</td>
                                                                    <td>01-Mar-2026</td>
                                                                    <td className="text-center"><button className="table-view-btn"><i className="bi bi-file-earmark-text"></i> View</button></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>


                                                </div>
                                            )} */}
                                            {activeOfferTab === "Most Wanted" && (
                                                <div className="tab-detailed-container wanted-tab-v2">

                                                    <div className="table-responsive-wrapper">
                                                        <table className="wanted-list-table legal-minimal-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>PROFILE</th>
                                                                    <th>NAME</th>
                                                                    <th>OFFENCE</th>
                                                                    <th>LAST KNOWN STATE</th>
                                                                    <th className="text-center">REWARD</th>
                                                                    <th className="text-center">ACTION</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {wantedCriminals.map((criminal) => (
                                                                    <tr key={criminal.id}>
                                                                        <td style={{ width: '80px' }}>
                                                                            <div className="criminal-pfp">
                                                                                <img src={criminal.photo} alt={criminal.name} />
                                                                                <span className={`status-tag ${criminal.status.toLowerCase().replace(' ', '-')}`}></span>
                                                                            </div>
                                                                        </td>
                                                                        <td className="criminal-name-cell">
                                                                            <strong>{criminal.name}</strong>
                                                                            <span className={`badge-status ${criminal.status.toLowerCase().replace(' ', '-')}`}>{criminal.status}</span>
                                                                        </td>
                                                                        <td><span className="crime-label-mini text-white">{criminal.crime}</span></td>
                                                                        <td className="location-text-v2">
                                                                            <i className="bi bi-geo-alt-fill"></i> {criminal.location}
                                                                        </td>
                                                                        <td className="text-center reward-text-v2">{criminal.reward}</td>
                                                                        <td className="text-center">
                                                                            <button className="wanted-icon-btn" aria-label={`View details for ${criminal.name}`}>
                                                                                <i className="bi bi-eye-fill"></i>
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>
                                            )}
                                            {activeOfferTab === "Community Outreach" && (
                                                <ul className="offering-list">
                                                    <li><span>Anti Drug Awareness Program at New Delhi HQ</span> <i className="bi bi-chevron-right"></i></li>
                                                    <li><span>Youth Campaign: Say No to Drugs, Say Yes to Life</span> <i className="bi bi-chevron-right"></i></li>
                                                    <li><span>School Seminar on Substance Abuse Prevention</span> <i className="bi bi-chevron-right"></i></li>
                                                    <li><span>NGO Collaboration: Community Support Systems</span> <i className="bi bi-chevron-right"></i></li>
                                                    <li><span>Public Outreach: Narcotics Awareness Drive 2026</span> <i className="bi bi-chevron-right"></i></li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="offerings-footer">
                                    <button className="meity-view-more-btn">VIEW MORE <i className="bi bi-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: What's New Box */}
                        <div className="col-lg-4">
                            <div className="whats-new-column">
                                <div className="offering-header-flex">
                                    <i className="bi bi-stars offering-main-icon"></i>
                                    <h2>Recent Highlights</h2>
                                    <button className="play-pause-header-btn ms-auto" onClick={() => setIsNewsPlaying(!isNewsPlaying)} title={isNewsPlaying ? "Pause" : "Play"} aria-label={isNewsPlaying ? "Pause News" : "Play News"}>
                                        {isNewsPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                                    </button>
                                </div>

                                <div className="whats-new-dark-box"
                                    onMouseEnter={() => { newsHoverRef.current = true; setIsNewsHovered(true); }}
                                    onMouseLeave={() => { newsHoverRef.current = false; setIsNewsHovered(false); }}>
                                    <div className="update-scroll-container" ref={newsScrollRef}>
                                        <ul className="whats-new-list">
                                            {[
                                                { title: "Training program on darknet investigation concludes at NCB Academy.", isAlert: false },
                                                { title: "MOU signed with Coast Guard for enhanced maritime surveillance.", isAlert: false },
                                                { title: "Warning regarding new psychoactive substances detected in market.", isAlert: true },
                                                { title: "Reporting of suspicious activities across various states.", isAlert: false },
                                                { title: "Financial Assistance for Drug Law Enforcement Mechanism 2025.", isAlert: false },
                                                { title: "Major achievements of NCB for the month of February, 2025.", isAlert: false },
                                                { title: "Advisory: Stay safe from online medicine fraud and illegal pharmacies.", isAlert: true },
                                                { title: "Director General chairs high-level review meeting on border security.", isAlert: false },
                                                { title: "New recruitment notice for Intelligence Officers released.", isAlert: false },
                                                { title: "NCB Academy announces advanced course on digital forensics.", isAlert: false },
                                                { title: "Special operation 'Clean Sweep' results in major drug bust.", isAlert: false },
                                                { title: "Public alert: Rise in synthetic drug trafficking via darknet.", isAlert: true }
                                            ].concat([
                                                { title: "Training program on darknet investigation concludes at NCB Academy.", isAlert: false },
                                                { title: "MOU signed with Coast Guard for enhanced maritime surveillance.", isAlert: false },
                                                { title: "Warning regarding new psychoactive substances detected in market.", isAlert: true },
                                                { title: "Reporting of suspicious activities across various states.", isAlert: false },
                                                { title: "Financial Assistance for Drug Law Enforcement Mechanism 2025.", isAlert: false },
                                                { title: "Major achievements of NCB for the month of February, 2025.", isAlert: false },
                                                { title: "Advisory: Stay safe from online medicine fraud and illegal pharmacies.", isAlert: true },
                                                { title: "Director General chairs high-level review meeting on border security.", isAlert: false },
                                                { title: "New recruitment notice for Intelligence Officers released.", isAlert: false },
                                                { title: "NCB Academy announces advanced course on digital forensics.", isAlert: false },
                                                { title: "Special operation 'Clean Sweep' results in major drug bust.", isAlert: false },
                                                { title: "Public alert: Rise in synthetic drug trafficking via darknet.", isAlert: true }
                                            ]).map((item, i) => (
                                                <li key={i}>
                                                    <div className="list-item-with-dot">
                                                        {item.isAlert ? <span className="red-dot-indicator"></span> : <span className="blue-dot-placeholder"></span>}
                                                        <span>{item.title}</span>
                                                    </div>
                                                    <i className="bi bi-chevron-right"></i>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="offerings-footer">
                                    <button className="meity-view-more-btn">VIEW MORE <i className="bi bi-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="latest-updates-section">
                <div className="container" data-aos="fade-up" data-aos-duration="2000">
                    <div className="updates-header">
                        <div className="header-title">
                            <h2 className="main-title"><span className="text-navy">Latest</span> Updates</h2>
                        </div>
                        <div className="header-controls">
                            <div className="nav-arrows">
                                <button
                                    className="nav-arrow-btn"
                                    aria-label="Previous Update"
                                    onClick={handlePrevNews}
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <button
                                    className="nav-arrow-btn"
                                    aria-label="Next Update"
                                    onClick={handleNextNews}
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="updates-carousel-container">
                        <div
                            className="updates-grid"
                            style={{ transform: `translateX(-${newsIndex * (100 / cardsToShow)}%)` }}
                        >
                            {newsUpdates.map((news) => (
                                <div className="update-card" key={news.id}>
                                    <div className="update-inner">
                                        <div className="update-image-box">
                                            <img src={news.image} alt="NCB Operation" className="update-img" />
                                            <div className="update-date-badge">{news.date}</div>
                                        </div>
                                        <div className="update-body">
                                            <h3 className="update-title">{news.title}</h3>
                                            <p className="update-excerpt">{news.excerpt}</p>
                                            <div className="card-footer-flex">
                                                <Link to={`/media/latest-news/${news.id}`} className="continue-reading-pill">
                                                    Continue reading <i className="bi bi-chevron-double-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="updates-footer">
                        <Link to="/media/latest-news" className="see-more-footer-link">
                            <i className="bi bi-arrow-right-circle"></i> See More
                        </Link>
                    </div>
                </div>
            </section>




            <section className="social-media-section">
                <div className="container" data-aos="fade-up" data-aos-duration="2000">
                    <div className="perfect-section-header">
                        <span className="live-pulse-dot"></span>
                        <h2 className="gateway-title">Social <span>Media</span></h2>
                        <div className="social-nav-controls">
                            <button className="social-nav-btn prev" onClick={handleSocialPrev} aria-label="Previous social card">
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button className="social-nav-btn next" onClick={handleSocialNext} aria-label="Next social card">
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="social-viewport">
                        <div className="social-grid" ref={socialScrollRef}>
                            {/* Column 1: X (Twitter) */}
                            <div className="social-card x-card">
                                <div className="social-card-header x-card-header">
                                    <h3>X Timeline</h3>
                                    <i className="bi bi-twitter-x"></i>
                                </div>
                                <div className="social-card-body">
                                    <iframe
                                        className="social-iframe"
                                        src="https://syndication.twitter.com/srv/timeline-profile/screen-name/narcoticsbureau"
                                        title="X/Twitter Feed"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="embed-placeholder">
                                        <i className="bi bi-twitter-x"></i>
                                        <p>Follow @narcoticsbureau on X</p>
                                        <a href="https://x.com/narcoticsbureau" target="_blank" rel="noopener noreferrer" className="visit-social-btn">VIEW ON X</a>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Youtube */}
                            <div className="social-card youtube-card">
                                <div className="social-card-header youtube-card-header">
                                    <h3>YouTube Official</h3>
                                    <i className="bi bi-youtube"></i>
                                </div>
                                <div className="social-card-body">
                                    <iframe
                                        className="social-iframe"
                                        src="https://www.youtube.com/embed/videoseries?list=UUb3-9pF4m0BbLpW-yfR1Ipg"
                                        title="YouTube Channel Feed"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                    <div className="embed-placeholder">
                                        <i className="bi bi-youtube"></i>
                                        <p>NCB Official YouTube Channel</p>
                                        <a href="https://www.youtube.com/channel/UCb3-9pF4m0BbLpW-yfR1Ipg" target="_blank" rel="noopener noreferrer" className="visit-social-btn">WATCH VIDEOS</a>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Facebook */}
                            <div className="social-card facebook-card">
                                <div className="social-card-header facebook-card-header">
                                    <h3>Facebook Page</h3>
                                    <i className="bi bi-facebook"></i>
                                </div>
                                <div className="social-card-body">
                                    <iframe
                                        className="social-iframe"
                                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnarcoticscontrolbureauindia&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                                        title="Facebook Feed"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="embed-placeholder">
                                        <i className="bi bi-facebook"></i>
                                        <p>Connect with NCB on Facebook</p>
                                        <a href="https://www.facebook.com/narcoticscontrolbureauindia" target="_blank" rel="noopener noreferrer" className="visit-social-btn">VISIT PAGE</a>
                                    </div>
                                </div>
                            </div>

                            {/* Column 4: Instagram */}
                            <div className="social-card instagram-card">
                                <div className="social-card-header instagram-card-header">
                                    <h3>Instagram Feed</h3>
                                    <i className="bi bi-instagram"></i>
                                </div>
                                <div className="social-card-body instagram-mock-body">
                                    <div className="insta-profile-header">
                                        <div className="insta-avatar">
                                            <img src="/logo.svg" alt="NCB" />
                                        </div>
                                        <div className="insta-user-info">
                                            <div className="insta-username">india.ncb <i className="bi bi-patch-check-fill"></i></div>
                                            <div className="insta-followers">Official Account</div>
                                        </div>
                                        <a href="https://www.instagram.com/india.ncb?igsh=MWo2dmtlOWFlaDgxeA%3D%3D" target="_blank" rel="noopener noreferrer" className="insta-view-profile-link">Follow</a>
                                    </div>
                                    <div className="insta-post-preview">
                                        <img src="https://images.unsplash.com/photo-1541873676947-9dc60f748d90?q=80&w=1000&auto=format&fit=crop" alt="NCB Activity" />
                                        <div className="insta-type-icon"><i className="bi bi-play-circle"></i></div>
                                    </div>
                                    <div className="insta-card-footer">
                                        <div className="insta-actions">
                                            <i className="bi bi-heart"></i>
                                            <i className="bi bi-chat"></i>
                                            <i className="bi bi-send"></i>
                                            <i className="bi bi-bookmark ms-auto"></i>
                                        </div>
                                        <p><strong>india.ncb</strong> Spreading awareness against drug abuse. Join the mission for a drug-free India. <span className="more-link">#DrugFreeIndia</span></p>
                                        <a href="https://www.instagram.com/india.ncb?igsh=MWo2dmtlOWFlaDgxeA%3D%3D" target="_blank" rel="noopener noreferrer" className="insta-action-btn">VIEW ON INSTAGRAM</a>
                                    </div>
                                    <div className="embed-placeholder">
                                        <i className="bi bi-instagram"></i>
                                        <p>Official Instagram Feed</p>
                                        <a href="https://www.instagram.com/india.ncb?igsh=MWo2dmtlOWFlaDgxeA%3D%3D" target="_blank" rel="noopener noreferrer" className="visit-social-btn">VIEW PROFILE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter & Emergency Contact Section - Screenshot Match */}
            <section className="newsletter-emergency-section">
                <div className="container" data-aos="fade-up" data-aos-duration="2000">
                    <div className="split-layout">
                        {/* Left: Newsletter Subscription */}
                        <div className="newsletter-box">
                            <div className="newsletter-content">
                                <h2>Subscribe to our Newsletter</h2>
                                <p>Never miss updates and information about our activities</p>
                                <div className="subscribe-form">
                                    <input type="email" placeholder="Your email address" />
                                    <button>Subscribe</button>
                                </div>
                                <div className="newsletter-footer-row">
                                    <div className="ncb-logo-badge">
                                        <img src={ncbLogo} alt="NCB Seal" />
                                    </div>
                                    <div className="drug-helpline-info">
                                        <span className="helpline-label">Drug Helpline</span>
                                        <span className="helpline-number"><i className="bi bi-telephone-outbound"></i> 14446</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Emergency Contacts */}
                        <div className="emergency-box">
                            <div className="emergency-header">
                                <div className="title-area">
                                    <h2><span>Emergency</span> Numbers</h2>
                                    <p>Dial these numbers in case of emergency</p>
                                </div>
                                <div className="call-direct">
                                    <span className="label">CALL NCB ON</span>
                                    <span className="number">011-2676 1000</span>
                                </div>
                            </div>
                            <div className="emergency-cards">
                                <div className="e-card">
                                    <div className="icon-circle">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>
                                    <div className="card-info">
                                        <h3>112</h3>
                                        <span>National Emergency</span>
                                    </div>
                                </div>
                                <div className="e-card">
                                    <div className="icon-circle">
                                        <i className="bi bi-shield-shaded"></i>
                                    </div>
                                    <div className="card-info">
                                        <h3>100</h3>
                                        <span>Police Service</span>
                                    </div>
                                </div>
                                <div className="e-card">
                                    <div className="icon-circle">
                                        <i className="bi bi-fire"></i>
                                    </div>
                                    <div className="card-info">
                                        <h3>101</h3>
                                        <span>Fire Service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 
            <section className="photo-gallery-carousel-section">
                <div className="container" data-aos="fade-up" data-aos-duration="2000">
                    <div className="perfect-section-header">
                        <span className="live-pulse-dot"></span>
                        <h2 className="gateway-title">Media <span>Gallery</span></h2>
                        <div className="gallery-controls">
                            <button className="gallery-nav-btn prev" onClick={prevGallery} aria-label="Previous image"><i className="bi bi-chevron-left"></i></button>
                            <button className="gallery-stop-btn" onClick={() => setIsGalleryPlaying(!isGalleryPlaying)} aria-label={isGalleryPlaying ? "Pause Gallery" : "Play Gallery"}>
                                {isGalleryPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                            </button>
                            <button className="gallery-nav-btn next" onClick={nextGallery} aria-label="Next image"><i className="bi bi-chevron-right"></i></button>
                        </div>
                    </div>

                    <div className="gallery-slider-viewport">
                        <div className="gallery-slider-track"
                            style={{ transform: `translateX(-${galleryIndex * (100 / (window.innerWidth > 992 ? 4 : 2))}%)` }}>
                            {galleryImages.concat(galleryImages.slice(0, 5)).map((img, i) => (
                                <div key={i} className="gallery-slide-item">
                                    <div className="gallery-img-wrapper">
                                        <img src={img} alt={`Gallery ${i + 1}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            */}







            <section className="portals-slider-section">
                <div className="container" data-aos="fade-up" data-aos-duration="2000">
                    <div className="perfect-section-header">
                        <span className="live-pulse-dot"></span>
                        <h2 className="gateway-title">Important <span>Websites</span></h2>
                        <div className="gallery-controls">
                            <button
                                className="gallery-stop-btn"
                                onClick={() => setIsPortalsPlaying(!isPortalsPlaying)}
                                aria-label={isPortalsPlaying ? "Pause Portals Slider" : "Play Portals Slider"}
                            >
                                {isPortalsPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                            </button>
                        </div>
                    </div>

                    <div className="portals-viewport"
                        ref={portalsScrollRef}
                        onMouseEnter={() => setIsPortalsHovered(true)}
                        onMouseLeave={() => {
                            setIsPortalsHovered(false);
                            stopPortalsDragging();
                        }}
                        onMouseDown={handlePortalsMouseDown}
                        onMouseMove={handlePortalsMouseMove}
                        onMouseUp={stopPortalsDragging}
                        onTouchStart={(e) => {
                            setIsPortalsDragging(true);
                            setPortalsStartX(e.touches[0].pageX - portalsScrollRef.current.offsetLeft);
                            setPortalsScrollLeft(portalsScrollRef.current.scrollLeft);
                        }}
                        onTouchMove={(e) => {
                            if (!isPortalsDragging) return;
                            const x = e.touches[0].pageX - portalsScrollRef.current.offsetLeft;
                            const walk = (x - portalsStartX) * 2;
                            portalsScrollRef.current.scrollLeft = portalsScrollLeft - walk;
                        }}
                        onTouchEnd={stopPortalsDragging}
                    >
                        <div className="portals-track">
                            {[
                                { name: "NIDAAN", url: "https://nidaan.ncb.gov.in/", logo: nidaanLogo },
                                { name: "MANAS", url: "https://www.narcoordindia.gov.in/", logo: manasLogo },
                                { name: "Swachh Bharat", url: "https://swachhbharatmission.gov.in/", logo: swachhLogo },
                                { name: "PMNRF", url: "https://pmnrf.gov.in/", logo: pmnrfLogo },
                                { name: "Data portal", url: "https://data.gov.in/", logo: dataGovLogo },
                                { name: "MyGov", url: "https://www.mygov.in/", logo: myGovLogo },
                                { name: "India.gov.in", url: "https://www.india.gov.in/", logo: indiaGovLogo },
                                { name: "G-20", url: "http://goidirectory.nic.in/", logo: goLogo },
                                { name: "IIG", url: "https://iig.gov.in/", logo: iigLogo },
                                { name: "NCB", url: "https://ncb.gov.in/", logo: ncbLogo }
                            ].concat([
                                { name: "NIDAAN", url: "https://nidaan.ncb.gov.in/", logo: nidaanLogo },
                                { name: "MANAS", url: "https://www.narcoordindia.gov.in/", logo: manasLogo },
                                { name: "Swachh Bharat", url: "https://swachhbharatmission.gov.in/", logo: swachhLogo },
                                { name: "PMNRF", url: "https://pmnrf.gov.in/", logo: pmnrfLogo },
                                { name: "Data portal", url: "https://data.gov.in/", logo: dataGovLogo },
                                { name: "MyGov", url: "https://www.mygov.in/", logo: myGovLogo },
                                { name: "India.gov.in", url: "https://www.india.gov.in/", logo: indiaGovLogo },
                                { name: "G-20", url: "http://goidirectory.nic.in/", logo: goLogo },
                                { name: "IIG", url: "https://iig.gov.in/", logo: iigLogo },
                                { name: "NCB", url: "https://ncb.gov.in/", logo: ncbLogo }
                            ]).map((portal, i) => (
                                <a
                                    href={portal.url}
                                    key={i}
                                    className="portal-logo-item"
                                    onClick={(e) => handleExternalLink(e, portal.url)}
                                    aria-label={`Visit ${portal.name} Website (Link opens in new tab)`}
                                >
                                    <div className="logo-white-bg">
                                        <img src={portal.logo} alt={portal.name} draggable="false" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section >



        </div >
    );
}

export default Home;