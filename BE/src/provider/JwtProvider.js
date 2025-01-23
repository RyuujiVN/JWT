import JWT from 'jsonwebtoken'

const generateToken = async (userInfo, secretSignature, tokenLife) => {
    try {
        return JWT.sign(userInfo, secretSignature, { algorithm: 'HS256', expiresIn: tokenLife });
    } catch (error) {
        throw new Error(error)
    }
}

const verifyToken = async (userInfo, secretSignature) => {
    try {
        return JWT.verify(userInfo, secretSignature);
    } catch (error) {
        throw new Error(error)
    }
}

export const JwtProvider = {
    generateToken,
    verifyToken
}