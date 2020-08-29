import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
 name: string;
 level: number;
 effect: string;
 costHP: number | null;
 costMP: number | null;
 _createdAt: number,
 _updatedAt: number,
}

export const skillSchema = new Schema({
 name: String,
 level: Number,
 effect: String,
 costHP: Number,
 costMP: Number,
 _createdAt: Number,
 _updatedAt: { type: Number, default: null },
})

skillSchema.pre('save', function(next) {
 const skill = this as ISkill;
 skill._createdAt = new Date().getDate();

 next();
});

export const Skill = mongoose.model('Skill', skillSchema);