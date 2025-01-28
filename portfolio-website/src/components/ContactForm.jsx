function ContactForm() {
    return (
      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea placeholder="Your Message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    );
  }
  
  export default ContactForm;
  