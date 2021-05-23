import { fullScreenState } from "@pw/sandbox/src/state/dataState";
import React from "react";
import { useRecoilState } from 'recoil';
import { IActionProps } from '../../shared/getActions';
import Viewer from '../Viewer';

// This component is a total hack, should be rectored to be supported without an action modal
const FullScreenAction: React.FC<IActionProps> = ({ pathHead }) => {
	const [fullScreenData, setFullScreenData] = useRecoilState(fullScreenState);

	React.useEffect(() => {
		setFullScreenData(<Viewer modelConfig={pathHead.config} />);
		return () => setFullScreenData(null);
	}, []);

	return null;
};

export default FullScreenAction;
