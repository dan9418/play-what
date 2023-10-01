import { IPreset, Tag } from "./Core.constants";
import { MAX_DEGREE, ROOT_DEGREE } from "./Degree.constants";
import { MAX_PITCH, ROOT_PITCH } from "./Pitch.constants";

export type IPod = [number, number];

export const MAX_POD: IPod = [MAX_PITCH, MAX_DEGREE];

export const DEFAULT_POD: IPod = [ROOT_PITCH, ROOT_DEGREE];

export interface IPodPreset<D extends string> extends IPreset<D> {
  tags?: Tag[];
  aliases?: string[];
  pod: IPod;
}

export const formatPodPreset = <D extends string>(
  presetId: D,
  name: string,
  pod: IPod,
  tags = [] as Tag[],
  aliases = [] as string[]
): IPodPreset<D> => {
  return {
    presetId,
    name,
    pod,
    aliases,
    tags,
  };
};
