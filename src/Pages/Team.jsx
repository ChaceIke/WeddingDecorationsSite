import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg";
import Person2 from "../images/team/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg";
import Person3 from "../images/team/zahir-namane-hwc7eIQiTCE-unsplash.jpg";
import Person4 from "../images/team/allgo-an-app-for-plus-size-people-m3peW4Kq6oc-unsplash.jpg";
import Person5 from "../images/team/uvais-ur-rehman-p9Dh4EAhcfg-unsplash.jpg";
import Person6 from "../images/team/christina-wocintechchat-com-_5_CBVCLBsY-unsplash.jpg";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Chace Ike", job: "Owner" },
    { img: Person2, name: "Mary Oppenheimer", job: "CFO" },
    { img: Person3, name: "Eric Allen", job: "CFO" },
    { img: Person4, name: "Courtney Francis", job: "Regional Manager" },
    { img: Person5, name: "Allen Ike", job: "Employee" },
    { img: Person6, name: "Elizabeth James", job: "Employee" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="container">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Get your wedding decorations today!</h2>
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

export default Team;
