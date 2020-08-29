import mongoose, { Schema, Document } from 'mongoose';

export interface IStat extends Document {
 strength: number,
 magic: number,
 endurance: number,
 agility: number,
 luck: number,
 _createdAt: number,
 _updatedAt: number,
}

export const statSchema = new Schema({
 strength: Number,
 magic: Number,
 endurance: Number,
 agility: Number,
 luck: Number,
 _createdAt: Number,
 _updatedAt: { type: Number, default: null },
});

statSchema.pre('save', function(next) {
 const stat = this as IStat;
 stat._createdAt = new Date().getDate();

 next();
});

export const Stat = mongoose.model<IStat>('Stat', statSchema);