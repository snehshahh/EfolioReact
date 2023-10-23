import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DynamicTable() {
  const navigate = useNavigate(); // Change 'history' to 'navigate'
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.kanye.rest/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);

      // Navigate to the other page and pass the data as a prop
      navigate('./OtherPage', { state: { data: jsonData } }); // Corrected navigation method
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="App">
      <h1>React API Demo</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DynamicTable;
