import { atom } from "recoil";
import SONG from "../data/songData";

export const pathState = atom({
	key: 'pathState',
	default: [{
		name: SONG.name || 'Untitled',
		pathId: SONG.id || null,
		modelId: SONG.modelId
	}]
});
