import React, { useState } from "react";
import PageBanner from "../components/PageBanner";
import "../styles/Directory.scss";

const formerHeadsData = [
    {
        "id": 1,
        "name": "Shri B.V.Kumar",
        "designation": "IC & CS",
        "tenure": "08.05.1986 - 09.11.1988",
        "image": "https://narcoticsindia.nic.in/FormerHead/1.jpeg"
    },
    {
        "id": 2,
        "name": "Shri M.M.Bhatnagar",
        "designation": "IC & CS",
        "tenure": "10.11.1988 - 15.07.1990",
        "image": "https://narcoticsindia.nic.in/FormerHead/2.jpeg"
    },
    {
        "id": 3,
        "name": "Shri C.Chakraborty",
        "designation": "IPS",
        "tenure": "16.07.1990 - 31.12.1992",
        "image": "https://narcoticsindia.nic.in/FormerHead/3.jpeg"
    },
    {
        "id": 4,
        "name": "Shri H.P.Kumar",
        "designation": "IPS (DDG IN-CHARGE)",
        "tenure": "01.01.1993 - 16.09.1993",
        "image": "https://narcoticsindia.nic.in/FormerHead/4_6.jpeg"
    },
    {
        "id": 5,
        "name": "Shri Joginder Singh",
        "designation": "IPS",
        "tenure": "17.09.1993 - 31.01.1995",
        "image": "https://narcoticsindia.nic.in/FormerHead/5.jpeg"
    },
    {
        "id": 6,
        "name": "Shri H.P.Kumar",
        "designation": "IPS",
        "tenure": "01.03.1995 - 05.01.2001",
        "image": "https://narcoticsindia.nic.in/FormerHead/4_6.jpeg"
    },
    {
        "id": 7,
        "name": "Shri A.K. Pande",
        "designation": "IC & CS",
        "tenure": "06.01.2001 - 12.03.2001",
        "image": "https://narcoticsindia.nic.in/FormerHead/7.png"
    },
    {
        "id": 8,
        "name": "Shri Gopal Achari",
        "designation": "IPS",
        "tenure": "12.03.2001 - 30.11.2001",
        "image": "https://narcoticsindia.nic.in/FormerHead/8.jpeg"
    },
    {
        "id": 9,
        "name": "Shri M.K.Singh",
        "designation": "IPS",
        "tenure": "30.11.2001 - 30.07.2004",
        "image": "https://narcoticsindia.nic.in/FormerHead/9.png"
    },
    {
        "id": 10,
        "name": "Shri Rajiv Walia",
        "designation": "IAS (DDG IN-CHARGE)",
        "tenure": "30.07.2004 - 24.08.2004",
        "image": "https://narcoticsindia.nic.in/FormerHead/10.png"
    },
    {
        "id": 11,
        "name": "Shri Swaraj Puri",
        "designation": "IPS",
        "tenure": "24.11.2004 - 31.03.2005",
        "image": "https://narcoticsindia.nic.in/FormerHead/11.jpeg"
    },
    {
        "id": 12,
        "name": "Shri Rakesh",
        "designation": "IAS",
        "tenure": "01.04.2005 - 14.10.2005",
        "image": "https://narcoticsindia.nic.in/FormerHead/12.png"
    },
    {
        "id": 13,
        "name": "Shri K.C.Verma",
        "designation": "IPS",
        "tenure": "14.10.2005 - 15.04.2008",
        "image": "https://narcoticsindia.nic.in/FormerHead/13.jpeg"
    },
    {
        "id": 14,
        "name": "Shri M.L.Kumawat",
        "designation": "IPS",
        "tenure": "15.04.2008 - 17.12.2008",
        "image": "https://narcoticsindia.nic.in/FormerHead/14.jpeg"
    },
    {
        "id": 15,
        "name": "Shri O.P.S. Malik",
        "designation": "IPS",
        "tenure": "17.12.2008 - 31.07.2012",
        "image": "https://narcoticsindia.nic.in/FormerHead/15.jpeg"
    },
    {
        "id": 16,
        "name": "Shri Ajay Chadha",
        "designation": "IPS",
        "tenure": "01.08.2012 - 05.12.2012",
        "image": "https://narcoticsindia.nic.in/FormerHead/16.jpeg"
    },
    {
        "id": 17,
        "name": "Shri Rajiv Metha",
        "designation": "IPS",
        "tenure": "06.12.2012 - 19.02.2015",
        "image": "https://narcoticsindia.nic.in/FormerHead/17.png"
    },
    {
        "id": 18,
        "name": "Shri B.B Mishra",
        "designation": "IPS (DDG IN-CHARGE)",
        "tenure": "20.02.2015 - 31.03.2015",
        "image": "https://narcoticsindia.nic.in/FormerHead/18.jpeg"
    },
    {
        "id": 19,
        "name": "Shri Ashok Prasad",
        "designation": "IPS",
        "tenure": "01.04.2015 - 31.01.2016",
        "image": "https://narcoticsindia.nic.in/FormerHead/19.jpeg"
    },
    {
        "id": 20,
        "name": "Shri R.R Bhatnagar",
        "designation": "IPS",
        "tenure": "10.02.2016 - 28.04.2017",
        "image": "https://narcoticsindia.nic.in/FormerHead/20.jpeg"
    },
    {
        "id": 21,
        "name": "Shri Abhay",
        "designation": "IPS",
        "tenure": "02.01.2018 - 01.08.2019",
        "image": "https://narcoticsindia.nic.in/FormerHead/22.png"
    },
    {
        "id": 22,
        "name": "Shri Rakesh Asthana",
        "designation": "IPS",
        "tenure": "01.08.2019 - 19.07.2021",
        "image": "https://narcoticsindia.nic.in/FormerHead/23.jpeg"
    },
    {
        "id": 23,
        "name": "Shri Satya Narayan Pradhan",
        "designation": "IPS",
        "tenure": "29.07.2021 - 31.08.2024",
        "image": "https://narcoticsindia.nic.in/FormerHead/24.jpg"
    },
    {
        "id": 24,
        "name": "Shri Anish Dayal Singh",
        "designation": "IPS",
        "tenure": "05.09.2024 - 18.09.2024",
        "image": "https://narcoticsindia.nic.in/FormerHead/25.jpg"
    }
];

const FormerHeads = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const filteredHeads = formerHeadsData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tenure.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination Calculations
    const totalPages = Math.ceil(filteredHeads.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredHeads.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        document.querySelector('.directory-section-header')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="directory-page">
            <PageBanner
                title="Historical"
                highlightWord="Leadership"
                subtitle="Former Heads of Narcotics Control Bureau, India | Ministry of Home Affairs"
                breadcrumbLabel="Former heads"
            />

            <section className="directory-intro-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h2 className="section-title-modern">Legacy of <span>Command</span></h2>
                            <p className="lead-text-modern">
                                The Narcotics Control Bureau has been led by distinguished officers from across India's premier services, primarily the Indian Police Service (IPS) and the Indian Revenue Service (Customs & Central Excise).
                            </p>
                            <p className="text-body-modern">
                                This roll of honor commemorates the leadership and vision of those who have steered the Bureau since its inception on 17th March 1986, contributing to the nation's fight against drug trafficking and illicit narcotic trade.
                            </p>
                            <div className="mt-4">
                                <span className="badge-official"><i className="bi bi-clock-history"></i> Roll of Honor</span>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hq-image-container ms-lg-4">
                                <img src="/ncb_seal_modern.svg" alt="NCB Seal" style={{ objectFit: 'contain', padding: '40px', background: '#f8fafc' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="directory-main-section">
                <div className="container">
                    <div className="directory-card-wrapper">
                        {/* Standardized Controls Row */}
                        <div className="controls-row-premium row align-items-center justify-content-between mx-0 mb-4 g-3">
                            <div className="col-md-6 text-center text-md-start">
                                <h3 className="h6 fw-bold text-dark m-0 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                                    <i className="bi bi-award text-primary"></i>
                                    Former Heads of NCB
                                    <span className="badge rounded-pill bg-light text-primary border px-3 py-1">
                                        {filteredHeads.length} Officers Found
                                    </span>
                                </h3>
                            </div>
                            <div className="col-md-6 d-flex mt-0 justify-content-center justify-content-md-end">
                                <div className="premium-search-box">
                                    <i className="bi bi-search search-icon"></i>
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Search by name, year..."
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

                        <div className="table-outer-container">
                            <div className="table-responsive">
                                <table className="table table-hover directory-table-modern">
                                    <thead>
                                        <tr>
                                            <th>S No.</th>
                                            <th><i className="bi bi-person"></i> Officer Photo & Name</th>
                                            <th><i className="bi bi-briefcase"></i> Designation / Service</th>
                                            <th><i className="bi bi-calendar3"></i> Period of Tenure</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.length > 0 ? (
                                            currentItems.map((officer, index) => (
                                                <tr key={index}>
                                                    <td className="name-cell">
                                                        {indexOfFirstItem + index + 1}
                                                    </td>
                                                    <td className="name-cell">
                                                        <div className="officer-profile-combined">
                                                            <div className="officer-img-mini">
                                                                <img
                                                                    src={officer.image}
                                                                    alt={officer.name}
                                                                    onError={(e) => {
                                                                        e.target.src = "/ncb_seal_modern.svg";
                                                                        e.target.style.padding = "5px";
                                                                        e.target.style.opacity = "0.5";
                                                                    }}
                                                                />
                                                            </div>
                                                            <span>{officer.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="designation-cell">
                                                        {officer.designation}
                                                    </td>
                                                    <td className="email-cell">
                                                        <span className="fw-bold">{officer.tenure}</span>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="no-data-state">
                                                    <div className="empty-info">
                                                        <i className="bi bi-search"></i>
                                                        <p>No records found for "<strong>{searchTerm}</strong>"</p>
                                                        <button onClick={() => setSearchTerm("")}>View All</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="directory-pagination">
                                    <button
                                        className="pagination-btn arrow"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        aria-label="Previous Page"
                                    >
                                        <i className="bi bi-chevron-left"></i>
                                    </button>

                                    <div className="page-numbers">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                                            // Show only current page +/- 1 and first/last
                                            if (pageNum === 1 || pageNum === totalPages || (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)) {
                                                return (
                                                    <button
                                                        key={pageNum}
                                                        className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
                                                        onClick={() => handlePageChange(pageNum)}
                                                    >
                                                        {pageNum}
                                                    </button>
                                                );
                                            } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                                                return <span key={pageNum} className="pagination-ellipsis">...</span>;
                                            }
                                            return null;
                                        })}
                                    </div>

                                    <button
                                        className="pagination-btn arrow"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        aria-label="Next Page"
                                    >
                                        <i className="bi bi-chevron-right"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="historical-note mt-4 text-center">
                        <p className="text-muted small">
                            <i className="bi bi-info-circle me-1"></i> Data sourced from the official history records of Narcotics Control Bureau, Headquarters, New Delhi.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FormerHeads;
