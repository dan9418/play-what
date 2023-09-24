import { useQueryParam } from "use-query-params";
import { PresetType } from "../../../../core/Core.constants";
import { PresetId } from "../../../../core/Core.derived";
import { NoteId } from "../../../../core/Note.constants";

const useModelQueryParams = () => {
  const [qpPresetType] = useQueryParam("presetType");
  const [qpPresetId] = useQueryParam("presetId");
  const [qpRootId] = useQueryParam("rootId");

  return [qpPresetType as PresetType, qpPresetId as PresetId, qpRootId as NoteId];
};

export default useModelQueryParams;
