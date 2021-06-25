import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
    async handle(req: Request, res: Response) {
        const { users_id } = req;
        const listUserSendComplimentsService = new ListUserSendComplimentsService();
        const compliments = await listUserSendComplimentsService.execute(users_id);

        return res.json(compliments);
    }
}

export { ListUserSendComplimentsController };
