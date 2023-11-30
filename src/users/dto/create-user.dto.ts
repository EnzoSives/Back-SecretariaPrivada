import { Role } from "src/common/enum/rol.enum";

export class CreateUserDto{
    username: string;
    password: string;
    email: string;
    role:Role;
}