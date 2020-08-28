import mongoose, { Schema, Document } from 'mongoose';

import { IArcana } from './IArcana';
import { IType } from './IType';
import { ISkill } from './ISkill';
import { IStat } from './IStat';

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
});

export const Persona = mongoose.model<IPersona>('Persona', personaSchema);
