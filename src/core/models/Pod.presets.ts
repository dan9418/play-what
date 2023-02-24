import { IPreset, Tag } from "./Model.constants";
import { MAX_DEGREE, ROOT_DEGREE } from "../theory/Degree.constants";
import { MAX_PITCH, ROOT_PITCH } from "../theory/Pitch.constants";

export type IPod = [number, number];

export const MAX_POD: IPod = [MAX_PITCH, MAX_DEGREE];

export const DEFAULT_POD: IPod = [ROOT_PITCH, ROOT_DEGREE];

export interface IPodPreset<D extends string> extends IPreset<D, IPod> {
  tags?: Tag[];
  aliases?: string[];
}

export const formatPodPreset = <D extends string>(
  presetId: D,
  name: string,
  value: IPod,
  tags = [] as Tag[],
  aliases = [] as string[]
): IPodPreset<D> => {
  return {
    presetId,
    name,
    value,
    aliases,
    tags,
  };
};
