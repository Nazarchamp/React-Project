import React from 'react';

// Define styles for the elements that are specific for the text boxes
const codeContainerStyling = {
    backgroundColor: '#404040',
    width: '110%',
};

const codeStyling = {
    display: 'flex',
    margin: '10px',
}

const textStyling = {
    width: '100%',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}

// Create our component function that accepts props
export function TextBox(props) {
    // Define what the code will look like
    let jsxCode = (
        <div style={codeContainerStyling}>
            <div style={codeStyling}>
                {props.code}
            </div>
        </div>
    );

    // Create the two possible image locations
    var leftImage;
    var rightImage;

    // If isImageRight is a zero, make our image be in leftImage, otherwise put it in rightImage
    (props.isImageRight === "0") ? leftImage = jsxCode : rightImage = jsxCode;

    // Return a div with the two images surrounding our text, however only one image will actually have html
    return (
        <div className="outerDiv">

            {leftImage}

            <div style={textStyling}>
                <h1 style={{ fontSize: '1em' }}>{props.headerText}</h1>
                <p style={{ fontSize: '0.75em' }}>{props.children}</p>
            </div>

            {rightImage}

        </div>
    );
}

export default TextBox;