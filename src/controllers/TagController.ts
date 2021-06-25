import { Request, Response } from "express";
import {TagService} from '../services/TagService';

class TagController{
    async handle(req: Request, res: Response){
        const {name} = req.body;
        const tagservice = new TagService();
        const tag = await tagservice.execute({name});
        return res.json(tag);
    }

    async handleListTags(req: Request, res: Response){
        const tagservice = new TagService();
        const tag = await tagservice.listTags();
        return res.json(tag);
    }
}

export {TagController};