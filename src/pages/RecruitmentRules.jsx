import React, { useState, useMemo } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/EmployeeCorner.scss";

const recruitmentData = [
    { id: 1, title: "For Director General", date: "Official", language: "English" },
    { id: 2, title: "For Additional Director General", date: "Official", language: "English" },
    { id: 3, title: "For Deputy Director General", date: "Official", language: "English" },
    { id: 4, title: "For Additional Director", date: "Official", language: "English" },
    { id: 5, title: "For Deputy/Zonal Directors", date: "Official", language: "English" },
    { id: 6, title: "One time permission for filling up the post of Deputy Director (Law) (Level-12), Senior Public Prosecutor (Level-11) and Public Prosecutor (Level-10)", date: "Official", language: "English" },
    { id: 7, title: "One time permission for filling up the post of Assistant Director (Cyber) (Level-11)", date: "Official", language: "English" },
    { id: 8, title: "For Assistant Director", date: "Official", language: "English" },
    { id: 9, title: "For Senior Private Secretary", date: "Official", language: "English" },
    { id: 10, title: "For Private Secretary", date: "Official", language: "English" },
    { id: 11, title: "For Superintendent", date: "Official", language: "English" },
    { id: 12, title: "One time permission for filling up the post of Superintendent (Cyber) (Level-8)", date: "Official", language: "English" },
    { id: 13, title: "For Office Superintendent", date: "Official", language: "English" },
    { id: 14, title: "One time permission for filling up the post of System Analyst (Hardware And Networking) (Level-10)", date: "Official", language: "English" },
    { id: 15, title: "One time permission for filling up the post of Programmer (IT/Software) (Level-8)", date: "Official", language: "English" },
    { id: 16, title: "For Section Officer", date: "Official", language: "English" },
    { id: 17, title: "For Inspector", date: "Official", language: "English" },
    { id: 18, title: "For Sub Inspector", date: "Official", language: "English" },
    { id: 19, title: "For Assistant", date: "Official", language: "English" },
    { id: 20, title: "For Surveillance Assistants", date: "Official", language: "English" },
    { id: 21, title: "For Stenographer Grade-I", date: "Official", language: "English" },
    { id: 22, title: "For Upper Division Clerk.", date: "Official", language: "English" },
    { id: 23, title: "For Stenographer Grade-II", date: "Official", language: "English" },
    { id: 24, title: "For Lower Division Clerk", date: "Official", language: "English" },
    { id: 25, title: "For Havaldar", date: "Official", language: "English" },
    { id: 26, title: "For Driver (Special Grade)", date: "Official", language: "English" },
    { id: 27, title: "For Driver Grade-(I,II & OG)", date: "Official", language: "English" },
    { id: 28, title: "One Time Relaxation for Staff Car Driver (Grade-I & II)", date: "Official", language: "English" },
    { id: 29, title: "For Sepoy", date: "Official", language: "English" },
    { id: 30, title: "For Multi Tasking Staff.", date: "Official", language: "English" },
    { id: 31, title: "Draft Recruitment Rules for the post of Public Prosecutor, Sr. Public Prosecutor & Dy. Director(Law)-26/06/2025", date: "26 Jun 2025", language: "English" },
    { id: 32, title: "Draft RR for the post of Superintendent (Cyber) and Assistant Director (Cyber)-18/06/2025", date: "18 Jun 2025", language: "English" },
    { id: 33, title: "Draft RR for the post Programmer (IT/Software) and System Analyst (Hardware & Networking)-18/06/2025", date: "18 Jun 2025", language: "English" }
];

function RecruitmentRules() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const itemsPerPage = 8;

    const filteredItems = useMemo(() => {
        return recruitmentData.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const paginate = (pageNumber) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsTransitioning(false);
            window.scrollTo({ top: 300, behavior: "smooth" });
        }, 300);
    };

    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="recruitment-rules-page">
            <PageBanner
                title="Recruitment"
                highlightWord="Rules"
                subtitle="Official guidelines and requirements for various positions in NCB"
                breadcrumbLabel="Recruitment Rules"
            />

            <main className="recruitment-section" role="main" id="main-content">
                <div className="container">
                    {/* Header Controls */}
                    <div className="controls-row-premium row align-items-center justify-content-between mx-0 mb-4 g-3">
                        <div className="col-md-6 text-center text-md-start">
                            <h3 className="h6 fw-bold text-dark m-0 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                                <i className="bi bi-journal-check text-primary"></i>
                                Rules Registry
                                <span className="badge rounded-pill bg-light text-primary border px-3 py-1">
                                    {filteredItems.length} Rules Found
                                </span>
                            </h3>
                        </div>
                        <div className="col-md-6 d-flex mt-0 justify-content-center justify-content-md-end">
                            <div className="premium-search-box">
                                <i className="bi bi-search search-icon"></i>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search recruitment rules..."
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
                        <div className={`row g-4 rules-grid ${isTransitioning ? 'transitioning' : ''}`}>
                            {currentItems.map((item) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                    <div className="rules-card">
                                        <div className="card-top-flex">
                                            <div className="file-type-icon">
                                                <i className="bi bi-file-earmark-pdf-fill"></i>
                                            </div>
                                        </div>
                                        <h4 className="card-title">{item.title}</h4>
                                        <div className="card-meta">
                                            <div className="date-box">
                                                <i className="bi bi-calendar-event"></i> {item.date}
                                            </div>
                                            <div className="file-size-lang">
                                                <span className="lang">{item.language}</span>
                                                <span className="separator">|</span>
                                                <span className="size">1.2 MB</span>
                                            </div>
                                        </div>
                                        <button className="btn-view-link download-btn-override" title={`Download ${item.title} PDF`}>
                                            <span>Download PDF</span>
                                            <i className="bi bi-download ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results text-center py-5">
                            <i className="bi bi-folder-x display-1 text-muted opacity-25"></i>
                            <h4 className="mt-3">No matching rules found</h4>
                            <p className="text-muted">Try adjusting your search terms</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="pagination-container mt-5">
                            <div className="pagination-content">
                                <button
                                    className={`page-control ${currentPage === 1 ? 'disabled' : ''}`}
                                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    aria-label="Previous Page"
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <div className="page-numbers">
                                    {getPageNumbers().map(num => (
                                        <button
                                            key={num}
                                            className={`page-number ${currentPage === num ? 'active' : ''}`}
                                            onClick={() => paginate(num)}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    className={`page-control ${currentPage === totalPages ? 'disabled' : ''}`}
                                    onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    aria-label="Next Page"
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default RecruitmentRules;
