import React, { useState, useEffect } from 'react';
import TrainDetails from '../components/TrainDetails';

const SingleTrainPage = ({ match }) => {
  const [train, setTrain] = useState(null);
  const trainId = match.params.trainId; // Assuming you're using react-router

  useEffect(() => {
    // Fetch train data for a specific train ID from API and set it using setTrain
    // Example:
    // const fetchedTrain = fetchTrainData(trainId);
    // setTrain(fetchedTrain);
  }, [trainId]);

  return (
    <div>
      {train ? <TrainDetails train={train} /> : <p>Loading...</p>}
    </div>
  );
};

export default SingleTrainPage;
