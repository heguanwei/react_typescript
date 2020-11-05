import React from "react";
import {HashRouter, Route, Switch}  from "react-router-dom";
import Login from "../pages/Login/Login";

const Routes = () => {
    return <HashRouter>
        {/*<Route path="/main" component={Main}/>*/}
        <Switch>
            <Route exact path="/login"  component={Login} />
        </Switch>
    </HashRouter>
}
export default Routes;
