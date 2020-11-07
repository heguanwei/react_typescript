import React from 'react';
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import style from './index.less';

class Login extends React.Component<any, any>{
    constructor(props: object) {
        super(props);
        this.state = {
            user_name: "",
            password: ""
        }
    }

    onFinish = (values: string) => {
        console.log('Received values of form: ', values);
    };

    render(){
        return (<div className={style.login}>
            <Form
                name={"normal_login"}
                className={style.login_form}
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className={style.site_form_item_icon} />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className={style.site_form_item_icon} />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className={style.login_form_forgot} href="javascript:void(0)">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={style.login_form_button}>
                        Log in
                    </Button>
                    Or <a href="javascript:void(0)">register now!</a>
                </Form.Item>
            </Form>
        </div>)
    }
}

export default Login;
