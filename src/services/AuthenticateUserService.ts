import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UsersRepositories);
        const user = await userRepository.findOne({ email });

        if (!user) {
            throw new Error("Email/Password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect!");
        }

        const token = sign({
            email: user.email
        }, "9bbe2d4423a31ba73be864b45b80a367", {
            subject: user.id,
            expiresIn: "1h"
        });

        return token;
    }
}

export { AuthenticateUserService };
