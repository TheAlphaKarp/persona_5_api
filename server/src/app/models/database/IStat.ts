import mongoose, { Schema, Document } from 'mongoose';

export interface IStat extends Document {
 strength: number,
 magic: number,
 endurance: number,
 agility: number,
 luck: number,
}

export const statSchema = new Schema({
 strength: Number,
 magic: Number,
 endurance: Number,
 agility: Number,
 luck: Number,
});

export const Stat = mongoose.model<IStat>('Stat', statSchema);