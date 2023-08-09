import React, { useState, useEffect } from 'react';
import TrainList from '../components/TrainList';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train data from API and set it using setTrains
    // Example:
    // const fetchedTrains = fetchTrainData();
    // setTrains(fetchedTrains);
  }, []);

  return (
    <div>
      <TrainList trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
