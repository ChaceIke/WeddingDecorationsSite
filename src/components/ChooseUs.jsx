import WeddingGrass from '../images/chooseUs/WeddingGrass.jpg';
import Box1 from "../images/chooseUs/balloons.png";
import Box2 from "../images/chooseUs/groom.png";
import Box3 from "../images/chooseUs/wedding-car.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={WeddingGrass}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Rose City's best place for all your wedding needs!</h2>
                <p>
                  While our options are top-of-the-line quality, are prices
                  are some of the best. We care about our customer's special
                  day without breaking the bank.
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Thematic Arrangements</h4>
                    <p>
                      Many of our styles coordinate with other decorations
                      we offer. If you want your whole venue coordinated, we
                      got you covered!
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Helpful Team at the ready</h4>
                    <p>
                      If you need help setting any of our products
                      up at your venue, we can help!
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Same-day pickup and setup</h4>
                    <p>
                      Just because our products are high quality, doesn't
                      mean they won't get to you on time!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
