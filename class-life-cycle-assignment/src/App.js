import React from "react";
import InputField from "./InputField.js";
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Props", props, "State", state);
    return state;
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render(){
    return(
      <div className="container app-container" >
        <div className="row" >
          <div className="col-12 content" >
            <p>Add To Do List<button type="button" className="btn fas fa-plus my-2 ml-2" onClick={() => {
              this.setState({
                show: !this.state.show,
              })
            }} ></button></p>
            <div className="row" >
              <div className="col-6 input-field" >
                {
                  this.state.show && <InputField />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;