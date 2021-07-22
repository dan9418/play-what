import { IModelPreset } from './../models/Model.constants';

export enum FolderItemType {
    Folder,
    Item,
}

export interface IFolderItem extends IModelPreset<any> {
    itemType: FolderItemType.Item
}

export interface IFolder {
    itemType: FolderItemType.Folder,
    name: string;
    items: Array<IFolder | IFolderItem>
}
