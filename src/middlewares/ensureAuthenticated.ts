import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPlayload {
    sub: string
}

export function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).end();
    }

    const parts = authorization.split(" ");

    if (!(parts.length === 2)) {
        return res.status(401).json({ message: "Token invalid!" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ message: "Token malformed!" });
    }
    
    try {
        const { sub } = verify(token, "9bbe2d4423a31ba73be864b45b80a367") as IPlayload;

        req.users_id = sub;

        return next();
    } catch (error) {
        return res.status(401).end();
    }
}
