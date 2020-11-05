import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Routes from "./route";

class App extends Component{
    render() {
        return (<Routes />)
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

