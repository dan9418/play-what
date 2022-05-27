import { ModelId, ModelType, NoteId } from "../models/Model.constants";

export const getModelRoute = (modelType: ModelType, modelId: ModelId, rootId?: NoteId) => {

    const rootSuffix = rootId ? `/root/${rootId}` : '';

    return `/browse/${modelType}/${modelId}${rootSuffix}`;
}
