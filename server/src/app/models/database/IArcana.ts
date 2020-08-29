import mongoose, { Schema, Document } from 'mongoose';

// here we extend the default mongodb document to enable the use of generics.
export interface IArcana extends Document {
 name: string;
 _createdAt: number,
 _updatedAt: number,
}

const arcanaSchema: Schema = new mongoose.Schema({
 name: String,
 _createdAt: Number,
 _updatedAt: { type: Number, default: null },
});

arcanaSchema.pre('save', function(next){
 const arcana: IArcana= this as IArcana;
 arcana._createdAt = new Date().getDate();

 next();
});

export const Arcana = mongoose.model<IArcana>('Arcana', arcanaSchema);