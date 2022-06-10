import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div id="contactMe" className=" container pt-5">
      <h1 className=" text-center aboutme ">Contact Me</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="ml"></div>
        <div className="mi"></div>
        <div className="mr"></div>
      </div>
      <div
        class="container contact-form border rounded"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div class="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form action="https://formsubmit.co/osafridi00@gmail.com" method="POST">
          <h3>Get In Touch</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="Name"
                  class="form-control"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="Email"
                  class="form-control"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="Phone"
                  class="form-control"
                  placeholder="Your Phone Number *"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="Msg"
                  class="form-control"
                  placeholder="Your Message *"
                  style={{ height: "150px" }}
                  required
                ></textarea>
              </div>
            </div>
            <div class="form-group mx-auto">
              <input
                type="submit"
                class="btn primary-btn"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
