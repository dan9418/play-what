import { PresetType } from "./Core.constants";
import { PresetId } from "./Core.derived";
import { NoteId } from "./Note.constants";

export const getModelRoute = (
  presetType: PresetType,
  presetId?: PresetId,
  rootId?: NoteId
) => {
  const modelSuffix = presetId ? `/${presetId}` : "";
  const rootSuffix = rootId ? `/root/${rootId}` : "";

  return `/browse/${presetType}${modelSuffix}${rootSuffix}/`;
};
