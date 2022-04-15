import './App.css';
import React, { Component } from 'react';
import GetPatientInfo from './components/GetPatientInfo.js';
import FAQ from './components/FAQ.js';

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
  
    plusButtonClick = () => {
       console.log("add new functionality for a new button");
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

                <p id="FAQ" onClick={this.showModal}><i>What is Accountable?</i></p>
                <p>
                  <code>Accountable</code> <br/> <br/> Track your Symptoms. Have Peace of Mind. <br /> <br /> 
                  <button type="button" className='landingPageBtn' id="getStartedBtn" onClick={this.showModal}>New Here?  <br /> Let's Get Started.</button>   <br /> 
                  <button type="button" className='landingPageBtn' id="signInBtn" onClick={()=>console.log("pull up been before modal")}>Been Here Before? <br/> Sign In.</button>

                  <GetPatientInfo show={this.state.show} handleClose={this.hideModal} handleKeyPress={this.handleKeyPress} plusButtonClick={this.plusButtonClick} />
                  <FAQ show={this.state.show} handleClose={this.hideModal} handleKeyPress={this.handleKeyPress} />
                </p>
              </header>

            </div>
        </main>
        );
      }
    }
    
    export default App;