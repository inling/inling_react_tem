const nodeRsa = require('node-rsa');
/**
 * 生成公钥私钥
 */
exports.createKey = () => {
    let key = new nodeRsa({ b: 512 });
    let publicKey = key.exportKey('public');
    let privateKey = key.exportKey('private');
    return { publicKey, privateKey }
}
/**
 * 公钥加密
 */
exports.encrypt = (publicKey, data) => {
    let key = new nodeRsa(publicKey);
    return key.encrypt(data, 'base64', 'utf8')
}
/**
 * 私钥解密
 */
exports.decrypt = (privateKey, data) => {
    let key = new nodeRsa(privateKey);
    return key.decrypt(data, 'utf8')
}

/**v1.0.0 */
