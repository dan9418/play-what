import { useQueryParam } from "use-query-params";
import { PresetType } from "../../../../core/Core.constants";
import { PresetId } from "../../../../core/Core.derived";
import { NoteId } from "../../../../core/Note.constants";

const useModelQueryParams = () => {
  let qpPresetType;
  let qpPresetId;
  let qpRootId;
  try {
    [qpPresetType] = useQueryParam("presetType");
    [qpPresetId] = useQueryParam("presetId");
    [qpRootId] = useQueryParam("rootId");
  } catch (e) {
    console.error(e);
  }

  return [
    qpPresetType as PresetType,
    qpPresetId as PresetId,
    qpRootId as NoteId,
  ];
};

export default useModelQueryParams;
