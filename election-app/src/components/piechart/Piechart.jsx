import React, { useEffect, useState } from "react";
import { events } from "../../context/context";
import PieChartCard from "./PieChartCard";

const Piechart = () => {
  const eventArr = JSON.parse(localStorage.getItem("events")) || events;

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setEventList(eventArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {eventList?.map((el) => {
        return <PieChartCard id={el?.id} el={el} />;
      })}
    </>
  );
};

export default Piechart;
