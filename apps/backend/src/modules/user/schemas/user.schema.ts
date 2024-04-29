import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class User extends Document {
  @Prop({ required: true, trim: true })
  name: string;
}

export const userSchema = SchemaFactory.createForClass(User);
