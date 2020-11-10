import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import Routes from "./route/index";
import './index.less';

class App extends React.Component<any, any>{
    render() {
        return (<Routes />)
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")
);

