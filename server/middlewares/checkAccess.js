import { verifyToken } from "../utils/functions.js";
import User from "../models/User.js";


export default async function (req, res, next) {
    try {
        const token = req.cookies["token"];
        if (token) {
            const payload = verifyToken(token);
            const user = await User.findOne({
                _id: payload.id,
                email: payload.email,
            })

            if (!user) {
                return res.status(400).json({
                    message: "Invalid token"
                })
            }

            req.currentUser = user;
            next();
            return;
        }
        res.status(400).json({
            message: "Access Denied."
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error.",
            details: error.message
        })
    }
}