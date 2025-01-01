import "./CallToAction.css";
import ctabg from "../assets/ctabg.jpg"; // Update with the correct path to your image

const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className="call-to-action section dark-background"
    >
      <img
        src={ctabg}
        alt="Background"
        className="cta-bg"
        data-aos="fade-in" // AOS animation for background image
        data-aos-duration="1500"
      />

      <div className="container">
        <div
          className="row"
          data-aos="zoom-in" // AOS animation for row
          data-aos-delay="100"
        >
          <div
            className="col-xl-9 text-center text-xl-start"
            data-aos="fade-up" // AOS animation for text
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3>Ready to Transform Your Business?</h3>
            <p>
              Unlock the potential of your business with our innovative
              solutions. Whether you&apos;re looking to enhance your digital
              presence, streamline operations, or increase customer engagement,
              we are here to help you achieve your goals with personalized
              strategies that deliver results.
            </p>
          </div>
          <div
            className="col-xl-3 cta-btn-container text-center"
            data-aos="zoom-in-up" // AOS animation for the button
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <a className="cta-btn align-middle" href="#">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
