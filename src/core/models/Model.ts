import { ModelId, ModelType, Tag } from "./Model.constants";

export default class Model {
  modelType: ModelType;
  modelId: ModelId;
  name: string;
  tags: Tag[];
  aliases: string[];

  getPreview() {
    return this.name || "unnamed";
  }
}
