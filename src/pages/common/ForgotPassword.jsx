import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Auth.scss";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsSubmitted(true);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-container-screenshot">
                {/* Visual Side: Consistently branded */}
                <div className="auth-visual-side-new">
                    <div className="visual-overlay"></div>
                    <div className="visual-content">
                        <div className="premium-badge-wrapper mb-4">
                            <svg className="floating-badge-svg" width="80" height="90" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 0L10 18V50C10 75 27 98 50 110C73 98 90 75 90 50V18L50 0Z" fill="url(#shield_grad_rev)" fillOpacity="0.9" />
                                <path d="M50 15L20 28.5V50C20 68.5 32.5 85.5 50 94.5C67.5 85.5 80 68.5 80 50V28.5L50 15Z" stroke="white" strokeWidth="2" />
                                <circle cx="50" cy="50" r="10" fill="white" fillOpacity="0.2" />
                                <rect x="47" y="40" width="6" height="20" rx="3" fill="white" />
                                <defs>
                                    <linearGradient id="shield_grad_rev" x1="50" y1="0" x2="50" y2="110" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FFD700" />
                                        <stop offset="1" stopColor="#DAA520" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="visual-text text-start">
                            <h1 className="display-5 fw-bold mb-3">Security & Recovery.</h1>
                            <p className="lead opacity-90">Our dedicated support framework ensures secure account restoration for authorized NCB personnel.</p>
                            <div className="security-badges d-flex gap-4 mt-5">
                                <div className="badge-item">
                                    <i className="bi bi-headset"></i>
                                    <span>24/7 Support</span>
                                </div>
                                <div className="badge-item">
                                    <i className="bi bi-key-fill"></i>
                                    <span>Encrypted Reset</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="auth-card-side-new animate-fade-in">
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <img src="/logo.svg" alt="NCB" width="50" height="50" />
                        <div className="brand-header">
                            <h2 className="m-0 border-0 p-0">Reset Password</h2>
                            <small className="text-muted">Narcotics Control Bureau</small>
                        </div>
                    </div>

                    {!isSubmitted ? (
                        <>
                            <form className="auth-form-new" onSubmit={handleSubmit}>
                                <div className="form-group mb-4">
                                    <label>Official Email ID</label>
                                    <div className="input-wrapper">
                                        <i className="bi bi-envelope-at input-icon"></i>
                                        <input
                                            type="email"
                                            placeholder="ncb.officer@gov.in"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="login-btn-new ripple mb-3" disabled={isLoading}>
                                    {isLoading ? (
                                        <><span className="spinner-border spinner-border-sm me-2"></span> Processing...</>
                                    ) : (
                                        <>Send Reset Link <i className="bi bi-send-fill ms-2"></i></>
                                    )}
                                </button>

                                <div className="text-center mt-3">
                                    <Link to="/login" className="back-to-login text-decoration-none">
                                        <i className="bi bi-arrow-left me-1"></i> Back to Login
                                    </Link>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="text-center">
                            <div className="success-icon-wrapper mb-4">
                                <i className="bi bi-envelope-check-fill text-success" style={{ fontSize: '64px' }}></i>
                            </div>
                            <h4 className="fw-bold mb-3">Reset link dispatched</h4>
                            <p className="text-muted small mb-4">
                                If an account exists for <strong>{email}</strong>, you will receive instructions shortly. Please check your official inbox.
                            </p>

                            <div className="alert alert-info py-2 small mb-4">
                                <i className="bi bi-info-circle-fill me-2"></i>
                                Link expires in 15 minutes
                            </div>

                            <Link to="/login" className="login-btn-new text-decoration-none">
                                Return to Log In
                            </Link>
                        </div>
                    )}

                    <div className="registration-prompt mt-4 pt-4 border-top">
                        <p className="register-footer-new m-0 text-center">
                            Need help? <a href="#" className="reg-link">Contact Admin Support</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
