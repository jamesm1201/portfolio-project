import React from 'react'
import './contact-form.css'

function ContactForm() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ee392090-9cb9-4394-84e7-26b190114df1");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert("Message Sent!");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <section className='contact'>
        <form onSubmit={onSubmit}>
            <h2>Get in Touch</h2>
            <div className='input-box'>
                <label>Full Name</label>
                <input type='text' className='field' placeholder='Enter your name' name='name' required/>
            </div>
            <div className='input-box'>
                <label>Email Address</label>
                <input type='text' className='field' placeholder='Enter your email' name='email' required/>
            </div>
            <div className='input-box'>
                <label>Your Message</label>
                <textarea name='message' id='' className='field mess' placeholder='Enter your message' required />
            </div>
            <button type='submit'>Send Message</button>
        </form>
    </section>
  )
}

export default ContactForm