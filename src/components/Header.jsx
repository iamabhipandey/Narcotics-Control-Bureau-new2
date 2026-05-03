import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import "../styles/Navbar.scss";

function Header() {
    const [language, setLanguage] = useState("English");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("ncb-theme") || "default");
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isPartnersOpen, setIsPartnersOpen] = useState(false);
    const [isMediaOpen, setIsMediaOpen] = useState(false);
    const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);
    const [isJoinOpen, setIsJoinOpen] = useState(false);
    const [isLegalOpen, setIsLegalOpen] = useState(false);
    const [isOthersOpen, setIsOthersOpen] = useState(false);
    const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [isMousOpen, setIsMousOpen] = useState(false);
    const location = useLocation();
 
    // Effect to handle mobile sidebar and accessibility scroll lock
    useEffect(() => {
        if (isMenuOpen || isAccessibilityOpen) {
            document.body.classList.add("sidebar-open");
        } else {
            document.body.classList.remove("sidebar-open");
        }
        // Cleanup if component unmounts
        return () => document.body.classList.remove("sidebar-open");
    }, [isMenuOpen, isAccessibilityOpen]);


    // Effect to apply theme
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("ncb-theme", theme);
    }, [theme]);

    const isMediaActive = () => {
        const mediaRoutes = [
            "/media",
            "/media/awareness-videos",
            "/media/photo-gallery",
            "/media/video-gallery",
            "/media/visitor-photos",
            "/media/officer-visits",
            "/publication",
            "/awareness/spandan",
            "/awareness/cbse-mou",
            "/media/annual-reports"
        ];
        return mediaRoutes.some(path => location.pathname === path);
    };

    const isAboutActive = () => {
        const aboutRoutes = ["/about", "/organization", "/ncb-history", "/legislations", "/coordination", "/vigilance", "/bilateral-agreements", "/mou", "/motto-mission-vision"];
        return aboutRoutes.some(path => location.pathname === path);
    };


    const toggleAccessibility = () => {
        setIsAccessibilityOpen(!isAccessibilityOpen);
    };

    const skipToContent = (e) => {
        e.preventDefault();
        const mainContent = document.getElementById("main-content");
        if (mainContent) {
            mainContent.tabIndex = -1;
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
        setIsAccessibilityOpen(false);
    };

    const toggleScreenReader = () => {
        // Mock functionality for screen reader access
        alert("Screen Reader Access enabled. You can now use your preferred screen reader software.");
        setIsAccessibilityOpen(false);
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "English" ? "Hindi" : "English"));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            resetAccordions();
        }
    };

    const resetAccordions = () => {
        setIsAboutOpen(false);
        setIsPartnersOpen(false);
        setIsMediaOpen(false);
        setIsPhotoGalleryOpen(false);
        setIsJoinOpen(false);
        setIsLegalOpen(false);
        setIsOthersOpen(false);
        setIsEmployeeOpen(false);
        setIsNavigationOpen(false);
        setIsMousOpen(false);
    };

    const toggleAboutAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isAboutOpen;
            resetAccordions();
            setIsAboutOpen(targetState);
        }
    };

    const togglePartnersAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.stopPropagation();
            e.preventDefault();
            setIsPartnersOpen(!isPartnersOpen);
        }
    };

    const toggleMediaAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isMediaOpen;
            resetAccordions();
            setIsMediaOpen(targetState);
        }
    };

    const togglePhotoGalleryAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.stopPropagation();
            e.preventDefault();
            setIsPhotoGalleryOpen(!isPhotoGalleryOpen);
        }
    };

    const toggleJoinAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isJoinOpen;
            resetAccordions();
            setIsJoinOpen(targetState);
        }
    };

    const toggleLegalAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isLegalOpen;
            resetAccordions();
            setIsLegalOpen(targetState);
        }
    };

    const toggleOthersAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isOthersOpen;
            resetAccordions();
            setIsOthersOpen(targetState);
        }
    };

    const toggleEmployeeAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.stopPropagation();
            e.preventDefault();
            setIsEmployeeOpen(!isEmployeeOpen);
        }
    };

    const toggleNavigationAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const targetState = !isNavigationOpen;
            resetAccordions();
            setIsNavigationOpen(targetState);
        }
    };

    const toggleMousAccordion = (e) => {
        if (window.innerWidth <= 992) {
            e.stopPropagation();
            e.preventDefault();
            setIsMousOpen(!isMousOpen);
        }
    };

    return (
        <>
        <header className="gov-header">
            {/* Absolute Top Level: Overlay */}
            {isMenuOpen && <div className="side-overlay active" onClick={toggleMenu}></div>}

            {/* Top Utility Bar */}
            <div className="header-utility-bar">
                <div className="container utility-container">
                    <div className="utility-left">
                        <span className="official-text">AN OFFICIAL WEBSITE OF THE NARCOTICS CONTROL BUREAU</span>
                    </div>
                    <div className="utility-right">
                        <NavLink to="/scam-alert" className="utility-btn scam-alert-btn">
                            <i className="bi bi-exclamation-triangle-fill"></i> ALERT AWARENESS
                        </NavLink>
                        <button className="utility-btn access-btn" onClick={toggleAccessibility}>
                            <i className="bi bi-universal-access"></i> ACCESSIBILITY
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Branding Section */}
            <div className="header-main-branding">
                <div className="container branding-container">
                    <div className="branding-left">
                        <img src="/logo.svg" alt="NCB Logo" className="gov-emblem" />
                        <div className="brand-text-col">
                            <span className="brand-gov-text">GOVERNMENT OF INDIA</span>
                            <h1 className="brand-org-name">Narcotics Control Bureau</h1>
                            <span className="brand-org-hindi">नारकोटिक्स कंट्रोल ब्यूरो</span>
                        </div>
                    </div>
 
                    <div className="branding-right">
                        <div className="top-utility-links">
                            <button className="utility-text-link lang-toggle-text" onClick={toggleLanguage}>
                                <i className="bi bi-translate"></i> {language === "English" ? "हिंदी" : "English"}
                            </button>
                            <div className="v-divider-small"></div>
                            <Link to="/login" className="utility-text-link login-link">
                                <i className="bi bi-person-fill"></i> LOGIN
                            </Link>
                        </div>
                        <div className="search-wrapper-modern">
                            <div className="search-pill">
                                <input type="text" placeholder="Search resources, reports..." className="search-input-field" aria-label="Search website" />
                                <button className="search-submit-btn" aria-label="Submit Search"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            {/* Bottom Navigation Row - Desktop position remains here */}
            <div className={`header-nav-wrapper ${isMenuOpen ? "sidebar-active" : ""}`}>
                <div className="container nav-container-flex">
                    <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                        <div className={`hamburger-icon ${isMenuOpen ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    <div className="mobile-action-buttons">
                        <NavLink to="/scam-alert" className="m-action-btn m-alert-btn">
                            <i className="bi bi-exclamation-triangle-fill"></i> ALERT AWARENESS
                        </NavLink>
                        <a href="https://ncbmanas.gov.in/" target="_blank" rel="noopener noreferrer" className="m-action-btn m-submit-btn">
                            <i className="bi bi-megaphone-fill"></i> SUBMIT A TIP
                        </a>
                    </div>
 
                    <nav className={`main-nav ${isMenuOpen ? "show-sidebar" : ""}`}>
                        {/* Sidebar Header with Logo and Close Button (Mobile ONLY) */}
                        <div className="sidebar-header">
                            <div className="sidebar-brand">
                                <img src="/logo.svg" alt="NCB Logo" className="sidebar-logo" />
                                <div className="sidebar-brand-text">
                                    <span className="side-org-name">NCB</span>
                                </div>
                            </div>
                            <button className="close-sidebar-btn" onClick={toggleMenu} aria-label="Close Menu">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
 
                        <div className="nav-links">
                            <div>
                                <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsMenuOpen(false)}>
                                    HOME
                                </NavLink>
                            </div>

                            <div className={`nav-dropdown-li ${isAboutOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/about" className={`nav-item ${isAboutActive() ? "active" : ""}`} onClick={toggleAboutAccordion}>
                                    ABOUT <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <div className="dropdown-menu">
                                    <div><NavLink to="/about" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Who We Are</NavLink></div>
                                    <div><NavLink to="/origin-evolution" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Origin & Evolution</NavLink></div>
                                    <div><NavLink to="/motto-mission-vision" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Mission, Vision & Motto</NavLink></div>
                                    <div><NavLink to="/organization" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Hierarchy & Structure</NavLink></div>
                                    <div><NavLink to="/offices" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Our Offices</NavLink></div>
                                    <div className={`nested-dropdown-li ${isPartnersOpen ? "nested-open" : ""}`}>
                                        <button className="dropdown-item d-flex justify-content-between align-items-center w-100 border-0 bg-transparent text-start" onClick={togglePartnersAccordion}>
                                            Our Partners <span className="dropdown-arrow">▾</span>
                                        </button>
                                        <div className="nested-menu">
                                            <div><NavLink to="/related-links" className="dropdown-item small-text" onClick={() => setIsMenuOpen(false)}>Related Links</NavLink></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`nav-dropdown-li ${isMediaOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/media" className={`nav-item ${isMediaActive() ? "active" : ""}`} onClick={toggleMediaAccordion}>
                                    MEDIA, NEWS & EVENTS <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <div className="dropdown-menu">
                                    <div><NavLink to="/media/latest-news" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Latest News & Events</NavLink></div>
                                    <div><NavLink to="/media/important-seizures" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Important Seizures (new)</NavLink></div>
                                    <div className={`nested-dropdown-li ${isPhotoGalleryOpen ? "nested-open" : ""}`}>
                                        <button className="dropdown-item d-flex justify-content-between align-items-center w-100 border-0 bg-transparent text-start" onClick={togglePhotoGalleryAccordion}>
                                            Photo Gallery <span className="dropdown-arrow">▾</span>
                                        </button>
                                        <div className="nested-menu">
                                            <div><NavLink to="/media/photo-gallery" className="dropdown-item small-text" onClick={() => setIsMenuOpen(false)}>Important Visitors</NavLink></div>
                                        </div>
                                    </div>
                                    <div><NavLink to="/media/video-gallery" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Video Gallery</NavLink></div>
                                    <div><NavLink to="/media/press-release" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Press Releases</NavLink></div>
                                    <div><NavLink to="/media/former-head" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Former NCB Heads</NavLink></div>
                                </div>
                            </div>

                            <div className={`nav-dropdown-li ${isJoinOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/career" className="nav-item d-flex justify-content-between align-items-center" onClick={toggleJoinAccordion}>
                                    JOIN NCB <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <div className="dropdown-menu">
                                    <div><NavLink to="/career/vacancies" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Current Vacancies</NavLink></div>
                                    <div><NavLink to="/recruitment-rules" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Recruitment Rules</NavLink></div>
                                </div>
                            </div>

                            <div>
                                <NavLink to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                                    CONTACT US
                                </NavLink>
                            </div>

                            <div className={`nav-dropdown-li ${isLegalOpen ? "accordion-open" : ""}`}>
                                <NavLink to="/legal" className="nav-item d-flex justify-content-between align-items-center" onClick={toggleLegalAccordion}>
                                    LEGAL <span className="dropdown-arrow">▾</span>
                                </NavLink>
                                <div className="dropdown-menu">
                                    <div><NavLink to="/legal/notifications" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Notifications</NavLink></div>
                                    <div><NavLink to="/legal/judgements" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Important Judgements</NavLink></div>
                                    <div><NavLink to="/acts-rules" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Acts & Rules</NavLink></div>
                                    <div><NavLink to="/legal/treaties" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Treaties</NavLink></div>
                                    <div><NavLink to="/publications" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Publications</NavLink></div>
                                    <div><NavLink to="/legal/ndps-cases" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>NDPS Exclusive Court Cases</NavLink></div>
                                </div>
                            </div>

                            <div>
                                <NavLink to="/scam-alert" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                                    ALERT AWARENESS
                                </NavLink>
                            </div>

                            <div className={`nav-dropdown-li ${isOthersOpen ? "accordion-open" : ""}`}>
                                <button className="nav-item border-0 bg-transparent text-uppercase" onClick={toggleOthersAccordion}>
                                    OTHERS <span className="dropdown-arrow">▾</span>
                                </button>
                                <div className="dropdown-menu">
                                    <div><NavLink to="/others/drug-abuse" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Drug Abuse (new)</NavLink></div>
                                    <div className={`nested-dropdown-li ${isEmployeeOpen ? "nested-open" : ""}`}>
                                        <button className="dropdown-item d-flex justify-content-between align-items-center w-100 border-0 bg-transparent text-start" onClick={toggleEmployeeAccordion}>
                                            Employee Corner (APAR) <span className="dropdown-arrow">▾</span>
                                        </button>
                                        <div className="nested-menu">
                                            <div><a href="https://igotkarmayogi.gov.in/" target="_blank" rel="noopener noreferrer" className="dropdown-item small-text">iGOT Karmayogi</a></div>
                                        </div>
                                    </div>
                                    <div><NavLink to="/vigilance" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Vigilance</NavLink></div>
                                    <div><NavLink to="/tenders" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Tenders</NavLink></div>
                                </div>
                            </div>

                            <div className={`nav-dropdown-li ${isNavigationOpen ? "accordion-open" : ""}`}>
                                <button className="nav-item border-0 bg-transparent text-uppercase" onClick={toggleNavigationAccordion}>
                                    NAVIGATION <span className="dropdown-arrow">▾</span>
                                </button>
                                <div className="dropdown-menu">
                                    <div><NavLink to="/e-pledge" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>E-Pledge</NavLink></div>
                                    <div><NavLink to="/others/disposal-drugs" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Disposal of Drugs</NavLink></div>
                                    <div><NavLink to="/rti-vigilance" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>RTI & Vigilance</NavLink></div>
                                    <div><NavLink to="/circulars-orders" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Circulars & Orders</NavLink></div>
                                    <div><NavLink to="/rehab-centres" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Drug Rehabilitation Centres in India</NavLink></div>
                                    <div><NavLink to="/citizen-charter" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Citizen Charter</NavLink></div>
                                    <div><NavLink to="/grievance-redressal" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Grievance Redressal</NavLink></div>
                                    <div><NavLink to="/icc" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Internal Complaint Committee</NavLink></div>
                                    <div className={`nested-dropdown-li ${isMousOpen ? "nested-open" : ""}`}>
                                        <button className="dropdown-item d-flex justify-content-between align-items-center w-100 border-0 bg-transparent text-start" onClick={toggleMousAccordion}>
                                            MoUs <span className="dropdown-arrow">▾</span>
                                        </button>
                                        <div className="nested-menu">
                                            <div><NavLink to="/mou/cbse" className="dropdown-item small-text" onClick={() => setIsMenuOpen(false)}>CBSE</NavLink></div>
                                            <div><NavLink to="/mou/spandan" className="dropdown-item small-text" onClick={() => setIsMenuOpen(false)}>SPANDAN</NavLink></div>
                                            <div><NavLink to="/mou/rru" className="dropdown-item small-text" onClick={() => setIsMenuOpen(false)}>RRU</NavLink></div>
                                            <div><NavLink to="/mou/nfsu" className="dropdown-item small-text" onClick={() => setIsMenuOpen(false)}>NFSU</NavLink></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="nav-action-li">
                                <a href="https://ncbmanas.gov.in/" target="_blank" rel="noopener noreferrer" className="submit-tip-nav-btn external-link-nav">
                                    <i className="bi bi-megaphone-fill"></i>
                                    SUBMIT A TIP
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

        {/* Accessibility Sidebar (Moved outside header to break out of backdrop-filter CSS containing block) */}
        <div className={`accessibility-sidebar ${isAccessibilityOpen ? "active" : ""}`}>
            <div className="access-header">
                <h3>Accessibility Options</h3>
                <button className="close-access-btn" onClick={() => setIsAccessibilityOpen(false)} aria-label="Close Accessibility Panel">
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
            <div className="access-body">
                <div className="access-group">
                    <label>Navigation</label>
                    <button onClick={skipToContent} className="access-btn">
                        <i className="bi bi-arrow-down-square"></i> Skip to Main Content
                    </button>
                    <button onClick={toggleScreenReader} className="access-btn">
                        <i className="bi bi-volume-up"></i> Screen Reader Access
                    </button>
                </div>

                {location.pathname === "/" && (
                    <div className="access-group">
                        <label>Theme Settings</label>
                        <div className="theme-options">
                            <div
                                className={`theme-swatch default ${theme === "default" ? "active" : ""}`}
                                onClick={() => setTheme("default")}
                                aria-label="Switch to NCB Blue Theme"
                            >
                                <div className="swatch-color"></div>
                                <span>Blue (Default)</span>
                            </div>
                            <div
                                className={`theme-swatch secondary ${theme === "secondary" ? "active" : ""}`}
                                onClick={() => setTheme("secondary")}
                                aria-label="Switch to NCB Teal Theme"
                            >
                                <div className="swatch-color"></div>
                                <span>Teal Theme</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="access-footer-note">
                    <p>These settings will be saved for your next visit.</p>
                </div>
            </div>
        </div>
        {isAccessibilityOpen && <div className="side-overlay active" onClick={() => setIsAccessibilityOpen(false)}></div>}
        </>
    );
}

export default Header;