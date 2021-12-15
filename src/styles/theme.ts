const COLOR = {
	darkBlue: '#2C3D4C',
	lightBlue: '#2589BD',
	green: '#72B01D',
	orange: '#FF7F11',
	red: '#C50707',
	ivory: '#F6F7EB',
	// Neutral
	white: '#FFFFFF',
	light1: '#F3F4F8',
	light2: '#D2D4DA',
	light3: '#B3B5BD',
	medium1: '#9496A1',
	medium2: '#777986',
	medium3: '#5B5D6B',
	dark1: '#404252',
	dark2: '#282A3A',
	dark3: '#101223',
	black: '#000000',
	// Other
	transparent: 'transparent',
	transparentDark: 'rgba(0,0,0,0.1)',
	transparentLight: 'rgba(255,255,255,0.1)',
	gradient: 'linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%)'
}

const THEME = {
	brand: {
		primary: COLOR.orange,
		secondary: COLOR.green,
		accent: COLOR.darkBlue,
	},
	action: {
		active: COLOR.orange,
		interactive: COLOR.green,
	},
	status: {
		positive: COLOR.green,
		warning: COLOR.orange,
		negative: COLOR.red,
		info: COLOR.lightBlue,
		highlight: COLOR.ivory
	},
	surface: {
		card: COLOR.white,
		bg: COLOR.light1,
		nav: COLOR.darkBlue,
	},
	text: {
		primary: COLOR.dark1,
		secondary: COLOR.medium1,
		inverted: COLOR.white
	},
	utils: {
		border: COLOR.light3,
		transparent: COLOR.transparent,
		hoverDark: COLOR.transparentDark,
		hoverLight: COLOR.transparentLight
	}
}

export const DARK_THEME = {
	...THEME,
	surface: {
		card: COLOR.dark2,
		bg: COLOR.dark1,
		nav: COLOR.dark3,
	},
	text: {
		primary: COLOR.light2,
		secondary: COLOR.medium1,
		inverted: COLOR.light1
	},
	utils: {
		...THEME.utils,
		border: COLOR.light3
	}
}

export default THEME;
