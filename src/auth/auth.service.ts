import { UsersService } from "src/users/users.service";
import { registerDto } from "./dto/register.dto";
import { loginDto } from "./dto/login.dto";
import { Injectable, BadRequestException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService{
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
    ){}

    async register({username, password, email}: registerDto){
        const user = await this.usersService.findOneByEmail(email);
        if(user){
            throw new BadRequestException ('El usuario ya existe');
        }

        return await this.usersService.create({
            username,email,password: await bcrypt.hash(password, 10),
        });
    }

    async login ({ email, password}: loginDto){
        const user = await this.usersService.findByEmailWithPassword(email);
        if(!user){
            throw new UnauthorizedException('email erroneo');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid){
            throw new UnauthorizedException('password incorrecto');
        }
        const payload = {email: user.email, role: user.role};
        const access_token = await this.jwtService.signAsync(payload);

        return{
            access_token,
            email
        };
    }
}