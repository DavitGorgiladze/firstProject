import React, { useState, useEffect } from "react";

const GeolocationExample = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if the geolocation API is available
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    // Function to handle successful location retrieval
    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    // Function to handle errors
    const errorHandler = (error) => {
      setError(`Error retrieving location: ${error.message}`);
    };

    // Call the geolocation API
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div>
      <h1>Geolocation Example</h1>
      {error && <p>{error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default GeolocationExample;
