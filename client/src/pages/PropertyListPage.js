import React, { useState, useEffect } from "react";
import PropertyList from "../components/PropertyList";

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/properties");
      const data = await response.json();
      setProperties(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Properties for sale</h1>
      <PropertyList properties={properties} />
    </>
  );
};

export default PropertyListing;
