import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/wedding-photos-laid-on-a-table-studio-shot-on-wooden-background-SBI-305166046.jpg";
import CarImg2 from "../images/cars-big/wedding-table-SBI-300620519.jpg";
import CarImg3 from "../images/cars-big/table-decoration-SBI-300780849.jpg";
import CarImg4 from "../images/cars-big/table-with-loads-of-cakes-cupcakes-cookies-and-cakepops-studio-shot-SBI-305226115.jpg";
import CarImg5 from "../images/cars-big/beautiful-floral-wedding-table-decoration-at-wedding-reception-SBI-304894252.jpg";
import CarImg6 from "../images/cars-big/beautiful-and-tasty-wedding-cake-at-wedding-reception-SBI-305105551.jpg";
import { Link } from "react-router-dom";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Photo Package</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$550</h4>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-camera"></i> &nbsp; Family
                    </span>
                    <span style={{ textAlign: "right" }}>
                      50 &nbsp; <i className="fa-solid fa-camera"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-camera"></i> &nbsp; 100
                    </span>
                    <span style={{ textAlign: "right" }}>
                      200+ &nbsp; <i className="fa-solid fa-camera"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Order Photographer
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Chair Package</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-chair"></i> &nbsp; 50
                    </span>
                    <span style={{ textAlign: "right" }}>
                      100 &nbsp; <i className="fa-solid fa-chair"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-chair"></i> &nbsp; 150
                    </span>
                    <span style={{ textAlign: "right" }}>
                      200 &nbsp; <i className="fa-solid fa-chair"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Order Chairs
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Glassware Package</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$200</h4>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-wine-glass"></i> &nbsp; 50
                    </span>
                    <span style={{ textAlign: "right" }}>
                      100 &nbsp; <i className="fa-solid fa-wine-glass"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-wine-glass"></i> &nbsp; 150
                    </span>
                    <span style={{ textAlign: "right" }}>
                      200 &nbsp; <i className="fa-solid fa-wine-glass"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Order Glassware
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Sweets Package</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$200</h4>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-cookie-bite"></i> &nbsp; Small
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Med. &nbsp; <i className="fa-solid fa-cookie-bite"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-cookie-bite"></i> &nbsp; Large
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Extra &nbsp; <i className="fa-solid fa-cookie-bite"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Order Sweets
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Candle Package</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$100</h4>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-fire"></i> &nbsp; 25
                    </span>
                    <span style={{ textAlign: "right" }}>
                      50 &nbsp; <i className="fa-solid fa-fire"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-fire"></i> &nbsp; 100
                    </span>
                    <span style={{ textAlign: "right" }}>
                      200 &nbsp; <i className="fa-solid fa-fire"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Order Candles
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Cake Package</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$350</h4>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-cake-candles"></i> &nbsp; Vanilla
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Coffee &nbsp; <i className="fa-solid fa-cake-candles"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-cake-candles"></i> &nbsp; Lemon
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Velvet &nbsp; <i className="fa-solid fa-cake-candles"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Order Cake
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Order your decorations today!</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
