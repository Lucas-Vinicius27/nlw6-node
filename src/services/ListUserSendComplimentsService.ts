import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentsRepositories);
        const compliments = await complimentRepository.find({
            where: { userSender: user_id },
            relations: ["userSender", "userReceiver", "tag"]
        });

        return compliments;
    }
}

export { ListUserSendComplimentsService };
