import { PageProps } from "gatsby";
import React, { PropsWithChildren } from "react";
import { NoteId } from "../core/models/Model.constants";
import Note from "../core/models/Note";

const PagePropsContext = React.createContext<PageProps>(undefined as any);

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

export const usePageProps = (): PageProps => React.useContext(PagePropsContext);

export const useRoot = (): Note | undefined => {
  const props: any = usePageProps();
  return props.pageContext.rootId
    ? Note.fromId(props.pageContext.rootId)
    : undefined;
};

export const useRootId = (): NoteId | undefined => {
  const root = useRoot();
  return root ? root.modelId : undefined;
};
