import mongoose, {Document, Schema} from 'mongoose';

import {IArcana} from './IArcana';
import {IType} from './IType';
import {ISkill} from './ISkill';
import {IStat} from './IStat';

export interface IPersona extends Document{
 name: string;
 arcana: IArcana;
 inherit: IType[];
 reflects: IType[];
 absorbs: IType[];
 block: IType[],
 resists: IType[],
 weak: IType[],
 skills: ISkill[],
 stats: IStat,
 _createdAt: number,
 _updatedAt: number,
}

export const personaSchema = new Schema({
 name: String,
 arcana:   { type: Schema.Types.ObjectId, ref: 'Arcana'},
 inherit:  { type: Schema.Types.ObjectId, ref: 'Type' },
 reflects: { type: Schema.Types.ObjectId, ref: 'Type' },
 absorbs:  { type: Schema.Types.ObjectId, ref: 'Type' },
 block:    { type: Schema.Types.ObjectId, ref: 'Type' },
 resists:  { type: Schema.Types.ObjectId, ref: 'Type' },
 weak:     { type: Schema.Types.ObjectId, ref: 'Type' },
 skills:   { type: Schema.Types.ObjectId, ref: 'Skill'},
 stats:    { type: Schema.Types.ObjectId, ref: 'Stat' },
 _createdAt: Number,
 _updatedAt: { type: Number, default: null },
});

personaSchema.pre('save', function(next){
 const persona: IPersona = this as IPersona;
 persona._createdAt = new Date().getDate();

 next();
});

export const Persona = mongoose.model<IPersona>('Persona', personaSchema);
