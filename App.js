import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DynamicTable from './RowsMultiple';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<DynamicTable />} />
        <Route path="/OtherPage" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
