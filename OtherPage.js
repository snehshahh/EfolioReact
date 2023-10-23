import React from 'react';
import { useLocation } from 'react-router-dom';

function OtherPage() {
  const location = useLocation();

  // Check if there is data in the state
  if (location.state && location.state.data) {
    const data = location.state.data;

    return (
      <div>
        <h2>Data from Previous Page:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } else {
    return (
      <div>
        <h2>No data received</h2>
      </div>
    );
  }
}

export default OtherPage;
