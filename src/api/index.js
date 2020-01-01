import ajax from './ajax'

const BASE_URL = '/api'

export const reqGoodsClass = () => ajax('/class00')
export const reqGoodsClass01 = () => ajax('/class01')

/** 由于需要直接和前台交互，因此这三个异步请求应该写在 login 组件里 */
// 发送短信验证码请求
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', { phone })
// 短信验证码登录请求
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', { phone, code }, 'POST')
// 用户名密码登录请求
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'POST')

// 登出请求
export const reqLogout = () => ajax(BASE_URL + '/logout')
// 通过 session 获取用户登录信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

// 请求推荐商品数据
export const reqRecommendGoods = () => ajax('/recommends')
