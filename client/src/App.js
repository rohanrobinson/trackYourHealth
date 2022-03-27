import './App.css';
import React, { Component } from 'react';
import GetPatientInfo from './components/GetPatientInfo.js'

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
      };

      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    
    }

    handleKeyPress = (event) => {
      if (event.key === 'Enter') {
          var inputs = document.getElementsByClassName("inputSymptom");
          for (var i = 0; i < inputs.length; i++) {
            console.log(inputs[i].value);
          }
      }
  }
  
    plusButtonClick = (event) => {
      
    }

    showModal = () => {
      this.setState({show: true});
    };

    hideModal = () => {
      this.setState({show: false});
    };
    
      render() {
        return (
          <main>
            <div className="App">
              <header className="App-header">
                <p>
                  <code>Accountable Health</code> <br/> <br/> Track your Symptoms. Have Peace of Mind. <br /> <br /> 
                  <button type="button" id="getStartedBtn" onClick={this.showModal}>Get Started</button>
                  <GetPatientInfo show={this.state.show} handleClose={this.hideModal} handleKeyPress={this.handleKeyPress} plusButtonClick={this.plusButtonClick}/>

                </p>
              </header>

            </div>
        </main>
        );
      }
    }
    
    export default App;

