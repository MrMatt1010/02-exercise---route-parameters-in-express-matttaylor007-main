const getPropertyById = (properties, id) => {
  return properties.find((property) => property.id === id);
};

module.exports = getPropertyById;
