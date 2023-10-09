import { Ref, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { User } from "./user.model";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Task {
  @prop({ required: true })
  title!: string;

  @prop()
  description!: string;

  @prop()
  dueDate!: string;

  @prop()
  tags!: string[]

  @prop({ default: false })
  completed?: boolean;

  @prop({ ref: () => User })
  userId!: Ref<User>;
}

const taskModel = getModelForClass(Task);
export default taskModel;
