import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { loginDto } from "./dto/login.dto";
import { registerDto } from "./dto/register.dto";

@Controller('auth')
export class AuthController{
    constructor ( private readonly authService: AuthService){}

    @Post('register')
    register(@Body() registerDto: registerDto){
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(@Body() loginDto: loginDto){
        return this.authService.login(loginDto)
    }
}