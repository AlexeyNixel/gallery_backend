import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './users.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<Users>,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<Users> {
    const newUser = await new this.userModel(dto);
    const role = await this.roleService.getRoleByValue('user');
    newUser.roles = [role];
    await newUser.set('roles', role);
    return newUser.save();
  }

  async findAll(): Promise<Users[]> {
    const users = await this.userModel.find().populate('roles');
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userModel
      .findOne({ email: email })
      .populate('roles');
    return user;
  }
}
