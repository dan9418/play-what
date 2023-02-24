const getIsList = (presetType: PresetType): boolean =>
  [PresetType.Chord, PresetType.Scale].includes(presetType);

export const logPresetJson = () => {
  console.log("pw-presets notes", JSON.stringify(NOTE_PRESETS));
  console.log("pw-presets intervals", JSON.stringify(INTERVAL_PRESETS));
  console.log("pw-presets chords", JSON.stringify(CHORD_PRESETS));
  console.log("pw-presets scales", JSON.stringify(SCALE_PRESETS));
};

export const POD_LIST_PRESETS = [...SCALE_PRESETS, ...CHORD_PRESETS];
