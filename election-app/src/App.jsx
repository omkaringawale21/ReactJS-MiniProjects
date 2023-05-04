import { useEffect } from "react";
import "./App.css";
import { emploees, events } from "./context/context";
import AllRouter from "./pages/AllRouter";

function App() {
  const eventList = JSON.parse(localStorage.getItem("events")) || events;
  const emploeeList = JSON.parse(localStorage.getItem("empData")) || emploees;

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("empData"))) {
      localStorage.setItem("empData", JSON.stringify(emploeeList));
    }
    if (!JSON.parse(localStorage.getItem("events"))) {
      localStorage.setItem("events", JSON.stringify(eventList));
    }
  }, [eventList, emploeeList]);

  return (
    <div className="App">
      <AllRouter />
    </div>
  );
}

export default App;
