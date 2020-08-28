import mongoose, { Schema, Document } from 'mongoose';

// here we extend the default mongodb document to enable the use of generics.
export interface IArcana extends Document {
 name: string;
}

const arcanaSchema: Schema = new mongoose.Schema({
 name: String,
});

export const Arcana = mongoose.model<IArcana>('Arcana', arcanaSchema);