import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignUpPage";
import EmailVerification from "../pages/EmailVerification";
import PhoneVerification from "../pages/PhoneVerification";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/phone-verification" element={<PhoneVerification />} />
        {/* <Route path="/home" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
