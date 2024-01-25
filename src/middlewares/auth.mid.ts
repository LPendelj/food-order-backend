import { HTTP_UNAUTHORIZED } from "../constants/http_status";
import { verify } from "jsonwebtoken";

export default (req: any, res: any, next: any) => {
    console.log(req.headers);
    
    const token = req.headers.access_token as string;
    console.log(token);
    
    if(!token) return res.status(HTTP_UNAUTHORIZED).send()

    try {
        
        const decodedUser = verify(token, process.env.JWT_SECRET!);
        console.log(decodedUser);
        req.user = decodedUser

    } catch (error) {
        res.status(HTTP_UNAUTHORIZED).send()
    }

    return next()
}