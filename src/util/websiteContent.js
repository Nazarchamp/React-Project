// This is just the static website content, it's stored in a JS object so that we don't need to clutter up the app.js
// The object has two properties, a list, which is a list that contains objects(That contain header and body text, along with color formatted code), and the code for the last part of the page
export const websiteContent = {
    textBoxes: [
        {
            headerText: "React",
            bodyText: "React.js is an invaluable tool developed by facebook to create web applications. On this website I'll give you all the basics of react used in creating a static website. All you need to do to get started is import the following modules:",
            code:
                [['import ', 'p'], ['React ', 'lb'], ['from ', 'p'], ["'react'", 'o'], [";", "w"],
                ['br'],
                ['import ', 'p'], ['ReactDOM ', 'lb'], ['from ', 'p'], ["'react-dom'", 'o'], [";", "w"]]
        },

        {
            headerText: "JSX",
            bodyText: "React.js uses JSX, which is a way to implement HTML values in javascript code. There are several caveates to JSX which include: Needing to have a root element, and needing to use brackets when using multiline JSX expressions.",
            code:
                [['let ', 'db'], ['exampleJSX ', 'lb'], ['= (', 'w'], ['<', 'g'], ['div', 'db'], ['>', 'g'],
                ['br'],
                ['tab'], ['<', 'g'], ['p', 'db'], ['>', 'g'], ['Sample JSX', 'w'], ['</', 'g'], ['p', 'db'], ['>', 'g'],
                ['br'],
                ['</', 'g'], ['div', 'db'], ['>', 'g'], [');', 'w']]
        },

        {
            headerText: "Rendering Your JSX",
            bodyText: "To render your JSX you use the previously imported ReactDOM's render method. The React DOM actually does not change the DOM, it changes the virtual DOM, and then only updates the parts of the DOM that have been changed.",
            code:
                [['import ', 'p'], ['React ', 'lb'], ['from ', 'p'], ["'react'", 'o'], [";", "w"],
                ['br'],
                ['br'],
                ['ReactDOM', 'lb'], ['.', 'w'], ['render', 'y'], ['(', 'w'],
                ['br'],
                ['tab'], ['<', 'g'], ['div', 'db'], ['>', 'g'],
                ['br'],
                ['tab'], ['tab'], ['<', 'g'], ['p', 'db'], ['>', 'g'], ['Sample JSX', 'w'], ['</', 'g'], ['p', 'db'], ['>', 'g'],
                ['br'],
                ['tab'], ['</', 'g'], ['div', 'db'], ['>', 'g'], [',', 'w'],
                ['br'],
                ['tab'], ['document', 'lb'], ['.', 'w'], ['getElementById', 'y'], ['(', 'w'], ["'root'", 'o'], [')', 'w'],
                ['br'],
                [');', 'w']]
        },

        {
            headerText: "Creating Components",
            bodyText: "Rendering only JSX can be time consuming and creates lengthy code if you need to create several groups of elements like these informative text boxes they will clutter up the HTML. In React there are two main ways for creating components. Developers can use classes or functions, since functions are simpler they are more widely used when creating components. Function components are primarily used to display data where class components are used to create the behind the scenes logic. The text box render is a functional component, while the clock below is a class component. Components can be called in JSX by there name. Components in React should be capitalized, and must contain the closing '/>'",
            code:
                [['import ', 'p'], ['React ', 'lb'], ['from ', 'p'], ["'react'", 'o'], [";", "w"],
                ['br'],
                ['import ', 'p'], ['ReactDOM ', 'lb'], ['from ', 'p'], ["'react-dom'", 'o'], [";", "w"],
                ['br'],
                ['br'],
                ['function ', 'db'], ['ExampleComponent', 'y'], ['() {', 'w'],
                ['br'],
                ['tab'], ['return ', 'p'], ['(', 'w'],
                ['br'],
                ['tab'], ['tab'], ['<', 'g'], ['div', 'db'], ['>', 'g'],
                ['br'],
                ['tab'], ['tab'], ['tab'], ['<', 'g'], ['p', 'db'], ['>', 'g'], ['Sample JSX', 'w'], ['</', 'g'], ['p', 'db'], ['>', 'g'],
                ['br'],
                ['tab'], ['tab'], ['</', 'g'], ['div', 'db'], ['>', 'g'],
                ['br'],
                ['br'],
                ['}', 'w'],
                ['br'],
                ['br'],
                ['ReactDOM', 'lb'], ['.', 'w'], ['render', 'y'], ['(', 'w'],
                ['br'],
                ['tab'], ['<', 'g'], ['ExampleComponent', 'gn'], ['/>', 'g'], [',', 'w'],
                ['br'],
                ['tab'], ['document', 'lb'], ['.', 'w'], ['getElementById', 'y'], ['(', 'w'], ["'root'", 'o'], [')', 'w'],
                ['br'],
                [');', 'w']]
        },

        {
            headerText: "Giving Components Properties",
            bodyText: "Sometimes you want your components to be able to display specified input, like for instance these text boxes that display different headings, body text, and code. To accomplish this we pass our component a props object, and from within that component we access whatever prop(property) we want. Then we can inject the variable into our JSX by enclosing it in curly brackets which runds the code within them. We then pass the prop when rendering the component by using it like an HTML attribute.",
            code:
                [['import ', 'p'], ['React ', 'lb'], ['from ', 'p'], ["'react'", 'o'], [";", "w"],
                ['br'],
                ['import ', 'p'], ['ReactDOM ', 'lb'], ['from ', 'p'], ["'react-dom'", 'o'], [";", "w"],
                ['br'],
                ['br'],
                ['function ', 'db'], ['ExampleComponent', 'y'], ['(', 'w'], ['props', 'lb'], [') {', 'w'],
                ['br'],
                ['tab'], ['return ', 'p'], ['(', 'w'],
                ['br'],
                ['tab'], ['tab'], ['<', 'g'], ['div', 'db'], ['>', 'g'],
                ['br'],
                ['tab'], ['tab'], ['tab'], ['<', 'g'], ['p', 'db'], ['>', 'g'], ['{', 'db'], ['props', 'lb'], ['.', 'w'], ['name', 'lb'], ['}', 'db'], ['</', 'g'], ['p', 'db'], ['>', 'g'],
                ['br'],
                ['tab'], ['tab'], ['</', 'g'], ['div', 'db'], ['>', 'g'],
                ['br'],
                ['tab'], [');', 'w'],
                ['br'],
                ['}', 'w'],
                ['br'],
                ['br'],
                ['ReactDOM', 'lb'], ['.', 'w'], ['render', 'y'], ['(', 'w'],
                ['br'],
                ['tab'], ['<', 'g'], ['ExampleComponent ', 'gn'], ['name', 'lb'], ['=', 'w'], ["'Nazar'", 'o'], ['/>', 'g'], [',', 'w'],
                ['br'],
                ['tab'], ['document', 'lb'], ['.', 'w'], ['getElementById', 'y'], ['(', 'w'], ["'root'", 'o'], [')', 'w'],
                ['br'],
                [');', 'w']]
        }
    ],
    dynamicReactText: "React isn't primarily used with static webpages, although it can be a tremendous help making static sites, React is an even larger help with dynamic websites. An example of react being used in a dynamic matter is the following clock, which uses States that dynamically update the clock along wth lifecycle methods, and built in protection against the clock causing a memory leak."
};

export default websiteContent;