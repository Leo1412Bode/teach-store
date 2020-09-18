import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/leo1412bode@gmail.com"
            method="POST"
          >
            {/* Name */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="your Name"
              />
            </div>
            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="@email.com"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="import!!"
              />
            </div>
            {/* message */}
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                row="10"
                placeholder="Your messagito"
              />
            </div>
            {/* submit */}
            <div className="form-group mt-3">
              <input
                className="form-control bg-primary text-white"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
