import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import DestinationPage from "./pages/DestinationPage";
import TripPlannerPage from "./pages/TripPlannerPage";
import AddPlacePage from "./pages/AddPlacePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:cityId" element={<DestinationPage />} />
          <Route path="/trip-planner" element={<TripPlannerPage />} />
          <Route path="/add-place" element={<AddPlacePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
