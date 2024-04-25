import "./Property.css";
import { Link } from "react-router-dom";

const Property = ({
  title,
  img,
  address,
  askingPrice,
  description,
  linkToProperty,
  headingLevel,
}) => {
  const Heading = headingLevel;
  return (
    <div className="property">
      <img
        src={img}
        alt={address}
        className="property-img"
        width="640"
        height="480"
      />
      <div className="property-text-container">
        <Heading className="property-title">{title}</Heading>
        <p className="property-address">{address}</p>
        <p className="property-price">{askingPrice}</p>
        <p className="property-description">{description}</p>
        <a
          className="property-contact-link"
          href="mailto:hello@housetricks.com"
        >
          Enquire about this property
        </a>
        {linkToProperty && (
          <Link to={`/property/${linkToProperty}`} className="property-btn">
            View property &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export default Property;
