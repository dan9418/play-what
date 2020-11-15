// import config from '../../theory/config';
// import Pod from './Pod';
// import Degree from '../index/Degree';
// import Accidental from '../index/Accidental';

// /* export const parseString = keyString => {
// 	if (typeof keyString !== 'string' || !keyString.length) {
// 		throw ('Bad keystring args')
// 	}
// 	const [tonicStr, accidentalStr] = utils.splitAt(keyString, 1);

// 	const degreeIndex = DEGREE_MAPPING.findIndex(d => d.name === tonicStr);

// 	const accidental = ACCIDENTAL_VALUES.find(a => a.name === accidentalStr) || ACCIDENTAL.Natural;

// 	return {
// 		id: keyString,
// 		name: keyString,
// 		p: DEGREE_MAPPING[degreeIndex].pitch + accidental.offset,
// 		d: degreeIndex
// 	};
// }; */


// class Note extends Pod {

// 	getName() {
// 		const reduced = new Note(this.value).reduce().getValue();
// 		const [p, d] = reduced;

// 		const degreeName = new Degree(d).getName();

// 		const offset = p - config.rootScale[d][0];
// 		const accidentalName = new Accidental(offset).getName();

// 		return `${degreeName}${accidentalName}`;
// 	};

// 	getPreset() {
// 		const reduced = this.reduce();
// 		return NOTE_VALUES.find(({ value }) => reduced.equalTo(value)) || null;
// 	};

// 	getType() {
// 		return 'note';
// 	}
// }

// export default Note;
