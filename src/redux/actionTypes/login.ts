// 设置用户信息
export const SET_USER_INFO = 'SET_USER_INFO';
// 获取用户信息
export const GET_USER_INFO = 'GET_USER_INFO';

export interface UserInfo {
    user_name: string,
    password: string
}

export const setUserInfoAction = (data: UserInfo) => {
    return {
        type: 'SET_USER_INFO',
        data
    }
}

