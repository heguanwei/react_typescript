import React, {Component} from 'react';

class Login extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            user_name: "",
            password: ""
        }
    }

    render(){
        return (<div className={'Login'}>

        </div>)
    }
}

export default Login;
