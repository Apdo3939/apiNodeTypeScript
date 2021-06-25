import { TagRepository } from "../repositories/TagRepository";
import { getCustomRepository } from "typeorm";
import{classToPlain} from "class-transformer";

interface TagRequest {
    name: string;
}

class TagService {

    //create
    async execute({ name }: TagRequest) {
        const tagsRepository = getCustomRepository(TagRepository);

        if(!name){
            throw new Error('Empty name')
        }

        const tagAlreadyExists = await tagsRepository.findOne({ name, });

        if (tagAlreadyExists) {
            throw new Error('tag already exists');
        }

        const tag = tagsRepository.create({
            name,
        });

        await tagsRepository.save(tag);

        console.log(tag);

        return tag;

    }
    //research
    async listTags(){
        const tagsRepository = getCustomRepository(TagRepository);
        const tags = await tagsRepository.find();
        return classToPlain(tags);
    }
    //update
    //delete
}

export { TagService };