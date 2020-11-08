import * as React from "react";
import * as ReactDOM from 'react-dom';
import Routes from "./route/index";
import './index.less';

class App extends React.Component<any, any>{
    render() {
        return (<Routes />)
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

