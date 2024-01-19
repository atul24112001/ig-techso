import User from "../models/User.js";
import { encode } from "../utils/functions.js";


export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userAlreadyExist = await User.findOne({
            email: email,
        });

        if (userAlreadyExist) {
            return res.status(400).json({
                message: "Email already exist",
            })
        }

        const newUser = await User.create({
            name,
            email,
            password
        })

        const token = encode({
            id: newUser._id,
            email,
        })
        res.cookie("token", token, { httpOnly: false });
        res.status(200).json({
            message: "Sign Up successful",
        })


    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error.",
            details: error.message
        })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userAlreadyExist = await User.findOne({
            email: email,
        });

        if (!userAlreadyExist) {
            return res.status(400).json({
                message: "Email does't exist, please sign up",
            })
        }

        if (password != userAlreadyExist.password) {
            return res.status(400).json({
                message: "Invalid password please sign up",
            })
        }

        const token = encode({
            id: userAlreadyExist._id,
            email: userAlreadyExist.email,
        })
        res.cookie("token", token, { httpOnly: false });
        res.status(200).json({
            message: "Login successful",
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error.",
            details: error.message
        })
    }
}