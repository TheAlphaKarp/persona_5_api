import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
 name: string;
 level: number;
 effect: string;
 costHP: number | null;
 costMP: number | null;
}

export const skillSchema = new Schema({
 name: String,
 level: Number,
 effect: String,
 costHP: Number,
 costMP: Number,
})

export const Skill = mongoose.model('Skill', skillSchema);