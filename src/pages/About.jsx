import React, { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/About.scss";
import ncbHero from "../assets/ncb_hero_banner.png";

function About() {
    const zonalOffices = [
        "Agartala", "Ahmedabad", "Amritsar", "Bangalore", "Bhopal",
        "Bhubaneswar", "Chandigarh", "Chennai", "Cochin", "Dehradun",
        "Delhi", "Goa", "Gorakhpur", "Guwahati", "Hyderabad",
        "Imphal", "Indore", "Itanagar", "Jaipur", "Jammu",
        "Jodhpur", "Kolkata", "Lucknow", "Mumbai", "Patna",
        "Raipur", "Ranchi", "Siliguri", "Srinagar", "Vishakhapatnam"
    ];

    useEffect(() => {
        document.title = "About | Narcotics Control Bureau, Government of India";
    }, []);

    return (
        <div className="about-page-light">
            <PageBanner
                title="About"
                highlightWord="NCB"
                subtitle="The Apex Coordinating Agency for Drug Law Enforcement in India"
                breadcrumbLabel="About NCB"
            />

            <div className="light-content-wrapper">
                <div className="container">

                    {/* SECTION 1: Constitutional & International Mandate (Balanced Layout) */}
                    <div className="about-hero-section balanced reveal-up">
                        <div className="hero-text-content">
                            <h2 className="section-title-premium">Constitutional & International Mandate</h2>
                            <p className="description-paragraph">
                                The National Policy on Narcotic Drugs and Psychotropic Substances is based on the Directive Principles, contained in Article 47 of the Indian Constitution, which direct the State to endeavour to bring about prohibition of the consumption, except for medicinal purposes, of intoxicating drugs injurious to health. The government’s policy on the subject which flows from this constitutional provision is also guided by the international conventions on the subject.
                            </p>
                            <p className="description-paragraph mt-4">
                                India is a signatory to the single Convention on Narcotic Drugs 1961, as amended by the 1972 Protocol, the Conventions on Psychotropic Substances, 1971 and the United Nations Convention against Illicit Traffic in Narcotic Drugs and Psychotropic Substances, 1988.
                            </p>
                        </div>
                        <div className="hero-image-box compact">
                            <img src={ncbHero} alt="NCB Professional Representation" className="hero-banner-img" />
                            <div className="image-overlay-accent"></div>
                        </div>
                    </div>

                    {/* SECTION 2: Legislative Policy & Operational Framework */}
                    <div className="full-width-section reveal-up">
                        <div className="content-glass-card-light">
                            <h2 className="section-title-premium">Legislative Policy & Framework</h2>
                            <p className="description-text-main">
                                The broad legislative policy is contained in the three Central Acts, viz. <strong>Drugs and Cosmetics Act, 1940</strong>, <strong>The Narcotic Drugs and Psychotropic Substances Act, 1985</strong>, and <strong>The Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act, 1988</strong>. The responsibility of drug abuse control, which is a central function, is carried out through a number of Ministries, Departments and Organisations. These include the Ministry of Finance, Department of Revenue which has the nodal co-ordination role as administrator of the Narcotic Drugs and Psychotropic Substances Act, 1985 and the Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act, 1988.
                            </p>
                        </div>
                    </div>

                    {/* SECTION 3: Institutional History & Establishment */}
                    <div className="info-modern-grid reveal-up">
                        <div className="grid-card-large establishment">
                            <div className="card-header-icon"><i className="bi bi-calendar-check-fill"></i></div>
                            <div className="card-body-content">
                                <h3>Institutional History</h3>
                                <p>
                                    The Narcotic Drugs and Psychotropic Substances Act, 1985 which came into effect from the 14th November, 1985 made an express provision for constituting a Central Authority for the purpose of exercising the powers and functions of the Central Government under the Act.
                                </p>
                                <div className="establishment-highlight">
                                    In presence of this provision, the Government of India constituted the <strong>NARCOTICS CONTROL BUREAU</strong> on the <strong>17th of March, 1986</strong>.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 4: Core Functions & Measures */}
                    <div className="functions-section reveal-up">
                        <h2 className="section-title-premium text-center">Powers & Functions</h2>
                        <p className="section-intro-text text-center">
                            The Bureau, subject to the supervision and control of the Central Government, exercises the powers and functions of the Central Government for taking measures with respect to:
                        </p>
                        <div className="detailed-functions-grid">
                            <div className="function-item">
                                <div className="f-icon"><i className="bi bi-diagram-3"></i></div>
                                <div className="f-text">
                                    <strong>Inter-Agency Co-ordination:</strong> Co-ordination of actions by various offices, State Governments and other authorities under the N.D.P.S. Act, Customs Act, Drugs and Cosmetics Act and any other law for the time being in force in connection with the enforcement provisions of the NDPS Act, 1985.
                                </div>
                            </div>
                            <div className="function-item">
                                <div className="f-icon"><i className="bi bi-globe-americas"></i></div>
                                <div className="f-text">
                                    <strong>International Obligations:</strong> Implementation of the obligation in respect of counter measures against illicit traffic under the various international conventions and protocols that are in force at present or which may be ratified or acceded to by India in future.
                                </div>
                            </div>
                            <div className="function-item">
                                <div className="f-icon"><i className="bi bi-hand-thumbs-up"></i></div>
                                <div className="f-text">
                                    <strong>Foreign Assistance:</strong> Assistance to concerned authorities in foreign countries and concerned international organisations to facilitate coordination and universal action for prevention and suppression of illicit traffic in these drugs and substances.
                                </div>
                            </div>
                            <div className="function-item">
                                <div className="f-icon"><i className="bi bi-building"></i></div>
                                <div className="f-text">
                                    <strong>Departmental Coordination:</strong> Coordination of actions taken by the other concerned Ministries, Departments and Organizations in respect of matters relating to drug abuse.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 5: Zonal Presence & Intelligence */}
                    <div className="zonal-presence-modern reveal-up">
                        <div className="zonal-info-card">
                            <h2 className="section-title-premium">Zonal Network & Excellence</h2>
                            <p className="description-text">
                                The Narcotics Control Bureau is the apex coordinating agency. It also functions as an enforcement agency through its zonal offices. The zonal offices collect and analyse data related to seizures of narcotic drugs and psychotropic substance, study trends, modus operandi, collect and disseminate intelligence and work in close cooperation with the Customs, State Police and other law enforcement agencies.
                            </p>
                            <div className="zonal-locations-grid">
                                {zonalOffices.map((city, index) => (
                                    <div key={index} className="zonal-pill-modern">
                                        <i className="bi bi-geo-alt-fill"></i> {city}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SECTION 6: Location & Contact Details */}
                    <div className="contact-hq-section reveal-up">
                        <div className="hq-map-card">
                            <h3 className="hq-title">Location of NCB Head Quarter</h3>
                            <div className="map-embed-box">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.14838612!2d77.185675!3d28.565257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df637777777%3A0x7777777777777777!2sNarcotics%20Control%20Bureau!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="NCB HQ Map"
                                ></iframe>
                            </div>
                        </div>

                        <div className="hq-details-grid">
                            <div className="contact-modern-box report-box">
                                <h3 className="text-white">Contact NCB</h3>
                                <p className="label">Report Incidents of Drug Trafficking / Accident or Serious Incidents</p>
                                <div className="detail-row">
                                    <i className="bi bi-telephone-fill"></i>
                                    <span><strong>Telephone No. :</strong> +91-11-26761000</span>
                                </div>
                                <div className="detail-row">
                                    <i className="bi bi-envelope-at-fill"></i>
                                    <span><strong>Email Id. :</strong> ddge-ncb@nic.in &amp; adenf-ncb@nic.in</span>
                                </div>
                            </div>

                            <div className="contact-modern-box enquiry-box-light">
                                <h3>General Enquiry</h3>
                                <p className="hq-address-full">
                                    <strong>NARCOTICS CONTROL BUREAU</strong><br />
                                    West Block No. 1, Wing No. 5, RK Puram, New Delhi-110066
                                </p>
                                <div className="detail-row">
                                    <i className="bi bi-envelope-fill"></i>
                                    <span><strong>Email Address :</strong> adops-ncb@nic.in</span>
                                </div>
                                <div className="detail-row">
                                    <i className="bi bi-telephone"></i>
                                    <span><strong>Telephone No. :</strong> +91-11-26761000, +91-11-26761144</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;