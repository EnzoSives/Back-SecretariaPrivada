import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { DatosModule } from './datos/datos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bjeea2lcgcdmneaujsib-mysql.services.clever-cloud.com',  // SECRETARIA DB
      // host: 'bct3k8v4ehk7fh77hma9-mysql.services.clever-cloud.com', // PRUEBA DB
      port: 3306,
      username: 'uxejyhsch46jhsem',// SECRETARIA DB
      // username: 'ualk8hbjhiacgall',// PRUEBA DB
      password: '2maesP71TZv3rr2KcJrc',// SECRETARIA DB
      // password: '7K2Hpj3YyVI0VaHoUKCm',// PRUEBA DB
      database: 'bjeea2lcgcdmneaujsib',// SECRETARIA DB
      // database: 'bct3k8v4ehk7fh77hma9',// PRUEBA DB
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DatosModule,
    AuthModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
