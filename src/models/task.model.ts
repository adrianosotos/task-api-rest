import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Task {
  @prop({ required: true, select: false })
  title!: string;

  @prop()
  description!: string;

  @prop()
  dueDate!: string;

  @prop()
  tags!: string[]

  @prop({ default: false })
  completed?: boolean;
}

const taskModel = getModelForClass(Task);
export default taskModel;
