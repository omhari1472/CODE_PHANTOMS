import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import CarBookingConfirm from "./pages/CarBookingConfirm";
import Bike from "./pages/Bike";
import Car from "./pages/Car";
import DrivveLandingPage from "./pages/DrivveLandingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/car-booking-confirm":
        title = "";
        metaDescription = "";
        break;
      case "/bike":
        title = "";
        metaDescription = "";
        break;
      case "/car":
        title = "";
        metaDescription = "";
        break;
      case "/drivve-landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CreateAccount />} />
      <Route path="/car-booking-confirm" element={<CarBookingConfirm />} />
      <Route path="/bike" element={<Bike />} />
      <Route path="/car" element={<Car />} />
      <Route path="/drivve-landing-page" element={<DrivveLandingPage />} />
    </Routes>
  );
}
export default App;
