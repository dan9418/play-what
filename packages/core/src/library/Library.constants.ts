import { ChordId } from './../models/PodList/Chord/Chord.constants';
import { NoteId } from './../models/Pod/Note/Note.constants';
import { IModelPreset } from './../models/Model.constants';

export enum NodeType {
    Folder,
    Item,
}

export interface IFolderNode {
    nodeType: NodeType;
    text: string;
}

export interface IFolderItem<T> extends IFolderNode {
    nodeType: NodeType.Item
    value: T
}

export interface IClickableFolderItem<T> extends IFolderItem<T> {
    onClick: () => void
}

export interface IFolder extends IFolderNode {
    nodeType: NodeType.Folder,
    items: Array<IFolderNode>
}
