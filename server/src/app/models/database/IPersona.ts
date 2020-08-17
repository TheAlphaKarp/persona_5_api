import IArcana from './IArcana';
import IType from './IType';
import ISkill from './ISkill';
import IStat from './IStat';

export default interface IPersona {
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
