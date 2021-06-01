import './App.css';
import TextBox from '../TextBox/TextBox.js';
import jsxCreator from '../../util/jsxCreator.js';
import websiteContent from '../../util/websiteContent'
import Clock from '../Clock/Clock.js'
import { useState } from 'react';

function App() {
  // Create the state hooks
  const [isClock, toggleClock] = useState(true);
  const [isPrecise, togglePrecise] = useState(false);

  return (
    <div className="App">
      {/*Make this our app header with our rotating logo and text*/}
      <header className="App-header">
        <h1>React Final Project</h1>
        <div className="App-logo-container">
          <img src="reactlogo.png" id="App-logo" alt="logo" />
        </div>
      </header>

      <div className="App-body">
        {/*Create an array of text boxes that all reference the website content*/}
        <TextBox isImageRight="1" headerText={websiteContent.textBoxes[0].headerText} code={jsxCreator(websiteContent.textBoxes[0].code)}>
          {websiteContent.textBoxes[0].bodyText}
        </TextBox>

        <TextBox isImageRight="0" headerText={websiteContent.textBoxes[1].headerText} code={jsxCreator(websiteContent.textBoxes[1].code)}>
          {websiteContent.textBoxes[1].bodyText}
        </TextBox>

        <TextBox isImageRight="1" headerText={websiteContent.textBoxes[2].headerText} code={jsxCreator(websiteContent.textBoxes[2].code)}>
          {websiteContent.textBoxes[2].bodyText}
        </TextBox>

        <TextBox isImageRight="0" headerText={websiteContent.textBoxes[3].headerText} code={jsxCreator(websiteContent.textBoxes[3].code)}>
          {websiteContent.textBoxes[3].bodyText}
        </TextBox>

        <TextBox isImageRight="1" headerText={websiteContent.textBoxes[4].headerText} code={jsxCreator(websiteContent.textBoxes[4].code)}>
          {websiteContent.textBoxes[4].bodyText}
        </TextBox>

        {/*Create a div that contains the clock*/}
        <div className="outerDiv" style={{flexDirection: 'column', alignItems:'center'}}>

          {/*The Text of the clock*/}
          <h1 style={{fontSize:'1em', marginBottom:'0'}}>Dynamic React</h1>
          <p style={{fontSize:'0.75em'}}>{websiteContent.dynamicReactText}</p>

           {/*Create buttons that only change our objects state*/}
          <button className="clockButton" type="button" onClick={() => toggleClock((isClock) => !isClock)}>Toggle Clock</button>
          <button className="clockButton" type="button" onClick={() => togglePrecise((isPrecise) => !isPrecise)}>Toggle Preciseness</button>

           {/*Conditionally render out the Clock component based on our state, and pass isPrecise state as a prop*/}
          {isClock && <Clock isPrecise={isPrecise}/>}
        </div>

      </div>
    </div>
  );
}

export default App;
