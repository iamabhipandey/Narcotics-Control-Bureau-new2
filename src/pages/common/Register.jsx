import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Auth.scss";

const Register = () => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        employeeId: "",
        division: "",
        designation: ""
    });

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(prev => prev + 1);
    };

    const handlePreviousStep = () => {
        setStep(prev => prev - 1);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            alert("Registration application submitted for NCB admin approval!");
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-container-screenshot">
                {/* Visual Side: NCB Authorities Illustration */}
                <div className="auth-visual-side-new">
                    <div className="visual-overlay"></div>
                    <div className="visual-content">
                        <div className="premium-badge-wrapper mb-4">
                            <svg className="floating-badge-svg" width="80" height="90" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 0L10 18V50C10 75 27 98 50 110C73 98 90 75 90 50V18L50 0Z" fill="url(#shield_grad)" fillOpacity="0.9" />
                                <path d="M50 15L20 28.5V50C20 68.5 32.5 85.5 50 94.5C67.5 85.5 80 68.5 80 50V28.5L50 15Z" stroke="white" strokeWidth="2" />
                                <circle cx="50" cy="50" r="10" fill="white" fillOpacity="0.2" />
                                <rect x="47" y="40" width="6" height="20" rx="3" fill="white" />
                                <defs>
                                    <linearGradient id="shield_grad" x1="50" y1="0" x2="50" y2="110" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FFD700" />
                                        <stop offset="1" stopColor="#DAA520" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="visual-text text-start">
                            <h1 className="display-5 fw-bold mb-3">Join the National Defense.</h1>
                            <p className="lead opacity-90">Register today to contribute to our mission of ensuring a drug-free India through coordinated intelligence and enforcement efforts.</p>

                            <div className="security-badges mt-5 d-flex gap-3">
                                <div className="badge-item">
                                    <i className="bi bi-shield-check"></i> Secure Access
                                </div>
                                <div className="badge-item">
                                    <i className="bi bi-clock-history"></i> Real-time Intel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side: Registration Card */}
                <div className="auth-card-side-new">
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <img src="/logo.svg" alt="NCB" width="50" height="50" />
                        <div className="brand-header">
                            <h2 className="m-0 border-0">Register</h2>
                            <small className="text-muted">Narcotics Control Bureau</small>
                        </div>
                    </div>

                    <div className="progress-boxed-container mb-2">
                        <div className="step-label">
                            {step === 1 ? "Personal Identity" : "Professional Details"}
                        </div>
                        <div className="registration-progress">
                            <div className={`progress-dot ${step === 1 ? 'active' : 'completed'}`}>
                                {step > 1 ? <i className="bi bi-check-lg"></i> : "1"}
                            </div>
                            <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
                            <div className={`progress-dot ${step === 2 ? 'active' : ''}`}>
                                2
                            </div>
                        </div>
                    </div>

                    <form className="auth-form-new" onSubmit={step === 1 ? handleNextStep : handleRegisterSubmit}>
                        {step === 1 ? (
                            <div className="animate-fade-in">
                                <p className="auth-step-subtitle mb-3">Step 1: Basic Information</p>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <div className="input-wrapper">
                                        <i className="bi bi-person input-icon"></i>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Official Email ID</label>
                                    <div className="input-wrapper">
                                        <i className="bi bi-envelope input-icon"></i>
                                        <input
                                            type="email"
                                            placeholder="official@ncb.gov.in"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <div className="input-wrapper">
                                        <i className="bi bi-phone input-icon"></i>
                                        <input
                                            type="tel"
                                            placeholder="10 Digit Mobile No."
                                            required
                                            value={formData.mobile}
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/g, "");
                                                if (value.length <= 10) {
                                                    setFormData({ ...formData, mobile: value });
                                                }
                                            }}
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="login-btn-new mt-3 ripple">
                                    Continue to Step 2 <i className="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        ) : (
                            <div className="animate-fade-in">
                                <p className="auth-step-subtitle mb-3">Step 2: Deployment Details</p>
                                <div className="form-group">
                                    <label>Employee ID No.</label>
                                    <div className="input-wrapper">
                                        <i className="bi bi-badge-ad input-icon"></i>
                                        <input
                                            type="text"
                                            placeholder="e.g. NCB-2024-XXXX"
                                            required
                                            value={formData.employeeId}
                                            onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Division / Zonal Unit</label>
                                    <div className="input-wrapper">
                                        <i className="bi bi-building input-icon"></i>
                                        <select
                                            className="form-select custom-auth-select"
                                            required
                                            value={formData.division}
                                            onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                                        >
                                            <option value="">Select Department</option>
                                            <option value="operations">Operations</option>
                                            <option value="surveillance">Surveillance</option>
                                            <option value="admin">Administration</option>
                                            <option value="intelligence">Intelligence</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Designation</label>
                                    <div className="input-wrapper">
                                        <i className="bi bi-person-badge input-icon"></i>
                                        <input
                                            type="text"
                                            placeholder="Officer / Inspector / Superintendent"
                                            required
                                            value={formData.designation}
                                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex gap-2 mt-4">
                                    <button type="button" className="reg-back-btn flex-grow-1" onClick={handlePreviousStep}>
                                        Back
                                    </button>
                                    <button type="submit" className="login-btn-new flex-grow-2 ripple" disabled={isLoading}>
                                        {isLoading ? (
                                            <><span className="spinner-border spinner-border-sm me-2"></span> Processing...</>
                                        ) : (
                                            "Submit Request"
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>

                    <div className="registration-prompt mt-4 pt-4 border-top text-center">
                        <p className="register-footer-new m-0">
                            Already have an account? <Link to="/login" className="reg-link">Signin</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
