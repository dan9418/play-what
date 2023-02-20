import { PageProps } from "gatsby";
import React from "react";
import { ModelId, NoteId, PresetType } from "../core/models/Model.constants";
import Note from "../core/models/Note";

export interface IPageContext {
  presetType: PresetType;
  modelId: ModelId;
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

export const useRoot = (): Note | undefined => {
  const props = usePageProps();
  return props.pageContext.rootId
    ? Note.fromId(props.pageContext.rootId)
    : undefined;
};

export const useRootId = (): NoteId | undefined => {
  const root = useRoot();
  return root ? root.modelId : undefined;
};
