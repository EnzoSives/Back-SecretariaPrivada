import { Controller, HttpCode, HttpStatus, Post, Body } from
'@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {
constructor(private authService: AuthService) {}
@HttpCode(HttpStatus.OK)
@Post('login')
login(@Body() loginDto: loginDto) {
return this.authService.login(loginDto.username, loginDto.password);
}
}