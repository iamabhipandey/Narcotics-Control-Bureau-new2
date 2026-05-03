import React, { useState, useMemo } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/LatestNews.scss";

const newsData = [
    { id: 1, title: "Clothes soaked in cocaine worth Rs 24 crore seized at Bengaluru airport", detail: "Click Here To Read" },
    { id: 2, title: "NCB chief explores tool at AI Summit to outwit drug traffickers", detail: "Click Here To Read" },
    { id: 3, title: "BSF, NCB seize over 8 kg heroin near Indo-Pak border; 3 nabbed", detail: "Click Here To Read" },
    { id: 4, title: "NCB chief Anurag Garg asks Punjab border villagers to join fight against drug trafficking", detail: "Click Here To Read" },
    { id: 5, title: "NCB secures 12-year jail term for drug trafficker in Ahmedabad", detail: "Click Here To Read" },
    { id: 6, title: "Rs 275 Cr worth illegal opium crop destroyed in Rajasthan", detail: "Click Here To Read" },
    { id: 7, title: "NCB files chargesheet against four in darknet-based drug cartel case", detail: "Click Here To Read" },
    { id: 8, title: "NCB busts international drug trafficking network near India-Myanmar border", detail: "Click Here To Read" },
    { id: 9, title: "NCB advises Indian travellers to seek approval for carrying medicines to Saudi Arabia", detail: "Click Here To Read" },
    { id: 10, title: "NCB seized 1.33 lakh kg of drugs worth about ₹2,000 crore in 2025", detail: "Click Here To Read" },
    { id: 11, title: "NCB Bengaluru arrests 81, seizes 490 kg of narcotics worth Rs 270 crore in 2025", detail: "Click Here To Read" },
    { id: 12, title: "NCB busts cross-border drug racket near Indo-Myanmar border, seizes 7.3 Kg heroin; two held", detail: "Click Here To Read" },
    { id: 13, title: "Modified Truck Carrying 813 Kg Of Ganja Seized In Hyderabad, 3 Arrested", detail: "Click Here To Read" },
    { id: 14, title: "Drugs problem is narco-terrorism, not a mere issue of crime: Shah", detail: "Click Here To Read" },
    { id: 15, title: "NCB busts drug network at Myanmar border, seizes heroin worth Rs 15 crore", detail: "Click Here To Read" },
    { id: 16, title: "NCB secures 7-year jail for three who diverted chemicals for drug-making", detail: "Click Here To Read" },
    { id: 17, title: "NCB’s Chandigarh unit seizes drug money of Rs 52 lakh", detail: "Click Here To Read" },
    { id: 18, title: "2 acquitted in 2018 drugs seizure case", detail: "Click Here To Read" },
    { id: 19, title: "NCB Srinagar Intercepts 0.635 kg of Charas, Arrests Repeat Offender in Anantnag", detail: "Click Here To Read" },
    { id: 20, title: "Punjab: Big fish Chatha in NCB net", detail: "Click Here To Read" },
    { id: 21, title: "NCB busts psychotropic drug export racket in Hyderabad", detail: "Click Here To Read" },
    { id: 22, title: "Pharma company, its employees convicted for ‘illegal diversion’ of meth precursor abroad", detail: "Click Here To Read" },
    { id: 23, title: "NCB sizes ganja worth Rs 85 Lakh at Charbagh Railway Station", detail: "Click Here To Read" },
    { id: 24, title: "NCB Freezes ₹41.64 Lakh Worth Assets Of Navi Mumbai Drug Trafficker Navin Chichkar", detail: "Click Here To Read" },
    { id: 25, title: "NCB destroys 2106kg ganja items", detail: "Click Here To Read" }
];

function LatestNews() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const itemsPerPage = 12;

    const filteredItems = useMemo(() => {
        return newsData.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);



    // Logic for pagination
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setIsTransitioning(true);

        // GIGW 3.0: Providing visual feedback and enough time for transition
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsTransitioning(false);
            window.scrollTo({ top: 300, behavior: "smooth" });
        }, 300); // Reduced to 300ms for a snappier feel
    };

    const getPageNumbers = () => {
        const span = 3;
        let start = currentPage - Math.floor(span / 2);
        start = Math.max(start, 1);
        let end = start + span - 1;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - span + 1);
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="latest-news-page">
            <PageBanner
                title="Latest"
                highlightWord="News"
                subtitle="Daily updates and official news from Narcotics Control Bureau"
                breadcrumbLabel="Latest News"
            />

            <main className="news-section" role="main" id="main-content">
                <div className="container">
                    <h2 className="visually-hidden">Latest News and Search</h2>
                    {/* Standardized Controls Row */}
                    <div className="controls-row-premium row align-items-center justify-content-between mx-0 mb-4 g-3">
                        <div className="col-md-6 text-center text-md-start">
                            <h3 className="h6 fw-bold text-dark m-0 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                                <i className="bi bi-collection-play text-primary"></i>
                                Latest News
                                <span className="badge rounded-pill bg-light text-primary border px-3 py-1">
                                    {filteredItems.length} Items Found
                                </span>
                            </h3>
                        </div>
                        <div className="col-md-6 d-flex  mt-0 justify-content-center justify-content-md-end">
                            <div className="premium-search-box">
                                <i className="bi bi-search search-icon"></i>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search news..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                                {searchTerm && (
                                    <button
                                        className="clear-search-btn"
                                        onClick={() => setSearchTerm("")}
                                        title="Clear search"
                                        aria-label="Clear search"
                                    >
                                        <i className="bi bi-x-circle-fill"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {filteredItems.length > 0 ? (
                        <div className={`row g-2 news-grid-items ${isTransitioning ? 'transitioning' : ''}`}>
                            {currentItems.map((item) => (
                                <article className="col-xl-3 col-lg-4 col-md-6" key={item.id} aria-labelledby={`news-title-${item.id}`}>
                                    <div className="news-card-v2">
                                        <div className="card-icon-wrapper" aria-hidden="true">
                                            <i className="bi bi-link-45deg"></i>
                                        </div>
                                        <h4 className="card-title" id={`news-title-${item.id}`}>{item.title}</h4>
                                        <a
                                            href={item.link || "#"}
                                            className="btn-view-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${item.detail || "View Link"} for: ${item.title}. Opens in a new tab.`}
                                        >
                                            {item.detail || "View Link"}
                                            <i className="bi bi-box-arrow-up-right ms-2 small" aria-hidden="true"></i>
                                            <span className="visually-hidden">(Opens in a new tab)</span>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="row justify-content-center py-5 my-5">
                            <div className="col-lg-7 text-center">
                                <div className="no-results-content bg-white p-5 rounded-4 shadow-sm border border-dashed mx-auto">
                                    <i className="bi bi-search display-1 mb-3 d-block text-muted opacity-25"></i>
                                    <h4 className="fw-bold text-dark mb-2">No News Found</h4>
                                    <p className="text-muted mb-4 text-break px-md-5">
                                        We couldn't find any news matching <strong>"{searchTerm}"</strong>.
                                        Please try different keywords.
                                    </p>
                                    <button className="btn btn-primary rounded-pill px-5 fw-bold shadow-sm" onClick={() => setSearchTerm("")}>
                                        Show All News
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pagination UI */}
                    {totalPages > 1 && (
                        <nav className="pagination-container" aria-label="News pagination">
                            <div className="pagination-content">
                                <button
                                    className={`page-control ${currentPage === 1 ? 'disabled' : ''}`}
                                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    aria-label="Go to previous page"
                                >
                                    <i className="bi bi-chevron-left" aria-hidden="true"></i>
                                </button>

                                <div className="page-numbers">
                                    {getPageNumbers().map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => num !== currentPage && paginate(num)}
                                            className={`page-number ${currentPage === num ? 'active' : ''}`}
                                            aria-label={`Go to page ${num}`}
                                            aria-current={currentPage === num ? "page" : undefined}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    className={`page-control ${currentPage === totalPages ? 'disabled' : ''}`}
                                    onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    aria-label="Go to next page"
                                >
                                    <i className="bi bi-chevron-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </nav>
                    )}
                </div>
            </main>
        </div>
    );
}

export default LatestNews;
