import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListUsersService {
    async execute() {
        const userRepository = getCustomRepository(UsersRepositories);
        const users = await userRepository.find();

        return classToPlain(users);
    }
}

export { ListUsersService };