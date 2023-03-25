import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolesDto } from './dto/create-roles.dto';
import { Roles } from './roles.schema';

@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  create(@Body() roleDto: CreateRolesDto): Promise<Roles> {
    return this.roleService.createRoles(roleDto);
  }

  @Get(':value')
  findOne(@Param('value') value: string): Promise<Roles> {
    return this.roleService.getRoleByValue(value);
  }
}
