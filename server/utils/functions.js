import jwt from "jsonwebtoken"

/**
 * 
 * @param {any} payload 
 * @returns {string}
 */
export const encode = (payload) => {
    const token = jwt.sign(payload, process.env.SECRET)
    return token;
}


/**
 * 
 * @param {string} token 
 * @returns {any}
 */
export const verifyToken = (token) => {
    const payload = jwt.verify(token, process.env.SECRET);
    return payload;
}