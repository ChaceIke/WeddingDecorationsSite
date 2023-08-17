import Couple from '../images/plan/couple.png';
import Arch from '../images/plan/wedding-arch.png';
import Ring from '../images/plan/wedding-rings.png';

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your wedding now</h3>
              <h2>The most beautiful decorations</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={Couple} alt="icon_img" />
                <h3>Select Style</h3>
                <p>
                  We offer tons of different decorations to meet your wedding needs.
                  Your wedding, your style.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Arch} alt="icon_img" />
                <h3>Contact Us</h3>
                <p>
                  See if the decorations you'd like can be picked up at a local Portland location.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Ring} alt="icon_img" />
                <h3>Availability</h3>
                <p>
                  We provide hassle-free pick-up for
                  everything in our stores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
