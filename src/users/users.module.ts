import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './users.schema';
import { RolesModule } from '../roles/roles.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    RolesModule,
  ],
  exports: [UsersModule],
})
export class UsersModule {}
