import React, { useState, useMemo, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/PhotoGallery.scss";

const PhotoGallery = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const itemsPerPage = 12;

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    const photos = useMemo(() => [
        { id: 1, url: "https://narcoticsindia.nic.in/gallery/random_gallery/1.jpg", title: "NCB Officials Group Photo" },
        { id: 2, url: "https://narcoticsindia.nic.in/gallery/random_gallery/2.jpg", title: "Official NCB Seminar" },
        { id: 3, url: "https://narcoticsindia.nic.in/gallery/random_gallery/3.jpg", title: "NCB Premises Group Photo" },
        { id: 4, url: "https://narcoticsindia.nic.in/gallery/random_gallery/4.jpg", title: "NCB Event Presentation" },
        { id: 5, url: "https://narcoticsindia.nic.in/gallery/random_gallery/5.jpg", title: "MOU Signing Ceremony" },
        { id: 6, url: "https://narcoticsindia.nic.in/gallery/random_gallery/6.jpg", title: "Official NCB Meeting" },
        { id: 7, url: "https://narcoticsindia.nic.in/gallery/random_gallery/7.jpg", title: "Group Photo at NCB Office" },
        { id: 8, url: "https://narcoticsindia.nic.in/gallery/random_gallery/8.jpg", title: "NCB Conference Session" },
        { id: 9, url: "https://narcoticsindia.nic.in/gallery/random_gallery/9.jpg", title: "Officer Addressing the Team" },
        { id: 10, url: "https://narcoticsindia.nic.in/gallery/random_gallery/13.jpg", title: "NCB Outdoor Group Event" },
        { id: 11, url: "https://narcoticsindia.nic.in/gallery/random_gallery/14.jpg", title: "Official NCB Ceremony" },
        { id: 12, url: "https://narcoticsindia.nic.in/gallery/random_gallery/15.jpg", title: "Award and MOU Exchange" },
        { id: 13, url: "https://narcoticsindia.nic.in/gallery/random_gallery/16.jpg", title: "NCB Workshop Session" },
        { id: 14, url: "https://narcoticsindia.nic.in/gallery/random_gallery/17.jpg", title: "Official Delegation Group Photo" },
        { id: 15, url: "https://narcoticsindia.nic.in/gallery/random_gallery/18.jpg", title: "Seminar Discussion" },
        { id: 16, url: "https://narcoticsindia.nic.in/assets/images/1mou-ncb-capt-bprd.jpeg", title: "MOU between NCB and BPRD" },
        { id: 17, url: "https://narcoticsindia.nic.in/assets/images/2mou-ncb-bprdcapt.jpeg", title: "MOU Signing Highlight" }
    ], []);

    const filteredPhotos = useMemo(() => {
        return photos.filter(p =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [photos, searchTerm]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPhotos = filteredPhotos.slice(indexOfFirstItem, indexOfLastItem);



    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 300, behavior: "smooth" });
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
        <div className="photo-gallery-page">
            <PageBanner
                title="Media"
                highlightWord="Gallery"
                subtitle="Captured moments of our mission and outreach"
                breadcrumbLabel="Photo Gallery"
            />

            <section className="gallery-section pt-5">
                <div className="container">
                    {/* Standardized Controls Row */}
                    <div className="controls-row-premium row align-items-center justify-content-between mx-0 mb-4 g-3">
                        <div className="col-md-6 text-center text-md-start">
                            <h3 className="h6 fw-bold text-dark m-0 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                                <i className="bi bi-images text-primary"></i>
                                Photo Gallery Archive
                                <span className="badge rounded-pill bg-light text-primary border px-3 py-1">
                                    {filteredPhotos.length} Items Found
                                </span>
                            </h3>
                        </div>
                        <div className="col-md-6 d-flex  mt-0 justify-content-center justify-content-md-end">
                            <div className="premium-search-box">
                                <i className="bi bi-search search-icon"></i>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search photos..."
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

                    {/* Grid Layout or Empty State */}
                    {currentPhotos.length > 0 ? (
                        <div className="row g-4 gallery-grid">
                            {currentPhotos.map((photo) => (
                                <div className="col-sm-6 col-lg-4 col-xl-3" key={photo.id}>
                                    <div
                                        className="photo-card-premium"
                                        onClick={() => setSelectedImage(photo)}
                                    >
                                        <div className="photo-thumb-area">
                                            <img src={photo.url} alt={photo.title} loading="lazy" />
                                            <div className="photo-overlay">
                                                <div className="zoom-icon">
                                                    <i className="bi bi-zoom-in"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="photo-body">
                                            <h3 className="photo-caption text-center">
                                                {photo.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="row justify-content-center py-5 my-5">
                            <div className="col-lg-7 text-center">
                                <div className="no-results-content bg-white p-5 rounded-4 shadow-sm border border-dashed mx-auto">
                                    <i className="bi bi-search display-1 mb-3 d-block text-muted opacity-25"></i>
                                    <h4 className="fw-bold text-dark mb-2">No Photos Found</h4>
                                    <p className="text-muted mb-4 text-break px-md-5">
                                        We couldn't find any photos matching <strong>"{searchTerm}"</strong>.
                                        Please try different keywords or browse our full library.
                                    </p>
                                    <button className="btn btn-primary rounded-pill px-5 fw-bold shadow-sm" onClick={() => setSearchTerm("")}>
                                        Show All Photos
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Theme-Consistent Pagination */}
                    {totalPages > 1 && (
                        <div className="pagination-container">
                            <div className="pagination-content">
                                <button
                                    className={`page-control ${currentPage === 1 ? 'disabled' : ''}`}
                                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    aria-label="Previous Page"
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>

                                <div className="page-numbers">
                                    {getPageNumbers().map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => num !== currentPage && handlePageChange(num)}
                                            className={`page-number ${currentPage === num ? "active" : ""}`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    className={`page-control ${currentPage === totalPages ? 'disabled' : ''}`}
                                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    aria-label="Next Page"
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.9)", zIndex: 9999 }} onClick={() => setSelectedImage(null)}>
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-body text-center position-relative">
                                <button className="close-modal" onClick={() => setSelectedImage(null)} aria-label="Close Modal">
                                    <i className="bi bi-x-lg"></i>
                                </button>
                                <img
                                    src={selectedImage.url}
                                    className="img-fluid"
                                    alt={selectedImage.title}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <div className="mt-3 text-white">
                                    <h4 className="fw-bold">{selectedImage.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
