import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Roles } from '../roles/roles.schema';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ default: false })
  banned: boolean;

  @Prop()
  banReason: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Roles.name }])
  roles: Roles[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
