import { Response, Request, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const { users_id } = req;
    const userRepository = getCustomRepository(UsersRepositories);
    const { admin } = await userRepository.findOne(users_id);

    if (admin) {
        return next();
    }

    return res.status(401).json({ message: "Unauthorized!" });
}
