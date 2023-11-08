import{MinLength, MaxLength, IsString} from 'class-validator';

export class loginDto{
    username: string;
    @MinLength(6)
    @MaxLength(15)
    @IsString()
    password: string;
}