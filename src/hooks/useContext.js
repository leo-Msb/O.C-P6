import React, { createContext, useState } from "react";
import { UseState, useEffect } from "react";

export const HousingProvider = ({ children, Housings }) => {
  const [housings, setHousings] = useState([]);

  const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
  };

  return (
    <HousingContext.Provider value={{ housings, setHousings }}>
      {children}
    </HousingContext.Provider>
  );
};

export const HousingContext = createContext();
