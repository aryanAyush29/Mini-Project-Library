import React from 'react'
import './Contact.css'
import msg_icon from'../../assets/msg-icon.png'
import mail_icon from'../../assets/mail-icon.png'
import phone_icon from'../../assets/phone-icon.png'
import location_icon from'../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a5991c99-c874-487c-9d2d-b953f776826e");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success",res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error",res);
      setResult(res.message);
    }
  };



  return (  
      <div className = 'contact'>
    <div className="contact-col">
        <h3>Send us a message  <img src={msg_icon} alt="" /> </h3>
        
        <p>Feel comfortbale in contacting us. <br />
             We will reply to your message shortly. <br />
            We are accepting your feedback and we value it. <br /> 
            We ensure you better services from our end.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact us:ayu.ary.rt23@dypatil.edu </li>
                
                <li><img src={phone_icon} alt="" />Call us:+91 1234567890</li>
                
                <li><img src={location_icon} alt="" />Visit us:DY PATIL UNIVERSITY</li>
            </ul>
    </div>
    <div className="contact-col"></div>
    <form onSubmit={onSubmit}>
        <label >Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required/>
        <label> Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter Your Mobile Number'required/>
        <label > Send us your Query/Feedback</label>
        <textarea name="message"  row="10" placeholder='Enter your message/query' required></textarea>
        <button type= 'submit' className = 'btn dark-btn'>Submit Now <img src={white_arrow}alt="" /></button>

    </form>
    <span>{result}</span>
</div>
  )
}


export default Contact