import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import email_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import address_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

//4110c088-f75b-4213-afc9-b40ee95a3045
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4110c088-f75b-4213-afc9-b40ee95a3045");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          autem dolorem harum itaque, placeat sint. Eligendi eaque impedit atque
          officia?
        </p>
        <ul>
          <li>
            <img src={email_icon} alt="" />
            contact@mouadzizi.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +212 690 337 973
          </li>
          <li>
            <img src={address_icon} alt="" />
            77 Massachusetts Ave, Combridge <br /> MA 40050, Morocco Marrakech
          </li>
        </ul>
      </div>
      <div className="contact-col" onSubmit={onSubmit}>
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="phone"
            name="phone"
            placeholder="Enter your Mobile Number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
