import ArrayUtils from "../../core/general/Array.utils";

export enum TuningId {
    Standard = 'standard',
    StandardBass = 'standard-bass',
    DropD = 'drop-d'
}

export interface ITuning {
    id: TuningId;
    name: string;
    value: number[]
}

const formatPreset = (id: TuningId, name: string, value: number[]): ITuning => ({
    id,
    name,
    value
});

export const FRETBOARD_TUNING_MAP = new Map<TuningId, ITuning>([
    [TuningId.Standard, formatPreset(
        TuningId.Standard,
        'Standard',
        [16, 11, 7, 2, -3, -8] // e B G D A E
    )],
    [TuningId.StandardBass, formatPreset(
        TuningId.StandardBass,
        'Standard Bass',
        [7, 2, -3, -8] // G D A E
    )],
    [TuningId.DropD, formatPreset(
        TuningId.DropD,
        'Drop D',
        [16, 11, 7, 2, -3, -10] // e B G D A D
    )]
]);

export const FRETBOARD_TUNING_VALUES = ArrayUtils.mapToArray(FRETBOARD_TUNING_MAP);
