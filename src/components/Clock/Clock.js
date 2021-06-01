import React from 'react';

export class Clock extends React.Component {
    // Configure the props to work properly, and configure the original state
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // Method to start interval
    startInterval() {
        let delay;

        // Change delay based on our prop value
        if (this.props.isPrecise) {
            delay = 100;
        } else {
            delay = 1000;
        }

        // Create an interval that triggers for delay amount of ms, sets a new date state, and repeats
        this.intervalID = setInterval(() => {
            this.setState({ date: new Date() });
        }, delay);
    }

    render() {
        return (
            <div>
                {/*Conditionally render either an ISO time string if precise or a normal clock string otherwise*/}
                {this.props.isPrecise
                    ? this.state.date.toISOString()
                    : this.state.date.toLocaleTimeString()}
            </div>
        );
    }

    // If the component mounted start interval
    componentDidMount() {
        this.startInterval();
    }

    // Prevent memory leak by clearing interval if component is unmounted
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    //Every time our component updates check to see if we have toggled our precise setting, if so clear old interval and make a new interval
    componentDidUpdate(prevProps) {
        if (this.props.isPrecise === prevProps.isPrecise) {
            return;
        }
        clearInterval(this.intervalID);
        this.startInterval();
    }

}

export default Clock;