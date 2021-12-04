export const COLOR = {
	darkBlue: '#3C4953',
	lightBlue: '#2589BD',
	green: '#72B01D',
	orange: '#FF7F11',
	red: 'red',
	ivory: '#F6F7EB',
	// Neutral
	white: '#FFF',
	light1: '#F3F4F8',
	light2: '#D2D4DA',
	light3: '#B3B5BD',
	medium1: '#9496A1',
	medium2: '#777986',
	medium3: '#5B5D6B',
	dark1: '#404252',
	dark2: '#282A3A',
	dark3: '#101223',
	black: '#000'
}

const THEME = {
	temp: COLOR.black,
	primary: COLOR.darkBlue,
	clickable: COLOR.green,
	active: COLOR.orange,
	border: '#bbb',//COLOR.mediumLight,
	status: {
		postive: COLOR.green,
		negative: COLOR.red,
		warning: COLOR.orange,
		info: COLOR.lightBlue
	},
	surface: {
		bg: COLOR.light1,
		highlight: COLOR.light3,
		nav: COLOR.darkBlue,
		gradient: 'linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%)'
	},
	text: {
		dark: COLOR.dark3,
		mediumDark: COLOR.dark1,
		medium: COLOR.medium3,
		mediumLight: COLOR.medium1,
		light: COLOR.light3
	}
}

export default THEME;
