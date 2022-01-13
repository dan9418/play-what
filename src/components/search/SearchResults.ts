import { ModelId, ScaleTag } from "../../core/models/Model.constants";
import { ALL_PRESETS, NOTE_PRESETS } from "../../core/models/Model.presets";

interface IResult {
    text: string;
    to: string;
    tags: string[];
    isCommon?: boolean;
}

const getName = (modelType: ModelId, name: string, root?: string): string => {
    switch (modelType) {
        case ModelId.Chord:
            return `${root ? root : ''} ${name} Chord`
        case ModelId.Scale:
            return `${root ? root : ''} ${name} Scale`
        default:
            return `${root ? root : ''} ${name}`;
    }
}

const getLink = (modelType: ModelId, id: string, root?: string): string => {
    return `/browse/${modelType}/${id}${root ? `/root/${root}` : ''}`;
}

export const ALL_RESULTS: IResult[] = [];
ALL_PRESETS.forEach(p => {
    ALL_RESULTS.push({
        text: getName(p.modelId, p.name),
        to: getLink(p.modelId, p.id),
        tags: p.tags,
        isCommon: !p.tags.includes(ScaleTag.Exotic)
    });
    NOTE_PRESETS.forEach(n => {
        ALL_RESULTS.push({
            text: getName(p.modelId, p.name, n.name),
            to: getLink(p.modelId, p.id, n.id),
            tags: p.tags
        });
    })
});
