import React from "react";
import Header from "./Components/header/header";
import EmployeeFrom from "./Components/form/form";
import "./App.css";
import Footer from "./Components/footer/footer";

class App extends React.Component {
  render() {
    return(
      <>
        <Header/>
        <EmployeeFrom />
        <Footer />
      </>
    );
  }
}

export default App;