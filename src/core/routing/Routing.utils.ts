import { ModelId, NoteId, PresetType } from "../models/Model.constants";

export const getModelRoute = (
  presetType: PresetType,
  modelId?: ModelId,
  rootId?: NoteId
) => {
  const modelSuffix = modelId ? `/${modelId}` : "";
  const rootSuffix = rootId ? `/root/${rootId}` : "";

  return `/browse/${presetType}${modelSuffix}${rootSuffix}/`;
};
