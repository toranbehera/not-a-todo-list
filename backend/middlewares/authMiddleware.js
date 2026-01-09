import { verifyToken } from "../services/jwtService.js";

export default (req, res, next) => {
    // get authorization header
    const authHeader = req.headers["authorization"];
    if(!authHeader){
        return res.status(401).json({message: "Malformed token"});
    }

    // extract token from format 'Bearer <token>'
    const token = authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Malformed token"});
    }

    // verify token using jwtService
    try{
        const decoded = verifyToken(token);
        
        // attach decoded user info to request object
        req.user = decoded;

        // proceed to the next middleware or route handler
        next();
    } catch(err){
        res.status(401).json({message: "Invalid or expired token"});
    }
}
