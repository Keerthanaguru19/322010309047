import React from 'react';

const TrainDetails = ({ train }) => {
  return (
    <div>
      <h1>Train Details</h1>
      <p>Name: {train.name}</p>
      <p>Departure Time: {train.departureTime}</p>
      {/* Add more details */}
    </div>
  );
};

export default TrainDetails;
