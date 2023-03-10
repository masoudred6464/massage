import ContactUs from "./ContactUs/ContactUs";
import Navbar from "./NavBar/Navbar";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Aboutus from "./Aboutus/Aboutus";
import ServicesBox from "./ServicesBox/ServicesBox";
import Suggest from "./Suggest/Suggest";
import Footer from "./Footer/Footer";
import TurnRating from "./TurnRating/TurnRating";
import Gallery from "./Gallery/Gallery";

const topScroll = () => {
  window.scrollTo(0, 0);
};

const routse = [
  {
    path: "/",
    element: [
      <Navbar onScroll={topScroll} />,
      <Header onScroll={topScroll} />,
      <Services />,
      <Aboutus />,
      <ServicesBox />,
      <Suggest />,
      <Footer />,
    ],
  },
  { path: "/contactus", element: [<Navbar />, <ContactUs />] },

  { path: "/services", element: [<Navbar />, <Services />, <ServicesBox />] },
  { path: "/turn", element: [<Navbar />, <TurnRating />] },
  { path: "/gallery", element: [<Navbar />, <Gallery />] },
];

export default routse;
