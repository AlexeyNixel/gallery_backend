import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Roles } from './roles.schema';
import { Model } from 'mongoose';
import { CreateRolesDto } from './dto/create-roles.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles.name) private rolesModel: Model<Roles>) {}

  async createRoles(dto: CreateRolesDto): Promise<Roles> {
    const newRole = await new this.rolesModel(dto);
    return newRole.save();
  }

  async getRoleByValue(value: string): Promise<Roles> {
    const role = await this.rolesModel.findOne({ value: value });
    return role;
  }
}
