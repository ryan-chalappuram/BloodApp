
import React from 'react';

const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
  const apiUrl = 'https://priores.serveo.net/'; // Replace with your actual API URL

  return (
    <ApiContext.Provider value={apiUrl}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
