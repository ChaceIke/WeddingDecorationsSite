import { Link } from "react-router-dom";
import Wedding2 from '../images/hero/Wedding2.png';
import { useEffect, useState } from "react";
import PinkFlowers from '../images/cars-big/PinkFlowersTransparents.png';

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={PinkFlowers} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your wedding now</h4>
              <h1>
                <span>Beautiful</span> wedding decorations at
                affordable prices
              </h1>
              <p>
                Plan the wedding of your dreams. Stylish dinnerware, elegant decor, great prices,
                flexible pick-up or drop-off options and much more.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Order Decorations &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={Wedding2}
              alt="wedding2-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
