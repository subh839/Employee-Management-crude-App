import React from "react";
import { useRouteMatch } from "react-router-dom";
import PizzaLeft from "../assets/code.png";
import "../styles/Contact.css";
function Contact() {
  const  navigate=useRouteMatch();
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h2> Contact Us</h2>
        <br/>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button onClick={()=> navigate('summary')}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
