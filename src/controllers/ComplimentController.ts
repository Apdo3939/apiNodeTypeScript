import { Request, Response } from "express";
import {ComplimentService} from '../services/ComplimentService';

class ComplimentController{
    async handle(req: Request, res: Response){
        const {user_receiver, tag_id, message} = req.body;
        const {user_id} = req;

        const complimentService = new ComplimentService();
        const compliment = await complimentService.execute({
            user_sender : user_id, 
            user_receiver, 
            tag_id, 
            message
        });
        
        return res.json(compliment);
    }

    async handleListSender(req: Request, res: Response){
        const {user_id} = req;

        const complimentService = new ComplimentService();
        const compliment = await complimentService.listComplimentsUserSender(user_id);
        
        return res.json(compliment);

    }

    async handleListReceiver(req: Request, res: Response){
        const {user_id} = req.body;

        const complimentService = new ComplimentService();
        const compliment = await complimentService.listComplimentsUserReceiver(user_id);
        
        return res.json(compliment);

    }
}

export {ComplimentController};