import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface AuthenticatedProps{
    sub : string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    
    //get token
    const authToken = req.headers.authorization;
    if(!authToken){
        return res.status(401).end();
    }

    const [, token]  = authToken.split(" ");
    
    //verify token is valid
    try {
        const decode = verify(token, "123456789") as AuthenticatedProps;
        req.user_id = decode.sub;
        return next();
    } catch (error) {
        error = res.status(401).end();
        return error;
    }

    
}