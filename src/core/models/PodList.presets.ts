import { IPreset, Tag } from "./Model.constants";
import { IPod } from "./Pod.presets";

export interface IPodListPreset<D extends string> extends IPreset<D, IPod[]> {
  tags: Tag[];
  aliases: string[];
  valueIds: string[];
}

export const formatPodListPreset = <D extends string>(
  presetId: D,
  name: string,
  valueIds: string[],
  value: IPod[],
  tags = [] as Tag[],
  aliases = [] as string[]
): IPodListPreset<D> => {
  return {
    presetId,
    name,
    valueIds,
    value,
    aliases,
    tags,
  };
};
