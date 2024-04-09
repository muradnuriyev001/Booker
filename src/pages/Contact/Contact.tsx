import usePageTitle from "../../hooks/usePageTitle";
import c from "./Contact.module.scss";
import { IoLocationOutline } from "react-icons/io5";

import MapEmbed from "./MapEmbed/MapEmbed";
import ContactForm from "./ContactForm/ContactForm";
const Contact = () => {
  usePageTitle("Booker | Contact");
  return (
    <>
      <div className={c.banner}>
        <h1>Contact us</h1>
      </div>

      <div className={c.contact}>
        <div className={c.map}>
          <MapEmbed />
        </div>

        <div className={c.contact_info}>
          <h2>Need more information?</h2>
          <p>
            <IoLocationOutline />
            49 Boughtman Street Huntidale, Victoria(VIC), 3166 (03) 9238 8831
          </p>
          <p>
            For all customer enquiries please contact us at:
            hello@hazelandfolk.com Please allow 24 to 48 hours for our team to
            respond to you.
          </p>
          <h2>Open hours</h2>
          <p>Monday to Friday 8am to 5pm, Australian Eastern Standard Time.</p>
          <h2>Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
