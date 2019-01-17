import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from "react-flippy";
import './App.css';

import Front from './Components/Front';
import Back from './Components/Back';

class App extends Component {
  state = {
    isFlipped: false,
    person: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      about: "",
    }
  };

  infoAddhandle = (e) => {
    e.preventDefault();
    let name = document.querySelector('input[name="name"]').value,
        email = document.querySelector('input[name="email"]').value,
        lastName = document.querySelector('input[name="lastName"]').value,
        phone = document.querySelector('input[name="phone"]').value,
        about = document.querySelector('input[name="text"]').value,
        position = document.querySelector('input[name="position"]').value;

    this.setState({
      isFlipped: !this.state.isFlipped,
      person:
        {
          name: name,
          lastName: lastName,
          email: email,
          phone: phone,
          position: position,
          about: about
        }
    })
  };


  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  };

  render() {
    return (
      <div className="container App">
        <Flippy
          flipOnClick={true}
          flipDirection="horizontal"
          isFlipped={this.state.isFlipped}>
          <FrontSide>
            <Front
                person={this.state.person}
                onclick={this.handleClick}/>
          </FrontSide>
          <BackSide>
            <Back
                onclick={this.handleClick}
                submit={this.infoAddhandle}
            />
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default App;
