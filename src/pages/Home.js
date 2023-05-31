import React from "react";
import Header from "../components/header/Header";
import Cards from "../components/cards/Cards";
import "../styles/home.css";
import { useFetch } from "../hooks/useFetch";
import { useContext, useEffect } from "react";
import { HousingContext } from "../hooks/useContext";
import Banner from "../components/banner/Banner";

const Home = () => {
  const { housings, setHousings } = useContext(HousingContext);
  const { data } = useFetch("housings.json");
  // console.log(data);

  useEffect(() => {
    if (data) {
      setHousings(data);
    }
  }, [data, setHousings]);

  return (
    <>
    <Banner page="Home"/>
      <Cards housings={housings} />    
    </>
  );
};

export default Home;
