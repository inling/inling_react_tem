let token = localStorage.getItem('token')

/**
 * 登陆
 * @param {Object} userInfo - 用户账号密码
 * @param {String} userInfo.nickname - 用户名
 * @param {String} userInfo.upwd - 密码
 * @callback callback 回调函数
 */
exports.login = (userInfo, callback) => {
    return fetch('http://127.0.0.1:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
        body: JSON.stringify(userInfo)
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 注册
 * @param {Object} userInfo - 用户账号密码
 * @param {String} userInfo.nickname - 用户名
 * @param {String} userInfo.upwd - 密码
 * @callback callback 回调函数
 */
exports.register = (userInfo, callback) => {
    return fetch('http://127.0.0.1:3001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
        body: JSON.stringify(userInfo)
    }).then(response => response.json()).then(res => {
        return callback(res)
    })
}

/**
 * 验证用户名是否被注册
 * @param {String} nickname 用户名
 * @callback callback 回调函数
 */
exports.nickname = (nickname, callback) => {
    return fetch('http://127.0.0.1:3001/nickname?nickname=' + nickname, {
        method: 'GET',
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 获取用户信息
 * @callback callback 回调函数
 */
exports.getUserInfo = (callback) => {
    return fetch('http://127.0.0.1:3001/getUserInfo', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 获取公钥
 * @param {String} nickname 昵称
 * @callback callback
 */
exports.pk = (nickname, callback) => {
    return fetch('http://127.0.0.1:3001/pk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ nickname }),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}
/**v1.0.0 */
