import { NavLink } from "react-router-dom";
import "../styles/Footer.scss";

function Footer() {
    const handleExternalLink = (e, url) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="footer" id="main-footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Section */}
                        <div className="footer-brand-section">
                            <div className="footer-logo-area">
                                <img src="/logo.svg" alt="NCB Logo" className="footer-logo-main" />
                                <div className="footer-org-text">
                                    <h2 className="footer-org-name">NARCOTICS CONTROL BUREAU</h2>
                                    <p className="footer-motto">COMMITMENT TO A DRUG FREE INDIA</p>
                                </div>
                            </div>

                            <p className="footer-desc">
                                The premier agency for drug law enforcement, coordination, and cooperation in the fight against drug trafficking and abuse in India.
                            </p>

                            <div className="footer-helpline-cards">
                                <a href="tel:1933" className="helpline-card national">
                                    <div className="h-icon"><i className="bi bi-shield-check"></i></div>
                                    <div className="h-text">
                                        <span className="h-label">National Helpline</span>
                                        <span className="h-num">1933</span>
                                    </div>
                                </a>
                                <a href="tel:14446" className="helpline-card drug">
                                    <div className="h-icon"><i className="bi bi-telephone-plus"></i></div>
                                    <div className="h-text">
                                        <span className="h-label">Drug Helpline</span>
                                        <span className="h-num">14446</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Links Sections */}
                        <div className="footer-links-grid">
                            <div className="footer-col">
                                <h4 className="footer-col-title">ABOUT NCB</h4>
                                <ul className="footer-links">
                                    <li><NavLink to="/about">Profile</NavLink></li>
                                    <li><NavLink to="/motto-mission-vision">Mission & Vision</NavLink></li>
                                    <li><NavLink to="/organization">Organization Structure</NavLink></li>
                                    <li><NavLink to="/ncb-history">NCB History</NavLink></li>
                                    <li><NavLink to="/legislations">Legislations</NavLink></li>
                                </ul>
                            </div>

                            <div className="footer-col">
                                <h4 className="footer-col-title">OPERATIONS</h4>
                                <ul className="footer-links">
                                    <li><NavLink to="/policy-strategy">Policy Strategy</NavLink></li>
                                    <li><NavLink to="/drugs-of-abuse">Drugs of Abuse</NavLink></li>
                                    <li><NavLink to="/seizures">Important Seizures</NavLink></li>
                                    <li><NavLink to="/training">Training</NavLink></li>
                                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                                </ul>
                            </div>

                            <div className="footer-col">
                                <h4 className="footer-col-title">RESOURCES</h4>
                                <ul className="footer-links">
                                    <li><NavLink to="/rti" className="badge-new">RTI</NavLink></li>
                                    <li><NavLink to="/tenders" className="badge-new">Tenders</NavLink></li>
                                    <li><NavLink to="/legislations">Policies</NavLink></li>
                                    <li><NavLink to="/feedback">Feedback</NavLink></li>
                                    <li><NavLink to="/treaties">Treaties</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact & Social Section */}
                        <div className="footer-contact-section">
                            <h4 className="footer-col-title">CONTACT US</h4>
                            <div className="contact-details">
                                <div className="c-item">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <span>West Block No. 1, Wing No. 5, R.K. Puram, New Delhi - 110066</span>
                                </div>
                                <div className="c-item">
                                    <i className="bi bi-envelope-at-fill"></i>
                                    <a href="mailto:info@ncb.gov.in">info@ncb.gov.in</a>
                                </div>
                                <div className="c-item">
                                    <i className="bi bi-telephone-forward-fill"></i>
                                    <a href="tel:011-26761000">011-2676 1000</a>
                                </div>
                            </div>

                            <div className="footer-social-links">
                                <a href="https://instagram.com/india.ncb" onClick={(e) => handleExternalLink(e, "https://instagram.com/india.ncb")} className="social-link instagram"><i className="bi bi-instagram"></i></a>
                                <a href="https://facebook.com/narcoticscontrolbureauindia" onClick={(e) => handleExternalLink(e, "https://facebook.com/narcoticscontrolbureauindia")} className="social-link facebook"><i className="bi bi-facebook"></i></a>
                                <a href="https://youtube.com/channel/UCb3-9pF4m0BbLpW-yfR1Ipg" onClick={(e) => handleExternalLink(e, "https://youtube.com/channel/UCb3-9pF4m0BbLpW-yfR1Ipg")} className="social-link youtube"><i className="bi bi-youtube"></i></a>
                                <a href="https://x.com/narcoticsbureau" onClick={(e) => handleExternalLink(e, "https://x.com/narcoticsbureau")} className="social-link x-twitter"><i className="bi bi-twitter-x"></i></a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-middle-bar">
                <div className="container">
                    <ul className="footer-policy-links">
                        <li><NavLink to="/accessibility-statement">Accessibility Statement</NavLink></li>
                        <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                        <li><NavLink to="/hyperlink-policy">Hyperlink Policy</NavLink></li>
                        <li><NavLink to="/copyright-policy">Copyright Policy</NavLink></li>
                        <li><NavLink to="/disclaimer">Disclaimer</NavLink></li>
                        <li><NavLink to="/terms-conditions">Terms & Conditions</NavLink></li>
                        <li><NavLink to="/web-info-manager">Web Information Manager</NavLink></li>
                        <li><NavLink to="/monitoring-plan">Website Monitoring Plan</NavLink></li>
                        <li><NavLink to="/security-policy">Security Policy</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-flex">
                        <div className="copyright-info">
                            <p>© 2026 Designed & Maintained by <strong>Narcotics Control Bureau</strong></p>
                            <p>Ministry of Home Affairs, Govt. of India</p>
                        </div>

                        <div className="footer-stats">
                            <div className="stat-box">
                                <span className="stat-label">Total Visitors</span>
                                <span className="stat-value">1,24,65,879</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-label">Last Updated</span>
                                <span className="stat-value">31 March, 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;