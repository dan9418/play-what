import { useEffect, useState } from "react";
import { PresetType } from "../../../../core/Core.constants";
import { POD_LIST_PRESETS } from "../../../../core/Core.derived";
import { NOTE_PRESETS } from "../../../../core/Note.constants";
import { getModelRoute } from "../../../../core/Routing.utils";

const useRandomModel = () => {
  const [modelPath, setModelPath] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      const root =
        NOTE_PRESETS[Math.floor(Math.random() * NOTE_PRESETS.length)];
      const structure =
        POD_LIST_PRESETS[Math.floor(Math.random() * POD_LIST_PRESETS.length)];
      //const text = `${root.name} ${structure.name}`;
      const route = getModelRoute(
        PresetType.Chord, // TODO
        structure.presetId,
        root.presetId
      );

      setModelPath(route);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return modelPath;
};

export default useRandomModel;
