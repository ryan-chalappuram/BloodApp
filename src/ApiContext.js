
import React from 'react';

const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
  const apiUrl = 'https://laeve.serveo.net/'; 

  return (
    <ApiContext.Provider value={apiUrl}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
