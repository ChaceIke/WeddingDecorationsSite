import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${car.price}</span>/ flower
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>1-5 Flowers</span>
                <span>{car.theme}</span>
              </div>

              <div className="pick-description__table__col">
                <span>6-10 Flowers</span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>11-15 Flowers</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>16+ Flowers</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Small Venue Styling</span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Medium Venue Styling</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Large Venue Styling</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Order Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
