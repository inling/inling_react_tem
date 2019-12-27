exports.encrypt = (publicKey, data) => {
    let key = new nodeRsa(publicKey);
    return key.encrypt(data, 'base64', 'utf8')
}

/**v1.0.0 */
