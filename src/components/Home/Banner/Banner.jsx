import { useState, useEffect } from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import BannerImg1 from "../../../assets/banner-img-1.png";
import BannerImg2 from "../../../assets/banner-img-2.png";
import BannerImg3 from "../../../assets/banner-img-3.png";
import BannerImg4 from "../../../assets/banner-img-4.png";

const bannerContent = [
    {
        title: "SALES",
        description: "Get the best deals on all items.",
        image: BannerImg,
    },
    {
        title: "NEW ARRIVALS",
        description: "Check out the latest products.",
        image: BannerImg1,
    },
    {
        title: "DISCOUNTS",
        description: "Up to 50% off on selected items.",
        image: BannerImg2,
    },
    {
        title: "SUMMER SALE",
        description: "Get up to 50% off on selected items.",
        image: BannerImg3,
    },
    {
        title: "HOLIDAY SALE",
        description: "Get up to 50% off on selected items.",
        image: BannerImg4,
    },

    // Add more banner content objects as needed
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change content after a certain interval (e.g., 5 seconds)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerContent.length);
        }, 3000); // 3 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>{bannerContent[currentIndex].title}</h1>
                    <p>{bannerContent[currentIndex].description}</p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img
                    src={bannerContent[currentIndex].image}
                    alt={bannerContent[currentIndex].title}
                    className="banner-img"
                />
            </div>
        </div>
    );
};

export default Banner;
