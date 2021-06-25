import { getCustomRepository } from "typeorm";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UserRepository } from "../repositories/UserRepository";

interface AuthenticatedRequest {
    email: string;
    password: string;
}

class AuthenticatedUserService {
    async execute({ email, password }: AuthenticatedRequest) {
        const usersRepository = getCustomRepository(UserRepository);

        const user = await usersRepository.findOne({ email, });

        if (!user) {
            throw new Error("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or password incorrect");
        }

        const token = sign({
            email: user.email
        },
            '123456789',
            {
                subject: user.id,
                expiresIn: '1d'
            }
        );

        return token;
    }
}

export { AuthenticatedUserService }