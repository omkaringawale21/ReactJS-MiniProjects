import React from "react";
import Footer from "./Components/footer/footer";
import EventDetails from "./Components/form/form";
import Header from "./Components/header/header";

class App extends React.Component {
  render() {
    return(
      <>
        <Header/>
        <EventDetails />
        <Footer />
      </>
    );
  }
}

export default App;