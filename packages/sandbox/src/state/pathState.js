import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { atom } from "recoil";
import LIBRARY_GROUP_DATA from "../data/songData";

export const pathState = atom({
	key: 'pathState',
	default: [{
		pathId: 'library',
		name: 'Library',
		modelId: MODEL_ID.Group,
		vars: {
			root: [0, 0]
		},
		modelData: LIBRARY_GROUP_DATA
	}]
});
