import { WHITELIST_DOMAINS } from "../utils/constants.js";

export const corsOption = {
    origin: function (origin, callback) {
        if (WHITELIST_DOMAINS.includes(origin))
            return callback(null, true)
        return callback(new Error('Not allowed by CORS'))
    },
    optionsSuccessStatus: 200,

    // Cho phép nhận cookie từ request
    credentials: true
}