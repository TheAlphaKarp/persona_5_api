import mongoose, { Schema, Document } from 'mongoose';

export interface IType extends Document {
 name: string;
}

const typeSchema = new Schema({
 name: String,
});

export const Type = mongoose.model<IType>('Type', typeSchema);
