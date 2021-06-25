import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
    async handle(req: Request, res: Response) {
        const { users_id } = req;
        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();
        const compliments = await listUserReceiveComplimentsService.execute(users_id);

        return res.json(compliments);
    }
}

export { ListUserReceiveComplimentsController };
