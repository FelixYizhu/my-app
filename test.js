import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date : new Date()};
    }
    render(){
        return(
            <div>
            <h1 className="time">Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleDateString()}.</h2>
            </div>
            );
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);