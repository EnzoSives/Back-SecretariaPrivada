import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { Role } from "src/common/enum/rol.enum";

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    create(createUserDto: CreateUserDto){
        return this.userRepository.save(createUserDto);
    }
    findAll(){
        return this.userRepository.find();
    }

    findOneByEmail(email: string ){
        return this.userRepository.findOneBy({email});
    }

    findByEmailWithPassword(email: string){
        return this.userRepository.findOne({
            where: {email},
            select:['id', 'username', 'email', 'password', 'role'],
        })
    }
}