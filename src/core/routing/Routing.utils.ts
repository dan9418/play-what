import { PresetId, NoteId, PresetType } from "../models/Model.constants";

export const getModelRoute = (
  presetType: PresetType,
  presetId?: PresetId,
  rootId?: NoteId
) => {
  const modelSuffix = presetId ? `/${presetId}` : "";
  const rootSuffix = rootId ? `/root/${rootId}` : "";

  return `/browse/${presetType}${modelSuffix}${rootSuffix}/`;
};
