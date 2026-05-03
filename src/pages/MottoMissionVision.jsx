import React, { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/MottoMissionVision.scss";

function MottoMissionVision() {
    useEffect(() => {
        document.title = "Motto, Mission & Vision | Narcotics Control Bureau";
    }, []);

    return (
        <div className="ncb-mmv-light">
            <PageBanner
                title="Motto, Mission &"
                highlightWord="Vision"
                subtitle="The bedrock of our dedication towards a safer, drug-free nation."
                breadcrumbLabel="Motto, Mission & Vision"
            />

            <div className="mmv-content-wrapper">
                <div className="container">
                    
                    {/* SECTION 1: Strategic Header */}
                    <div className="section-intro-box text-center reveal-up">
                        <h2 className="section-title-premium">Our Core Philosophy</h2>
                        <p className="subtitle-text">
                            Guiding principles that represent the Narcotics Control Bureau's unwavering commitment to protecting our citizens and securing our future.
                        </p>
                    </div>

                    {/* SECTION 2: The Three Pillars (Restored Original Images) */}
                    <div className="mmv-pillars-grid reveal-up">
                        {/* Motto */}
                        <div className="pillar-card motto-pillar">
                            <div className="pillar-image-container">
                                <img src="/our_motto.png" alt="Our Motto: Intelligence, Enforcement, Coordination" className="pillar-main-img" />
                                <div className="icon-overlay">
                                    <i className="bi bi-shield-shaded"></i>
                                </div>
                            </div>
                            <h3>Our Motto</h3>
                            <p className="content-text">Intelligence<br />Enforcement<br />Coordination</p>
                        </div>

                        {/* Mission (Featured) */}
                        <div className="pillar-card mission-pillar featured">
                            <div className="pillar-image-container">
                                <img src="/our_mission.png" alt="Our Mission: Prevent and combat drug abuse" className="pillar-main-img" />
                                <div className="icon-overlay">
                                    <i className="bi bi-lightning-charge-fill"></i>
                                </div>
                            </div>
                            <h3>Our Mission</h3>
                            <p className="content-text">Prevent and combat abuse and illicit traffic of drugs</p>
                        </div>

                        {/* Vision */}
                        <div className="pillar-card vision-pillar">
                            <div className="pillar-image-container">
                                <img src="/our_vision.png" alt="Our Vision: Drug free society" className="pillar-main-img" />
                                <div className="icon-overlay">
                                    <i className="bi bi-eye-fill"></i>
                                </div>
                            </div>
                            <h3>Our Vision</h3>
                            <p className="content-text">Endeavour for a drug free society</p>
                        </div>
                    </div>

                    {/* SECTION 3: Strategic Operational Pillars */}
                    <div className="strategic-focus-section reveal-up">
                        <h2 className="focus-heading">Operational Strategic Pillars</h2>
                        <div className="focus-grid">
                            <div className="focus-card">
                                <i className="bi bi-diagram-3-fill f-icon"></i>
                                <span className="f-label">Intelligence Outreach</span>
                            </div>
                            <div className="focus-card">
                                <i className="bi bi-shield-fill-check f-icon"></i>
                                <span className="f-label">Enforcement Excellence</span>
                            </div>
                            <div className="focus-card">
                                <i className="bi bi-people-fill f-icon"></i>
                                <span className="f-label">Inter-Agency Unity</span>
                            </div>
                            <div className="focus-card">
                                <i className="bi bi-heart-pulse-fill f-icon"></i>
                                <span className="f-label">Preventive Action</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MottoMissionVision;
