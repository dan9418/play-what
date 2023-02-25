import { PageProps } from "gatsby";
import React from "react";
import { PresetType } from "../core/models/Model.constants";
import { INotePreset, NoteId } from "../core/models/Note.presets";
import { getNoteFromId } from "../core/models/Note.utils";
import { IPod } from "../core/models/Pod.presets";

export interface IPageContext {
  presetType: PresetType;
  presetId: string;
  rootId: NoteId;
}

export type ModelPageProps = PageProps<object, IPageContext>;

const PagePropsContext = React.createContext<ModelPageProps>(undefined as any);

export const PagePropsContextProvider: React.FC<{
  value: any;
  children: any;
}> = ({ children, value }) => {
  //console.log('pw-page-props', value);
  return (
    <PagePropsContext.Provider value={value}>
      {children}
    </PagePropsContext.Provider>
  );
};

export const usePageProps = (): ModelPageProps =>
  React.useContext(PagePropsContext);

export const useRoot = (): IPod | undefined => {
  const props = usePageProps();
  return props.pageContext.rootId
    ? ((getNoteFromId(props.pageContext.rootId) as INotePreset).value as IPod)
    : undefined;
};

export const useRootId = (): NoteId | undefined => {
  const props = usePageProps();
  return props.pageContext.rootId;
};
