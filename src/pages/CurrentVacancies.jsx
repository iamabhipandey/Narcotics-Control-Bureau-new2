import React, { useState, useMemo } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/EmployeeCorner.scss";

const vacancyData = [
    {
        id: 1,
        title: "Filling up of 05 posts of Deputy Director (General) on Deputation basis in NCB HQ & its Zonal Offices",
        designation: "Deputy Director",
        lastDate: "2026-05-30",
        language: "English",
        status: "Open"
    },
    {
        id: 2,
        title: "Engagement of Junior Intelligence Officers on contract basis for a period of one year",
        designation: "Junior Intelligence Officer",
        lastDate: "2026-04-15",
        language: "Hindi/English",
        status: "Urgent"
    },
    {
        id: 3,
        title: "Vacancy Circular for the post of Assistant Director (Cyber) in NCB Headquarters",
        designation: "Assistant Director",
        lastDate: "2026-06-10",
        language: "English",
        status: "Open"
    },
    {
        id: 4,
        title: "Engagement of 10 Data Entry Operators on outsource basis for NCB Zonal Offices",
        designation: "Data Entry Operator",
        lastDate: "2026-04-20",
        language: "English",
        status: "Active"
    },
    {
        id: 5,
        title: "Filling up one post of Dispatcher in NCB HQ New Delhi on Deputation Basis",
        designation: "Dispatcher",
        lastDate: "2026-05-05",
        language: "English",
        status: "Open"
    },
    {
        id: 6,
        title: "Recruitment for the post of Junior Staff Car Driver (Grade-II) on Direct Entry",
        designation: "Staff Car Driver",
        lastDate: "2026-04-25",
        language: "English",
        status: "Ongoing"
    }
];

function CurrentVacancies() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("latest");
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const itemsPerPage = 6;

    const filteredItems = useMemo(() => {
        let result = vacancyData.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.designation.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Sorting Logic
        if (sortOrder === "latest") {
            result.sort((a, b) => new Date(b.lastDate) - new Date(a.lastDate));
        } else if (sortOrder === "oldest") {
            result.sort((a, b) => new Date(a.lastDate) - new Date(b.lastDate));
        } else if (sortOrder === "az") {
            result.sort((a, b) => a.title.localeCompare(b.title));
        }

        return result;
    }, [searchTerm, sortOrder]);

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
        <div className="vacancies-page">
            <PageBanner
                title="Current"
                highlightWord="Vacancies"
                subtitle="Join our mission for a drug-free India"
                breadcrumbLabel="Current Vacancies"
            />

            <main className="vacancies-section" role="main" id="main-content">
                <div className="container">
                    {/* Header Controls */}
                    <div className="controls-row-premium row align-items-center justify-content-between mx-0 mb-4 g-3">
                        <div className="col-md-5 text-center text-md-start">
                            <h3 className="h6 fw-bold text-dark m-0 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                                <i className="bi bi-briefcase-fill text-primary"></i>
                                Opportunity Portal
                                <span className="badge rounded-pill bg-light text-primary border px-3 py-1">
                                    {filteredItems.length} Openings Found
                                </span>
                            </h3>
                        </div>
                        <div className="col-md-7 d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-end">
                            {/* Sort Controls */}
                            <div className="premium-sort-box">
                                <i className="bi bi-filter-right sort-icon"></i>
                                <select
                                    className="sort-select"
                                    value={sortOrder}
                                    onChange={(e) => {
                                        setSortOrder(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    aria-label="Sort vacancies"
                                >
                                    <option value="latest">Latest Deadlines</option>
                                    <option value="oldest">Soonest Deadlines</option>
                                    <option value="az">A to Z (Title)</option>
                                </select>
                            </div>

                            {/* Search Controls */}
                            <div className="premium-search-box">
                                <i className="bi bi-search search-icon"></i>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search vacancies..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                                {searchTerm && (
                                    <button className="clear-search-btn" onClick={() => setSearchTerm("")}>
                                        <i className="bi bi-x-circle-fill"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {filteredItems.length > 0 ? (
                        <div className={`row g-4 vacancies-grid ${isTransitioning ? 'transitioning' : ''}`}>
                            {currentItems.map((item) => (
                                <div className="col-xl-4 col-md-6" key={item.id}>
                                    <div className="vacancies-card">
                                        <div className="card-status-badge">
                                            <span className={`status-pill ${item.status.toLowerCase()}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <div className="card-top-flex">
                                            <div className="file-type-icon">
                                                <i className="bi bi-briefcase-fill"></i>
                                            </div>
                                        </div>
                                        <h4 className="card-title">{item.title}</h4>
                                        <div className="vacancy-meta-detailed">
                                            <div className="meta-item">
                                                <i className="bi bi-person-badge"></i>
                                                <span><strong>Designation:</strong> {item.designation}</span>
                                            </div>
                                            <div className="meta-item urgency">
                                                <i className="bi bi-calendar-check"></i>
                                                <span><strong>Last Date:</strong> {item.lastDate}</span>
                                            </div>
                                        </div>
                                        <div className="card-meta">
                                            <div className="file-size-lang">
                                                <span className="lang">{item.language}</span>
                                                <span className="separator">|</span>
                                                <span className="size">PDF Version</span>
                                            </div>
                                        </div>
                                        <button className="btn-view-link download-btn-override" title={`Download ${item.title} Details`}>
                                            <span>Full Notification</span>
                                            <i className="bi bi-download ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results text-center py-5">
                            <i className="bi bi-search display-1 text-muted opacity-25"></i>
                            <h4 className="mt-3">No matching vacancies found</h4>
                            <p className="text-muted">Try using different keywords</p>
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
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <div className="page-numbers">
                                    {getPageNumbers().map(num => (
                                        <button
                                            key={num}
                                            className={`page-number ${currentPage === num ? "active" : ""}`}
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

export default CurrentVacancies;
