import { Role } from "src/common/enum/rol.enum";
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: Role;
    deleteAt: Date;
    constructor(username: string, password: string, email: string);
}
