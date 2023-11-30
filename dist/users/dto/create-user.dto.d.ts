import { Role } from "src/common/enum/rol.enum";
export declare class CreateUserDto {
    username: string;
    password: string;
    email: string;
    role: Role;
}
