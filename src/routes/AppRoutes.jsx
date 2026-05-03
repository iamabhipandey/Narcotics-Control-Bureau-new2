import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PageLoader from "../components/PageLoader";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import OfficersStaff from "../pages/OfficersStaff";
import OrganizationStructure from "../pages/OrganizationStructure";
import LatestNews from "../pages/LatestNews";
import RTI from "../pages/RTI";
import Tenders from "../pages/Tenders";
import PressRelease from "../pages/PressRelease";
import AwarenessVideos from "../pages/AwarenessVideos";
import PhotoGallery from "../pages/PhotoGallery";
import VideoGallery from "../pages/VideoGallery";
import FormerHeads from "../pages/FormerHeads";
import Legislations from "../pages/Legislations";
import NcbHistory from "../pages/NcbHistory";
import MottoMissionVision from "../pages/MottoMissionVision";
import Coordination from "../pages/Coordination";
import MouCbse from "../pages/MouCbse";
import Vigilance from "../pages/Vigilance";
import EmployeeCorner from "../pages/EmployeeCorner";
import RecruitmentRules from "../pages/RecruitmentRules";
import CurrentVacancies from "../pages/CurrentVacancies";
import NotFound from "../pages/NotFound";
import Login from "../pages/common/Login";
import Register from "../pages/common/Register";
import ForgotPassword from "../pages/common/ForgotPassword";

function AppRoutes() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // Duration of the loader visible state

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            {isLoading && <PageLoader />}
            <Routes>
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />

            <Route
                path="/vigilance"
                element={
                    <MainLayout>
                        <Vigilance />
                    </MainLayout>
                }
            />

            <Route
                path="/about"
                element={
                    <MainLayout>
                        <About />
                    </MainLayout>
                }
            />

            <Route
                path="/organization"
                element={
                    <MainLayout>
                        <OrganizationStructure />
                    </MainLayout>
                }
            />

            <Route
                path="/historical-background"
                element={
                    <MainLayout>
                        <NcbHistory />
                    </MainLayout>
                }
            />

            <Route
                path="/media/latest-news"
                element={
                    <MainLayout>
                        <LatestNews />
                    </MainLayout>
                }
            />

            <Route
                path="/media/press-release"
                element={
                    <MainLayout>
                        <PressRelease />
                    </MainLayout>
                }
            />

            <Route
                path="/media/photo-gallery"
                element={
                    <MainLayout>
                        <PhotoGallery />
                    </MainLayout>
                }
            />

            <Route
                path="/media/video-gallery"
                element={
                    <MainLayout>
                        <VideoGallery />
                    </MainLayout>
                }
            />

            <Route
                path="/media/awareness-videos"
                element={
                    <MainLayout>
                        <AwarenessVideos />
                    </MainLayout>
                }
            />

            <Route
                path="/contact"
                element={
                    <MainLayout>
                        <Contact />
                    </MainLayout>
                }
            />

            <Route
                path="/rti"
                element={
                    <MainLayout>
                        <RTI />
                    </MainLayout>
                }
            />

            <Route
                path="/tenders"
                element={
                    <MainLayout>
                        <Tenders />
                    </MainLayout>
                }
            />

            <Route
                path="/employee-corner"
                element={
                    <MainLayout>
                        <EmployeeCorner />
                    </MainLayout>
                }
            />
            <Route
                path="/recruitment-rules"
                element={
                    <MainLayout>
                        <RecruitmentRules />
                    </MainLayout>
                }
            />
            <Route path="/archive" element={<MainLayout><NotFound /></MainLayout>} />
            <Route
                path="/media/former-head"
                element={
                    <MainLayout>
                        <FormerHeads />
                    </MainLayout>
                }
            />
            <Route
                path="/legislations"
                element={
                    <MainLayout>
                        <Legislations />
                    </MainLayout>
                }
            />
            <Route
                path="/motto-mission-vision"
                element={
                    <MainLayout>
                        <MottoMissionVision />
                    </MainLayout>
                }
            />
            <Route
                path="/coordination"
                element={
                    <MainLayout>
                        <Coordination />
                    </MainLayout>
                }
            />
            <Route
                path="/bilateral-agreements"
                element={
                    <MainLayout>
                        <Coordination />
                    </MainLayout>
                }
            />
            <Route
                path="/mou"
                element={
                    <MainLayout>
                        <MouCbse />
                    </MainLayout>
                }
            />
            <Route
                path="/awareness/cbse-mou"
                element={
                    <MainLayout>
                        <MouCbse />
                    </MainLayout>
                }
            />
            {/* New Routes from RFP Requirements */}
            <Route path="/statistics" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/deliverables" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/compliance" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/feedback" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/citizen-charter" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/faq" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/sitemap" element={<MainLayout><NotFound /></MainLayout>} />
            <Route
                path="/career/vacancies"
                element={
                    <MainLayout>
                        <CurrentVacancies />
                    </MainLayout>
                }
            />
            <Route path="/recruitments" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/archive" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/e-pledge" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/scam-alert" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/treaties" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/tech-specs" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/security-compliance" element={<MainLayout><NotFound /></MainLayout>} />
            <Route path="/testing-qa" element={<MainLayout><NotFound /></MainLayout>} />
            <Route
                path="/login"
                element={
                    <MainLayout>
                        <Login />
                    </MainLayout>
                }
            />
            <Route
                path="/register"
                element={
                    <MainLayout>
                        <Register />
                    </MainLayout>
                }
            />
            <Route
                path="/forgot-password"
                element={
                    <MainLayout>
                        <ForgotPassword />
                    </MainLayout>
                }
            />
            <Route
                path="*"
                element={
                    <MainLayout>
                        <NotFound />
                    </MainLayout>
                }
            />
        </Routes>
    </>
    );
}

export default AppRoutes;