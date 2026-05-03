import React, { useState, useMemo } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/EmployeeCorner.scss";

const employeeData = [
    { id: 1, title: "For Zonal Director, Deputy Directors", date: "Official", category: "Personnel", language: "English" },
    { id: 2, title: "For Assistant Directors", date: "Official", category: "Personnel", language: "English" },
    { id: 3, title: "For Superintendents", date: "Official", category: "Personnel", language: "English" },
    { id: 4, title: "For Section Officers", date: "Official", category: "Personnel", language: "English" },
    { id: 5, title: "For Senior P.S.", date: "Official", category: "Personnel", language: "English" },
    { id: 6, title: "For P.S.", date: "Official", category: "Personnel", language: "English" },
    { id: 7, title: "For Inspectors", date: "Official", category: "Personnel", language: "English" },
    { id: 8, title: "For Sub Inspectors", date: "Official", category: "Personnel", language: "English" },
    { id: 9, title: "For Steno Gr-I", date: "Official", category: "Personnel", language: "English" },
    { id: 10, title: "For Steno Gr-II", date: "Official", category: "Personnel", language: "English" },
    { id: 11, title: "For Surveillance Assistants", date: "Official", category: "Personnel", language: "English" },
    { id: 12, title: "For Assistants", date: "Official", category: "Personnel", language: "English" },
    { id: 13, title: "For UDCs", date: "Official", category: "Personnel", language: "English" },
    { id: 14, title: "For LDCs", date: "Official", category: "Personnel", language: "English" },
    { id: 15, title: "For OTCs", date: "Official", category: "Personnel", language: "English" },
    { id: 16, title: "For Data Entry Operators", date: "Official", category: "Personnel", language: "English" },
    { id: 17, title: "For Drivers", date: "Official", category: "Personnel", language: "English" },
    { id: 18, title: "For Havaldars", date: "Official", category: "Personnel", language: "English" },
    { id: 19, title: "For Sepoys", date: "Official", category: "Personnel", language: "English" },
    { id: 20, title: "Office Memorandum dated 01/04/2018", date: "01 Apr 2018", category: "Memorandum", language: "English" },
    { id: 21, title: "Draft Recruitment Rules for the post of Junior Intelligence Officers dated 22/08/2019", date: "22 Aug 2019", category: "Draft Rules", language: "English" },
    { id: 22, title: "Rotational Transfer Policy(RTP) of Narcotics Control Bureau dated 11/03/2021", date: "11 Mar 2021", category: "Policy", language: "English" },
    { id: 23, title: "Up-gradation of the post of Director General (DG), Narcotics Control Bureau(NCB) from the existing pay level-15 to the pay level-16/17", date: "Administrative", category: "Personnel", language: "English" }
];

function EmployeeCorner() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const itemsPerPage = 8;

    const filteredItems = useMemo(() => {
        return employeeData.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div className="employee-corner-page">
            <PageBanner
                title="Employee"
                highlightWord="Corner"
                subtitle="Exclusive portal for NCB staff resources, circulars, and official forms"
                breadcrumbLabel="Employee Corner"
            />

            <main className="employee-section" role="main" id="main-content">
                <div className="container">
                    {/* Header Controls */}
                    <div className="controls-row-premium row align-items-center justify-content-between mx-0 mb-4 g-3">
                        <div className="col-md-6 text-center text-md-start">
                            <h3 className="h6 fw-bold text-dark m-0 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                                <i className="bi bi-folder-fill text-primary"></i>
                                Resource Directory
                                <span className="badge rounded-pill bg-light text-primary border px-3 py-1">
                                    {filteredItems.length} Files Found
                                </span>
                            </h3>
                        </div>
                        <div className="col-md-6 d-flex  mt-0 justify-content-center justify-content-md-end">
                            <div className="premium-search-box">
                                <i className="bi bi-search search-icon"></i>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search by title or category..."
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
                        <div className={`row g-4 employee-grid ${isTransitioning ? 'transitioning' : ''}`}>
                            {currentItems.map((item) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                    <div className="employee-card">
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
                            <h4 className="mt-3">No matching documents found</h4>
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

export default EmployeeCorner;
