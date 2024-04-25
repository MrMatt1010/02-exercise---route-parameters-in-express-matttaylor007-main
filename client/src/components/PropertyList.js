import "./PropertyList.css";
import Property from "./Property";

const PropertyList = ({ properties }) => {
  return (
    <ul className="property-list">
      {properties.map((property) => {
        return (
          <li key={property.id} className="property-list-item">
            <Property
              title={property.title}
              img={property.img}
              address={property.address}
              askingPrice={property.askingPrice}
              description={property.description}
              linkToProperty={property.id}
              headingLevel="h2"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PropertyList;
