import { PageProps } from "gatsby";
import React from "react";
import { PresetType } from "../../../../core/Core.constants";
import { PresetId } from "../../../../core/Core.derived";
import { NoteId } from "../../../../core/Note.constants";

export interface IPageContext {
  presetType: PresetType;
  presetId: PresetId;
  rootId?: NoteId;
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
