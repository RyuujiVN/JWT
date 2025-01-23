import { StatusCodes } from 'http-status-codes';
import { JwtProvider } from '../../../provider/JwtProvider.js';
import ms from 'ms';

const MOCK_DATABASE = {
    USER: {
        ID: 'trungquandev-sample-id-12345678',
        EMAIL: 'nguyenbaolong1405@gmail.com',
        PASSWORD: 'Dragon14052004'
    }
}

const ACCESS_TOKEN_SECRET_SIGNATURE = 'KBgJwUETt4HeVD05WaXXI9V3JnwCVP'
const REFRESH_TOKEN_SECRET_SIGNATURE = 'fcCjhnpeopVn2Hg1jG75MUi62051yL'

const login = async (req, res) => {
    try {
        if (MOCK_DATABASE.USER.EMAIL !== req.body.email || MOCK_DATABASE.USER.PASSWORD !== req.body.password) {
            res.status(StatusCodes.FORBIDDEN).json({ message: "Your email or password is incorrect!" });
            return;
        }

        // Tạo payload
        const userInfo = {
            id: MOCK_DATABASE.USER.ID,
            email: MOCK_DATABASE.USER.EMAIL
        }

        // Tạo accessToken và refreshToken để trả về phía Fe
        const accessToken = await JwtProvider.generateToken(userInfo, ACCESS_TOKEN_SECRET_SIGNATURE, '1h');
        const refreshToken = await JwtProvider.generateToken(userInfo, REFRESH_TOKEN_SECRET_SIGNATURE, '14 days');

        // Trả về http only cookie bên trình duyệt
        // res.cookie('accessToken', accessToken, {
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'none',
        //     maxAge: 60 * 60 * 1000
        // });

        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'none',
        //     maxAge: 60 * 60 * 1000
        // });

        res.cookie('accessToken', accessToken);

        res.cookie('refreshToken', refreshToken);

        res.status(StatusCodes.OK).json({ message: "Login successful!" });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }

}

const register = (req, res) => {
    res.send("Login");
}

const adminController = {
    login,
    register
}

export default adminController