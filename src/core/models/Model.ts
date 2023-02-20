import { ModelId, ModelType, Tag } from "./Model.constants";

export default class Model {
  modelType: ModelType;
  presetId: ModelId;
  name: string;
  tags: Tag[];
  aliases: string[];

  getPreview() {
    return this.name || "unnamed";
  }
}
