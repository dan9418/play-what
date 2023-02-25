import { PresetType } from "./Core.constants";
import { NoteId } from "./Note.constants";

export const getModelRoute = (
  presetType: PresetType,
  presetId?: string,
  rootId?: NoteId
) => {
  const modelSuffix = presetId ? `/${presetId}` : "";
  const rootSuffix = rootId ? `/root/${rootId}` : "";

  return `/browse/${presetType}${modelSuffix}${rootSuffix}/`;
};
