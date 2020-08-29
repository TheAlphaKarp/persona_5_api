import mongoose, { Schema, Document } from 'mongoose';

export interface IType extends Document {
 name: string;
 _createdAt: number,
 _updatedAt: number,
}

const typeSchema = new Schema({
 name: String,
 _createdAt: Number,
 _updatedAt: { type: Number, default: null },
});

typeSchema.pre('save', function(next) {
 const type = this as IType;
 type._createdAt = new Date().getDate();

 next();
});

export const Type = mongoose.model<IType>('Type', typeSchema);
