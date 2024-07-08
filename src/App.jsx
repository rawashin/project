import "./App.css";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./messages/en.json";
import arTranslation from "./messages/ar.json";
import frTranslation from "./messages/fr.json";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./componnets/Header";
import { AppContextProvider } from "./hooks/useAppContext";
import FixedContactBar from "./components/FixedContactBar";
import Footer from "./componnets/Footer";
import { Helmet } from "react-helmet";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import News from "./pages/News";
import Team from "./pages/Team";
import Aos from "aos";
import "aos/dist/aos.css";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
    fr: { translation: frTranslation },
  },
  default: "ar",
  fallbackLng: "en,ar,fr",
  interpolation: {
    escapeValue: false,
  },
});
function App() {
  Aos.init();

  return (
    <AppContextProvider>
      <Header />
      <Helmet>
        <title>
          {localStorage.getItem("title") === "ar"
            ? "رواشين الاستثمارية"
            : "Rawashin Investment"}{" "}
        </title>
        <meta
          name="description"
          content={
            localStorage.getItem("title") === "ar"
              ? "رواشين الاستثمارية"
              : "Rawashin Investment"
          }
        />
      </Helmet>
      <Routes>
        <Route
          index
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Services />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <News />
              <Footer />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Team />
              <Footer />
            </>
          }
        />
      </Routes>
      <FixedContactBar />
    </AppContextProvider>
  );
}

export default App;
