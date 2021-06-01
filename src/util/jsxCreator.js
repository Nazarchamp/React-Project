// Create a simple hash map between color codes and there respective JSX style objects
const colorMap = {
    'p': { color: '#bb86a1' },
    'lb': { color: "#67cdfe" },
    'o': { color: '#ce9178' },
    'w': { color: '#ffffff' },
    'db': { color: '#3f9cca' },
    'g': { color: '#738080' },
    'y': { color: '#dcdcaa' },
    'gn': { color: '#3ac9b0' }
};

// Matrix of form [[word, color]]
export function jsxCreator(textMatrix) {
    // Temporary array where all spans will be stored
    let generatedJSXArray = [];
    // Indexer for keys as required by react when created JSX arrays
    let keyIndexer = 0;
    // Iterate through all elements
    textMatrix.forEach(element => {
        // If word is br, create a br element
        if (element[0] === "br") {
            generatedJSXArray.push(<br key={keyIndexer++}/>);
        } 
        // If word is tab, create a four space element
        else if (element[0] === "tab") {
            generatedJSXArray.push(<span key={keyIndexer++}>&nbsp;&nbsp;&nbsp;&nbsp;</span>);
        } 
        // Otherwise color the word with the respective color in a span and push to array of spans
        else {
            let spanOfElement = <span key={keyIndexer++} style={colorMap[element[1]]}>{element[0]}</span>;
            generatedJSXArray.push(spanOfElement);
        }
    });
    // Return a p tag containing an array of spans
    return <p>{generatedJSXArray}</p>;
}

export default jsxCreator;