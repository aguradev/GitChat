import { Avatar, AvatarImage } from "@components/ui/avatar";
import PropTypes from "prop-types";

const ContactList = (props) => {
  const { classActive, className, contacts, children } = props;
  const { profile, firstName, lastName } = contacts;

  const shorterText = (text) => {
    if (!text.length) return;

    return text.length >= 100 ? `${text.substring(0, 40)}...` : `${text}`;
  };

  return (
    <figure
      className={`message_list_card ${
        classActive ? "active" : ""
      } ${className}`}
    >
      <Avatar>
        <AvatarImage src={profile} />
      </Avatar>
      <figcaption>
        <h4 className="message_person_name">{`${firstName} ${lastName}`}</h4>
        <p className="message_description">
          {shorterText(
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam porro reiciendis eligendi. Natus rerum ut, voluptatem nemo eius dolores sunt sit facere quam molestiae, magnam ipsum quas. Tempora, fuga facere!"
          )}
        </p>
      </figcaption>
      {children}
    </figure>
  );
};

ContactList.propTypes = {
  classActive: PropTypes.bool,
  className: PropTypes.string,
  contacts: PropTypes.shape({
    profile: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
};

export default ContactList;
