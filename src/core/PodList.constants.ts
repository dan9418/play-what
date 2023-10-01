import { IPreset, Tag } from "./Core.constants";
import { IPod } from "./Pod.constants";

export interface IPodListPreset<D extends string> extends IPreset<D> {
  tags: Tag[];
  aliases: string[];
  pods: IPod[];
  valueIds: string[];
}

export const formatPodListPreset = <D extends string>(
  presetId: D,
  name: string,
  valueIds: string[],
  pods: IPod[],
  tags = [] as Tag[],
  aliases = [] as string[]
): IPodListPreset<D> => {
  return {
    presetId,
    name,
    valueIds,
    pods,
    aliases,
    tags,
  };
};
