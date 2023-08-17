import RedGirl from '../images/testimonials/redgirl.jpg';
import BlueGirl from '../images/testimonials/bluegirl.jpg';

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Bride Testimonials</h2>
              <p>
                We truly care about your special day! Don't just
                take it from us. Here are some personal testimonies
                from bride's who loved our work. Many women use our
                products 3 or 4 times!
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "The first wedding store we tried bailed on us 
                  with only days to spare before the wedding. RoseCityWedding
                  helped us choose beautiful decorations and even sent a team
                  to set up the venue! They saved the day! "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={BlueGirl} alt="user_img" />
                    <span>
                      <h4>Selena Kyle</h4>
                      <p>Happy Valley</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "The decorations we got from RoseCityWeddings made
                  my wedding that much more special. I wouldn't tell
                anyone to go anywhere else!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={RedGirl} alt="user_img" />
                    <span>
                      <h4>Jessica Thalmor</h4>
                      <p>Beaverton</p>
                    </span>
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

export default Testimonials;
