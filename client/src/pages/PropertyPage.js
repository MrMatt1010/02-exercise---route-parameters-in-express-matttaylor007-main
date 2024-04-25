import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Property from "../components/Property";
import { Link } from "react-router-dom";

const PropertyListing = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5001/properties/${id}`);

      if (response.status === 404) {
        setIsNotFound(true);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setProperty(data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isNotFound) {
    return (
      <>
        <p className="error">Sorry! We can't find that property</p>
        <Link to="/" className="btn">
          &larr; Back to listings
        </Link>
      </>
    );
  }

  return (
    <>
      <Property
        title={property.title}
        img={property.img}
        address={property.address}
        askingPrice={property.askingPrice}
        description={property.description}
        id={property.id}
        headingLevel="h1"
      />
      <Link to="/" className="btn">
        &larr; Back to listings
      </Link>
    </>
  );
};

export default PropertyListing;
