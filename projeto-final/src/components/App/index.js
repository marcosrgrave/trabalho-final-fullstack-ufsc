import React, { useState, useEffect } from 'react';

import Login from '../Login';
import DashboardProducts from '../Products';
import DashboardCategories from '../Categories';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <DashboardProducts setIsAuthenticated={setIsAuthenticated} />,
        <DashboardCategories setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
