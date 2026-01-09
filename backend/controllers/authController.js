import User from "../models/User.js";
import { hashPassword, comparePassword } from "../services/hashService.js";
import { generateToken } from "../services/jwtService.js";

async function register(req, res){
    try{
        const {name, email, password} = req.body;

        const existinguser = await User.findOne({email});
        if(existinguser){
            return res.status(400).json({message: "User already exists!"});
        }

        const hashedPassword = await hashPassword(password);

        const user = new User({name, email, password: hashedPassword});
        await user.save();

        res.status(201).json({message: "User registered successfully!"});
    } catch(err){
        res.status(500).json({error: err.message});
    }
};

async function login(req, res){
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid email or password"});
        }

        const isMatch = await comparePassword(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid email or password"});
        }

        const token = generateToken({id: user._id, email: user.email});
        res.json({message: "Login successful!", token});
    } catch(err){
        res.status(500).json({error: err.message});
    }
};

function profile(req, res){
    res.json({
        message: "Welcome to your profile!",
        user: req.user
    });
};

export default {register, login, profile};
