import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Roles, RolesSchema } from './roles.schema';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    MongooseModule.forFeature([{ name: Roles.name, schema: RolesSchema }]),
  ],
  exports: [RolesService],
})
export class RolesModule {}
