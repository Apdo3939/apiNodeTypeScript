import { UserRepository } from "../repositories/UserRepository";
import { getCustomRepository } from "typeorm";
import { hash } from 'bcryptjs';
import{classToPlain} from "class-transformer";

interface UserRequest {
    name: string;
    email: string;
    password: string;
    admin: boolean;
}

class UserService {

    //create
    async execute({ name, email, password, admin = false }: UserRequest) {
        const usersRepository = getCustomRepository(UserRepository);

        console.log("Email: ", email);

        if (!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await usersRepository.findOne({ email, });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: passwordHash,
            admin
        });

        await usersRepository.save(user);

        console.log(user);

        return user;

    }

    //research
    async listUsers(){
        const usersRepository = getCustomRepository(UserRepository);
        const users = await usersRepository.find();
        return classToPlain(users);
    }
    //update
    //delete
}

export { UserService };