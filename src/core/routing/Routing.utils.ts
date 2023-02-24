import { PresetType } from "../models/Model.constants";
import { NoteId } from "../models/Note.presets";

export const getModelRoute = (
  presetType: PresetType,
  presetId?: string,
  rootId?: NoteId
) => {
  const modelSuffix = presetId ? `/${presetId}` : "";
  const rootSuffix = rootId ? `/root/${rootId}` : "";

  return `/browse/${presetType}${modelSuffix}${rootSuffix}/`;
};
