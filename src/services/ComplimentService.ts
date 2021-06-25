import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";

interface ComplimentRequest {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

class ComplimentService {

    //create
    async execute({ user_sender, user_receiver, tag_id, message }: ComplimentRequest) {
        const complimentsRepository = getCustomRepository(ComplimentRepository);
        const usersRepository = getCustomRepository(UserRepository);

        if (user_sender === user_receiver) {
            throw new Error("Incorrect use receiver");
        }

        const userReceiverExists = await usersRepository.findOne(user_receiver);
        if (!userReceiverExists) {
            throw new Error("User receiver does not exists");
        }

        const compliment = complimentsRepository.create({
            user_sender,
            user_receiver,
            tag_id,
            message,
        });

        await complimentsRepository.save(compliment);

        return compliment;
    }
    //research
    async listComplimentsUserReceiver(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentRepository);
        const list = await complimentsRepository.find({
            where: {
                user_receiver : user_id
            },
            relations: ["userSender", "userReceiver", "tag"],
        })

        return list;
    }

    async listComplimentsUserSender(user_id: string) {
        const complimentsRepository = getCustomRepository(ComplimentRepository);
        const list = await complimentsRepository.find({
            where: {
                user_sender : user_id
            },
            relations: ["userSender", "userReceiver", "tag"],
        })

        return list;
    }

    //update
    //delete
}

export { ComplimentService };