import { ModelId, ModelType, NoteId } from "../models/Model.constants";

export const getModelRoute = (
  modelType: ModelType,
  modelId?: ModelId,
  rootId?: NoteId
) => {
  const modelSuffix = modelId ? `/${modelId}` : "";
  const rootSuffix = rootId ? `/root/${rootId}` : "";

  return `/browse/${modelType}${modelSuffix}${rootSuffix}/`;
};
