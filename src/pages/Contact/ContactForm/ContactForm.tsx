import c from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={c.form}>
      <form action="">
        <div className={c.df}>
          <label>Name</label>
          <input type="text" />
        </div>
        <div className={c.df}>
          <label>Email</label>
          <input type="email" />
        </div>
      </form>
      <label>Your message</label>
      <textarea style={{ resize: "vertical" }} rows={10}></textarea>
      <button>Send Message</button>
    </div>
  );
};

export default ContactForm;
