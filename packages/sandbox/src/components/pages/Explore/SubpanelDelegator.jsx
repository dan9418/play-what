import React from "react";
import { InputContextProvider } from "../../../contexts/InputContext";
import { OutputContextProvider } from "../../../contexts/OutputContext";
import InputSubpanelContent from "./input/InputSubpanelContent";
import ViewerBox from "./output/ViewerBox";
import Subpanel from "./Subpanel";

const SubpanelDelegator = ({ data, setData, listType }) => {

	let Context = React.Fragment;
	let Content = React.Fragment;
	let caption = null;
	let preview = null;

	switch (listType) {
	case 'input':
		Context = InputContextProvider;
		Content = InputSubpanelContent;
		caption = 'in';
		preview = 'in';
		break;
	case 'output':
		Context = OutputContextProvider;
		Content = ViewerBox;
		break;
	}

	return (
		<Context data={data} setData={setData}>
			<Subpanel name={data.name} caption={caption} preview={preview}>
				<Content />
			</Subpanel>
		</Context>
	);
};

export default SubpanelDelegator;
