import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Auth.scss";

const Login = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Credentials, 2: MFA/OTP
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaCode, setCaptchaCode] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loginWithOtp, setLoginWithOtp] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [userEnteredOtp, setUserEnteredOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Generate random CAPTCHA
    const generateCaptcha = useCallback(() => {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        setCaptchaCode(code);
    }, []);

    useEffect(() => {
        generateCaptcha();
    }, [generateCaptcha]);

    const handleSendOtp = () => {
        if (mobileNumber.length !== 10) return;
        setIsLoading(true);
        setTimeout(() => {
            setOtpSent(true);
            setIsLoading(false);
            alert("OTP sent to your mobile number!");
        }, 1500);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (captchaInput !== captchaCode) {
            setError("Invalid CAPTCHA code. Please try again.");
            generateCaptcha();
            setCaptchaInput("");
            return;
        }

        if (loginWithOtp && !otpSent) {
            setError("Please send and verify OTP first.");
            return;
        }

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            if (loginWithOtp) {
                alert("Login successful with OTP!");
                navigate("/dashboard");
            } else {
                setStep(2); // Move to MFA step if password login
            }
        }, 1500);
    };

    const handleOtpChange = (value, index) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleOtpKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handleMfaSubmit = (e) => {
        e.preventDefault();
        const fullOtp = otp.join("");
        if (fullOtp.length < 6) {
            setError("Please enter the full 6-digit OTP.");
            return;
        }

        setIsLoading(true);
        // Simulate API call for Step 2
        setTimeout(() => {
            setIsLoading(false);
            alert("Authentication Successful!");
            navigate("/dashboard");
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
                            <h1 className="display-5 fw-bold mb-3">Intelligence. Enforcement. Vigilance.</h1>
                            <p className="lead opacity-90">Facilitating cooperation and coordination between national and international narcotics enforcement agencies.</p>
                        </div>
                    </div>
                </div>

                {/* Form Side: Login/OTP Card */}
                <div className="auth-card-side-new">
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <img src="/logo.svg" alt="NCB" width="50" height="50" />
                        <div className="brand-header">
                            <h2 className="m-0 border-0">Signin</h2>
                            <small className="text-muted">Narcotics Control Bureau</small>
                        </div>
                    </div>

                    {error && (
                        <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                            <i className="bi bi-exclamation-triangle-fill me-2"></i>
                            <div>{error}</div>
                        </div>
                    )}

                    {step === 1 ? (
                        <div className="login-phase">
                            <form className="auth-form-new" onSubmit={handleLoginSubmit}>
                                {!loginWithOtp ? (
                                    <>
                                        <div className="form-group">
                                            <label>Email / Mobile No.</label>
                                            <div className="input-wrapper">
                                                <i className="bi bi-person-badge input-icon"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your registered ID"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <div className="input-wrapper">
                                                <i className="bi bi-shield-lock input-icon"></i>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Enter your password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="password-hide-btn"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                                                </button>
                                            </div>
                                            <div className="text-end mt-2">
                                                <Link to="/forgot-password" title="Submit Reset Request" className="forgot-link-new m-0 small">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="form-group">
                                            <label>Enter Mobile Number</label>
                                            <div className="input-wrapper d-flex gap-2">
                                                <div className="flex-grow-1 position-relative">
                                                    <i className="bi bi-phone input-icon"></i>
                                                    <input
                                                        type="text"
                                                        maxLength="10"
                                                        placeholder="10 Digit Mobile No."
                                                        value={mobileNumber}
                                                        onChange={(e) => {
                                                            const value = e.target.value.replace(/\D/g, "");
                                                            if (value.length <= 10) {
                                                                setMobileNumber(value);
                                                            }
                                                        }}
                                                        required
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    className="auth-action-btn"
                                                    disabled={mobileNumber.length !== 10 || isLoading}
                                                    onClick={handleSendOtp}
                                                >
                                                    {isLoading ? (
                                                        <span className="spinner-border spinner-border-sm"></span>
                                                    ) : (
                                                        otpSent ? "Resend" : "Send OTP"
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {otpSent && (
                                            <div className="form-group animate-fade-in">
                                                <label>Enter Your OTP</label>
                                                <div className="input-wrapper">
                                                    <i className="bi bi-key input-icon"></i>
                                                    <input
                                                        type="text"
                                                        maxLength="6"
                                                        placeholder="Enter OTP Received"
                                                        value={userEnteredOtp}
                                                        onChange={(e) => {
                                                            const value = e.target.value.replace(/\D/g, "");
                                                            if (value.length <= 6) {
                                                                setUserEnteredOtp(value);
                                                            }
                                                        }}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                <div className="captcha-section mb-4 mt-3">
                                    <label>Security Verification</label>
                                    <div className="captcha-box-inline d-flex align-items-center gap-1">
                                        <div className="captcha-display">
                                            {captchaCode}
                                            <div className="captcha-overlay"></div>
                                        </div>
                                        <button
                                            type="button"
                                            className="refresh-captcha-btn d-flex align-items-center justify-content-center"
                                            onClick={generateCaptcha}
                                            title="Refresh CAPTCHA"
                                        >
                                            <i className="bi bi-arrow-clockwise"></i>
                                        </button>
                                        <div className="input-wrapper flex-grow-1">
                                            <input
                                                type="text"
                                                placeholder="Enter code"
                                                value={captchaInput}
                                                onChange={(e) => setCaptchaInput(e.target.value)}
                                                required
                                                className="m-0"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="form-check custom-checkbox-new">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="otpInstead"
                                            checked={loginWithOtp}
                                            onChange={(e) => setLoginWithOtp(e.target.checked)}
                                        />
                                        <label className="form-check-label ms-2" htmlFor="otpInstead">
                                            Login with OTP instead of Password
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="login-btn-new ripple" disabled={isLoading || (loginWithOtp && !otpSent)}>
                                    {isLoading ? (
                                        <><span className="spinner-border spinner-border-sm me-2"></span> Processing...</>
                                    ) : (
                                        "Login"
                                    )}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="otp-phase animate-fade-in">
                            <button className="btn btn-link p-0 mb-3 text-decoration-none back-to-login" onClick={() => setStep(1)}>
                                <i className="bi bi-chevron-left me-1"></i> Back to Login
                            </button>
                            <h4 className="mb-2">Multi-Factor Authentication</h4>
                            <p className="text-muted small mb-4">
                                A 6-digit verification code has been sent to your registered mobile and email
                                <strong className="ms-1">*****.{username.split('@')[1]}</strong>
                            </p>

                            <form className="auth-form-new" onSubmit={handleMfaSubmit}>
                                <div className="otp-input-container d-flex justify-content-between mb-4">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`otp-${index}`}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleOtpChange(e.target.value, index)}
                                            onKeyDown={(e) => handleOtpKeyDown(e.key, index)}
                                            className="otp-field"
                                            autoFocus={index === 0}
                                        />
                                    ))}
                                </div>

                                <button type="submit" className="login-btn-new ripple" disabled={isLoading}>
                                    {isLoading ? (
                                        <><span className="spinner-border spinner-border-sm me-2"></span> Authenticating...</>
                                    ) : (
                                        "Securely Access Portal"
                                    )}
                                </button>

                                <div className="text-center mt-4">
                                    <p className="text-muted small">Didn't receive the code?</p>
                                    <button type="button" className="btn btn-link text-primary p-0 fw-bold">
                                        Resend OTP
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    <div className="registration-prompt mt-4 pt-4 border-top text-center">
                        <p className="register-footer-new m-0">
                            Don't have an account? <Link to="/register" className="reg-link">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
