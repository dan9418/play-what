import { ChordId } from './../models/PodList/Chord/Chord.constants';
import { NoteId } from './../models/Pod/Note/Note.constants';
import { IModelPreset } from './../models/Model.constants';

export enum FolderNode {
    Folder,
    Item,
}

export interface IFolderNode {
    nodeType: FolderNode;
    text: string;
}

export interface IFolderItem<T> extends IFolderNode {
    nodeType: FolderNode.Item
    value: T
}

export interface IFolder extends IFolderNode {
    nodeType: FolderNode.Folder,
    items: Array<IFolderNode>
}
