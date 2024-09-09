import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/Context";
// import About from "./components/About/About";
// import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
// import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import ContactForm from "./components/Footer/Footercomponents/ContactForm";
import Returns from "./components/Footer/Footercomponents/Returns";
import About from "./components/Footer/Footercomponents/About";
import PrivacyPolicy from "./components/Footer/Footercomponents/PrivacyPolicy";
import TermsAndConditions from "./components/Footer/Footercomponents/TermsAndConditions";



import "./App.scss"
function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/returns" element={<Returns />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    )
}

export default App;
