import { ChordId } from './../models/PodList/Chord/Chord.constants';
import { NoteId } from './../models/Pod/Note/Note.constants';
import { IModelPreset } from './../models/Model.constants';

export enum FolderItemType {
    Folder,
    Item,
}

export interface IFolderItem {
    itemType: FolderItemType.Item
    rootId: NoteId,
    presetId: ChordId
}

export interface IFolder {
    itemType: FolderItemType.Folder,
    name: string;
    items: Array<IFolder | IFolderItem>
}
