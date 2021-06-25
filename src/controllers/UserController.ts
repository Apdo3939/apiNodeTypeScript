import { Request, Response } from "express";
import { UserService } from "../services/UserService";

class UserController{

    //create
    async handle(resquest: Request, response: Response){
        const {name, email, password, admin} = resquest.body;
        const userService = new UserService();
        const user = await userService.execute({name, email, password, admin});
        return response.json(user);
    }

    //research
    async handleListTags(req: Request, res: Response){
        const userservice = new UserService();
        const user = await userservice.listUsers();
        return res.json(user);
    }
    
    //update
    //delete
}

export{UserController};