import { useEffect, useState } from "react";
import { CHORD_PRESETS } from "../../../../core/Chord.constants";
import { PresetType } from "../../../../core/Core.constants";
import { NOTE_PRESETS } from "../../../../core/Note.constants";
import { getModelRoute } from "../../../../core/Routing.utils";
import { SCALE_PRESETS } from "../../../../core/Scale.constants";

const useRandomModel = () => {
  const [modelPath, setModelPath] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      const root =
        NOTE_PRESETS[Math.floor(Math.random() * NOTE_PRESETS.length)];
      const type = Math.random() >= .5 ? PresetType.Chord : PresetType.Scale;
      const typeData = type === PresetType.Chord ? CHORD_PRESETS : SCALE_PRESETS;
      const structure =
        typeData[Math.floor(Math.random() * typeData.length)];
      //const text = `${root.name} ${structure.name}`;
      const route = getModelRoute(
        type,
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
